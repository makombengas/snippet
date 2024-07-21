import Image from 'next/image'
import React from 'react'

const SnippetLoading = () => {
  return (
    <div className='h-[100vh] flex justify-center items-center'>
    <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500">
        </div>
          <h2 className='fixed'>SNIPPET</h2>
            {/* <Image fill sizes='20vw' src="/public/images/avatar.svg" alt='loading' className="rounded-full h-28 w-28"/> */}
        </div>
    </div>
  )
}

export default SnippetLoading