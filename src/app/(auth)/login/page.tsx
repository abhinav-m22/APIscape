import Icons from '@/app/components/Icons'
import { buttonVariants } from '@/app/components/ui/Button'
import Heading from '@/app/components/ui/Heading'
import Para from '@/app/components/ui/Para'
import UserAuthForm from '@/app/components/UserAuthForm'
import Link from 'next/link'
import { FC } from 'react'

const page: FC = () => {
    return(
        <div className="absolute inset-0 mx-auto container flex h-screen flex-col items-center justify-center">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg">
                <div className="flex flex-col items-center gap-6 text-center">
                    <Link className={buttonVariants({
                        variant: 'ghost',
                        className: 'w-fit',
                    })}
                    href='/'
                    >
                        <Icons.ChevronLeft className='mr-2 h-4 w-4'/>
                        Back to Home
                    </Link>

                    <Heading>Welcome Back!</Heading>
                    <Para>Sign in with your Google account</Para>

                    <UserAuthForm />
                </div>
            </div>
        </div>
    )
}

export default page