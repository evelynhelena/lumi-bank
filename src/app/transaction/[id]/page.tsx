'use client'

import { useParams } from 'next/navigation'

export default function InserdTransaciton(){
    const params = useParams()
    console.log(params)
    return(
        <h1>insert </h1>
    )
}