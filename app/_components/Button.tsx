"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

interface ButtonProps {
  id: string;
}
const Button = ({id}:ButtonProps) => {
    const router = useRouter();
  return (
    <button onClick={()=>router.push(`/${id}`)}>More Details</button>
  )
}

export default Button