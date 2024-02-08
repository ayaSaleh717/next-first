import React from 'react'
import Link from "next/link"

function page() {
    
  return (
   <>
     <h2>ARTICLE</h2>
     <Link href= "/articls/featured" >
    <button type="button">Featured</button>

    </Link>
   </>
  )
}


export default page