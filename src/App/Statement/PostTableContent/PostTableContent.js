import React from "react";
import Signature from "./Signature/Signature";
import Asterisks from "./Asterisks/Asterisks";
import PostTableText from "./PostTableText/PostTableText";

function PostTableContent({ data, signatureImageURL }) {
  return (
    <React.Fragment>
      <PostTableText data={data} />
      <Signature signatureImageURL={signatureImageURL} />
      <Asterisks />
    </React.Fragment>
  );
}

export default PostTableContent;
