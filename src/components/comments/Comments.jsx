import { Box } from "@chakra-ui/react"
import Post from "../post/Post"
import { useParams } from "react-router-dom"
import { usePost } from "../../hooks/posts"
import NewComment from "./NewComment"
import CommentList from "./CommentList"
const Comments = () => {
  const { id } = useParams()

  
  console.log(id)
  const { post, isLoading } = usePost(id)
  
  if(isLoading) return 'Loading...'

  return (
    <Box align={'center'} pt={50}>
      <Post post={post} id={id} />
      <NewComment post={post} />
      <CommentList post={post}/>
    </Box>
  )
}

export default Comments
 