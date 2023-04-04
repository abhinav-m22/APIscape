import { Inter } from 'next/font/google'
import Para from './components/ui/Para'
import type { Metadata } from 'next'
import Heading from './components/ui/Heading'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'APIscape | Home',
  description: 'Open Source Text Similarity API'
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='relative h-screen flex items-center justify-center, overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl mx-auto w-full h-full'>
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
          <Heading size='lg' className='three-d text-black dark:text-light-gold'>
            Revolutionize Your Text Analytics with Our Intelligent Similarity API
          </Heading>

          <Para className='max-w-xl lg:text-left'>
          Calculate the similarity score between two pieces of text by creating a free{' '}
          <Link href='/login' className='underline-offset-2 text-black dark:text-light-gold hover:underline'>API Key</Link>.
          </Para>
        </div>
      </div>
    </div>

  )
}
