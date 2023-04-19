'use client'

import { Loader, Loader2 } from 'lucide-react'
import { FC, useState } from 'react'
import { Button } from './ui/Button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/DropdownMenu'
import { toast } from './ui/Toast'
import { useRouter } from 'next/navigation'
import { createApiKey } from '@/constants/createApiKey'
import { revokeApiKey } from '@/constants/revokeApiKey'

interface ApiKeyOptionsProps{
    apiKeyId: string,
    key: string
}

const ApiKeyOptions: FC<ApiKeyOptionsProps> = ({apiKeyId, key}) => {

    const [isCreatingNew, setIsCreatingNew] = useState<boolean>(false)
    const [isRevoking, setIsRevoking] = useState<boolean>(false)
    const router = useRouter()

    const createNewApiKey = async () => {
        setIsCreatingNew(true)

        try {
            await revokeApiKey({keyId: apiKeyId})
            await createApiKey()
            router.refresh()
        } 
        catch (error) {
            toast({
                title: 'Error creating API Key',
                message: 'Please try again later',
                type: 'error',
            })
        }
        finally{
            setIsCreatingNew(false)
        }
    }

    const revokeCurrentApiKey = async () => {
        setIsRevoking(true)
        try {
            await revokeApiKey({keyId: apiKeyId})
            router.refresh()
        } 
        catch (error) {
            toast({
                title: 'Error revoking API Key',
                message: 'Please try again later',
                type: 'error',
            })
        }
        finally{
            setIsRevoking(false)
        }
    }

    return (
        <DropdownMenu>
        <DropdownMenuTrigger disabled={isCreatingNew || isRevoking} asChild>
            <Button variant='ghost' className='flex gap-2 items-center'>
                <p>
                    {isCreatingNew ? 'Creating New Key' : isRevoking ? 'Revoking Key' : 'Options'}
                </p>
                {isCreatingNew || isRevoking ? (
                    <Loader2 className='animate-spin h-4 w-4' />
                ) : null}
            </Button>

        </DropdownMenuTrigger>

        <DropdownMenuContent>
            <DropdownMenuItem onClick={() => {
                navigator.clipboard.writeText(key)

                toast({
                    title: 'Copied',
                    message: 'API Key copied to clipboard',
                    type: 'success',
                })
            }}>
                Copy
            </DropdownMenuItem>
            <DropdownMenuItem onClick={createApiKey}>
                Create New Key
            </DropdownMenuItem>
            <DropdownMenuItem onClick={revokeCurrentApiKey}>
                Revoke Key
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
    )
}

export default ApiKeyOptions