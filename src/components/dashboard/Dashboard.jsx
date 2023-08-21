import { Box, Button, HStack, Heading, Textarea } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { useAddPost, usePosts } from "../../hooks/posts"
import { useAuth } from "../../hooks/auth"
import Posts from "../post/Posts"

const NewPost = function () {
  const { register, handleSubmit, reset } = useForm()
  const { addPost, isLoading: addingPost } = useAddPost()
  const { user, isloading: authLoading } = useAuth()

  function handleAddPost(data) {
    addPost({
      uid: user.id,
      text: data.text,
    });
    reset();
  }

  return (
    <Box maxW={'600px'} mx={'auto'} py={10}>
      <form onSubmit={handleSubmit((data) => handleAddPost(data))}>
        <HStack justify={'space-between'}>
          <Heading size={'lg'}>New Post</Heading>
          <Button colorScheme="teal" type="submit" isLoading={addingPost} loadingText="Loading">Post</Button>
        </HStack>
        <Textarea resize={'none'} mt={'5'} placeholder="Create a new post..." {...register('text', { required: true })} />
      </form>
    </Box>
  )
}

function Dashboard() {
  const { posts, isLoading: postLoading } = usePosts()
  
  
  return (
    <Box>
      <NewPost />
      {postLoading?"Loading Posts..." : <Posts posts={posts} /> }
      
    </Box>
  )
}

export default Dashboard
