import React, { Children } from 'react'

export const metadata={
    title:"articles"
}

function layout({children}) {
  return (
    <div>
        <h1>Articles</h1>
        <div>{children}</div>
    </div>
  )
}

export default layout