import React from "react";

async function PostDetails({ params }) {
  const p_ID = params.postisID;

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${p_ID}`,
    {
      next: {
        revalidate: 3000,
      },
    }
  );
  const post = await response.json();

  console.log(params.postisID);
  return (
    <div>
      <h4
        style={{
          margin: "20px",
          backgroundColor: "white",
          color: "black",
          padding: "10px",
          width: "auto",
          borderRadius: "30% 0%",
        }}
      >
        {post.title}
      </h4>
      <p style={{ margin: "20px" }}>{post.body}</p>
      <hr></hr>
    </div>
  );
}

export default PostDetails;
