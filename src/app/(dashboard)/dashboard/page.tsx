import ApiDashboard from '@/app/components/ApiDashboard';
import RequestApiKey from '@/app/components/RequestApiKey';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { FC } from 'react';

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Open Source Text Similarity API'
}

const page = async () => {
    const user = await getServerSession(authOptions);
    if (!user) return notFound()

    const apiKey = await db.apiKey.findFirst({
        where: { userId: user.user.id, enabled: true },
    })

    return <div className='max-w-7xl mx-auto mt-16'>
        {apiKey ?

            // @ts-expect-error Server Component
            <ApiDashboard />
            :
            <RequestApiKey />
        }
    </div>
}

export default page