import { Box, Text } from "@chakra-ui/react"
import Post from "./Post"

const Posts = ({ posts }) => {
  // console.log(posts)
  return (
    <Box px={4} align={'center'}>
      {posts.length === 0 ?
        <Text fontSize={'xl'} textAlign={'center'}> No post yet... Feeling a little lonely here.</Text>
        : posts.map((post) => <Post key={post.id} post={post} />)}
    </Box>
  )
}

export default Posts
