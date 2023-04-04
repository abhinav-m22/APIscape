import { FC } from 'react'
import Heading from '@/app/components/ui/Heading'

import type { Metadata } from 'next'
import Para from '@/app/components/ui/Para'
import DocumentationTabs from '@/app/components/ui/DocumentationTabs'

import 'simplebar-react/dist/simplebar.min.css'

export const metadata: Metadata = {
    title: 'Documentation',
    description: 'Open Source Text Similarity API'
}

const page: FC = () => {
    return <div className='container max-w-7xl mx-auto mt-12'>
        <div className='flex flex-col items-center gap-6'>
            <Heading>Making a request</Heading>
            <Para>api/v1/similarity</Para>

            <DocumentationTabs />
        </div>
    </div>
}

export default page