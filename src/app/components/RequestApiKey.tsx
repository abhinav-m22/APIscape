"use client"

import { createApiKey } from '@/constants/createApiKey'
import { Key } from 'lucide-react'
import React, { FormEvent, useState } from 'react'
import { Button } from './ui/Button'
import CopyButton from './ui/CopyButton'
import Heading from './ui/Heading'
import { Input } from './ui/Input'
import Para from './ui/Para'
import { toast } from './ui/Toast'

const RequestApiKey = () => {
    const [isCreating, setIsCreating] = useState<boolean>(false)

    const [apiKey, setApiKey] = useState<string | null>(null)

    const createNewApiKey = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setIsCreating(true)

        try {
            const genApiKey = await createApiKey()
            setApiKey(genApiKey)
        } catch (error) {
            if (error instanceof Error) {
                toast({
                    title: 'Error!',
                    message: error.message,
                    type: 'error',
                })

                return
            }

            toast({
                title: 'Error!',
                message: 'Something went wrong',
                type: 'error',
            })
        }
        finally {
            setIsCreating(false)
        }
    }

    return (
        <div className='container md:max-w-2xl'>
            <div className='flex flex-col gap-6 items-center'>
                <Key className='mx-auto h-12 w-12 text-gray-400' />
                <Heading className='text-center'>Request your API Key</Heading>
                <Para>You haven't requested an API Key yet</Para>
            </div>
            <form
                onSubmit={createNewApiKey}
                className='mt-6 sm:flex sm:items-center'
                action='#'
            >
                <div className='relative rounded-md shadow-sm sm:min-w-0 sm:flex-1'>
                    {apiKey ? (
                        <CopyButton valueToCopy={apiKey} type='button' className='absolute inset-y-0 right-0 animate-in fade-in duration-300' />
                    ) : null}
                    <Input readOnly value={apiKey ?? ''} placeholder='Request an API key' />
                </div>
                <div className='mt-3 flex justify-center sm:mt-0 sm:ml-4 sm:flex-shrink-0'>
                    <Button disabled={!!apiKey} isLoading={isCreating}>Request Key</Button>
                </div>
            </form>
        </div>
    )
}

export default RequestApiKey