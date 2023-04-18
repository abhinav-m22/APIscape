import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'
import React from 'react'
import { formatDistance } from 'date-fns'
import Heading from './ui/Heading'
import Para from './ui/Para'
import { Input } from './ui/Input'
import Table from './Table'

const ApiDashboard = async() => {

  const user = await getServerSession(authOptions)
  if(!user) notFound()

  const apiKeys = await db.apiKey.findMany({
    where: {
      userId: user.user.id
    }
  })

  const activeApiKey = apiKeys.find((apiKey) => apiKey.enabled)
  if(!activeApiKey) notFound()

  const userRequests = await db.apiRequest.findMany({
    where: {
      apiKeyId: {
        in: apiKeys.map((key) => key.id)
      }
    },
  })

  const serializableRequests = userRequests.map((req) => ({
    ...req,
    timestamp: formatDistance(new Date(req.timestamp), new Date())
  }))

  return (
    <div className='container flex flex-col gap-6 items-center'>
      <Heading>Welcome Back, {user.user.name}</Heading>
      <div className='flex flex-col gap-4 justify-center md:justify-start items-center'>
        <Para>Your API Key: </Para>
        <Input className='w-fit truncate' readOnly value={activeApiKey.key} />

        <Para className='text-center md:text-left mt-4 -mb-4'>Your API History: </Para>

        <Table userRequests={serializableRequests} />
      </div>
    </div>
  )
}

export default ApiDashboard