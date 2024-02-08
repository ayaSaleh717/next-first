import React from 'react'


export const metadata={
    title:"shaow articles"
}
function page(props) {
    console.log(props)

  return (
    <>
        <h2>Show Article</h2>
        <h2>{props.params.title}</h2>
    </>
  )
}

export default page