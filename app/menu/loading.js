import { Spinner } from 'keep-react'
import React from 'react'

export default function loading() {
  return (
    <div className='flex justify-center my-10'>
        <div>
            <Spinner/>
        </div>
    </div>
  )
}
