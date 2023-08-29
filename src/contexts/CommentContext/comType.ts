import CommentContext from "./CommentContext";

export interface Comment {
  id: number;
  text: string;
  editable: boolean;
}
export interface CommentContextTypes {
  onSubmit: (text: string) => void;
}
