import React, { ReactElement, useState } from "react";
// import { useCommContext } from "../contexts/CommentContext/CommentContext";
import { Comment } from "../contexts/CommentContext/comType";

const CommentInput = () => {
  // const { onSubmit } = useCommContext();
  const [text, setText] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newComment = { id: Date.now(), text, editable: false };
    setComments([...comments, newComment]);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentInput;
