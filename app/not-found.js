import { Empty, EmptyDescription, EmptyImage, EmptyTitle } from 'keep-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>
      <Empty>
        <EmptyImage>
          <Image
            src="https://staticmania.cdn.prismic.io/staticmania/499b23f3-41ed-4bc9-a9eb-43d13779d2f8_Property+1%3DSad+screen_+Property+2%3DSm.svg"
            height={234}
            width={350}
            alt="404"
          />
        </EmptyImage>
        <EmptyTitle className="mb-[14px] text-white mt-5">Oops! You seem to be lost</EmptyTitle>
        <EmptyDescription className="mb-8 text-yellow-300">
          You seems lost in nowhere. Please try out specific route!
        </EmptyDescription>
        <Link href="/">
          Go to home
        </Link>
      </Empty>
    </div>
  )
}
