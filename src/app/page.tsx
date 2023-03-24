import { Inter } from 'next/font/google'
import Para from '@/components/ui/Para'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-red-500'> <Para size='sm' />  </div>
  )
}
