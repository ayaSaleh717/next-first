import PostDetails from '@/app/component/postDetails';
import React, { Suspense } from 'react'

async function pageDetails({params}) {

  const loadJSX = (
    <div>
      <h2> Loading ....</h2>
    </div>
  )



  return (
    <div style={{
    padding:"20px",
    margin:"20px",
    display:"grid",
    
    
    }}>
        <h1 style={{margin:"20px" , textDecoration:"overline"}} 
        >Post Details</h1>
        <Suspense fallback={loadJSX} >
        <PostDetails params = {params} />
        </Suspense>
    </div>
  )
}

export default pageDetails