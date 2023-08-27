// import React, {
//   FC,
//   ReactNode,
//   createContext,
//   useContext,
//   useState,
// } from "react";
// import { Comment, CommentContextTypes } from "./comType";

// const commContext = createContext<CommentContextTypes | null>(null);

// //custom function
// export const useCommContext = (): CommentContextTypes => {
//   return useContext(commContext) as CommentContextTypes;
// };

// interface commContextProps {
//   children: ReactNode;
// }

// const CommentContext: FC<commContextProps> = ({ children }) => {
//   const [comments, setComments] = useState<Comment[]>([]);

//   const onSubmit = (text: string) => {
//     const newComment = { id: Date.now(), text, editable: false };
//     setComments([...comments, newComment]);
//   };

//   const value = { onSubmit };
//   return <commContext.Provider value={value}>{children}</commContext.Provider>;
// };

// export default CommentContext;
import React from "react";

const CommentContext = () => {
  return <div>CommentContext</div>;
};

export default CommentContext;
