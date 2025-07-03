import { cookies } from 'next/headers'
import React from 'react'

export default async function page() {
  const cookieStore = await cookies()
  return (
    <div>page</div>
  )
}