import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Landinf page</h1>

      <div>
        <Link href='/sign-in'>
        <Button>
          Signin
        </Button>
        </Link>
        <Link href='/sign-up'>
        <Button>
          Register
        </Button>
        </Link>
      </div>
    </div>
  )
}

export default page