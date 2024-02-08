import Link from "next/link";
import React from "react";
import Todo from "../component/Todo";

export const metadata = {
  title: "posts",
};

async function page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 3000,
    },
  });
  const post = await response.json();
  const posJSX = post.map((p) => {
    return(
      <Link href={`/posts/${p.id}`} >
    <div key={p.id}
    style={{color:"white" , margin:"15px" ,backgroundColor:"white" , padding:"20px" , borderRadius:"0px 30px"}}
    >
    <h1  style={{color:"red" , fontSize:"15px"}}>{p.title}</h1>
    <p  style={{color:"black" ,fontSize:"10px" }}>{p.body}</p>
    </div>
    </Link>)
  })

  // console.log(post);
  return (
    <>
      <h1>POSTS</h1>
      
      <div style={{ display:"flex",justifyContent:"center" , alignContent:"center" , flexDirection:"column", width:"70%" , margin: "20px" , padding:"20px",
       }}
      >{posJSX}</div>
     
    </>
  );
}

export default page;
