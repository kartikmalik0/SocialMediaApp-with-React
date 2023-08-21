import { Box } from "@chakra-ui/react"
import { useComments } from "../../hooks/comment"
import Comment from "./Comment";

export default function CommentList({ post }) {
    const { id } = post;
    
    const { comments, isLoading } = useComments(id);
    if (isLoading) return " loading..."
    
    
  
    return (
        <Box>
        {comments.map((comment) => (
           <Comment comment={comment} key={comment.id} />
        ))}
      </Box>
    );
  }
