import React from 'react'
import { Button } from '../components/Button' // Adjust path as needed

export default function btntest() {
  return (
    <div className="p-8 flex flex-col gap-4">
       
        <Button size="button-sm" intent="primary" variant="solid">
            Sign in
        </Button>

    </div>
  )
}
