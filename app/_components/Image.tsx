"use client"
import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ImageLinkProp{
    src: any;
    alt: string;
    link: string;
}
const ImageLink = ({src, alt, link}: ImageLinkProp) => {
    const router = useRouter();
  return (
    <Image src={src} alt={alt} onClick={()=>router.push(link)} />
  )
}

export default ImageLink