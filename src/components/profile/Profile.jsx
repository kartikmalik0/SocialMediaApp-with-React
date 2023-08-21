import { Button, Divider, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import Avatar from "./Avatar";

import Posts from "../post/Posts";
import { usePosts } from "../../hooks/posts";
import { useUser } from "../../hooks/users";
import { format } from "date-fns";
import { useDisclosure } from '@chakra-ui/react'
import EditProfile from "./EditProfile";
import { useAuth } from "../../hooks/auth";
import { useParams } from "react-router-dom";

export default function Profile() {
    const { id } = useParams()
    // console.log(id)
    const { posts, isLoading: postsLoading } = usePosts(id);
    const { user, isLoading: userLoading } = useUser(id);
    const { user: authUser, isloading: authLoading } = useAuth();
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    if (userLoading) return "Loading...";
 
    return (
      <Stack spacing="5">
        <Flex p={["4", "6"]} pos="relative" align="center">
          <Avatar size="2xl" user={user} />
  
          {!authLoading && authUser.id === user.id && (
            <Button
              pos="absolute"
              mb="2"
              top="6"
              right="6"
              colorScheme="teal"
              onClick={onOpen}
            >
              Change avatar
            </Button>
          )}
  
          <Stack ml="10">
            <Text fontSize="2xl">{user.username}</Text>
            <HStack spacing="10">
              <Text color="gray.700" fontSize={["sm", "lg"]}>
                Posts: {posts.length}
              </Text>
              <Text color="gray.700" fontSize={["sm", "lg"]}>
                Likes: todo!
              </Text>
              <Text color="gray.700" fontSize={["sm", "lg"]}>
                Joined: {format(user.date, "MMMM YYY")}
              </Text>
            </HStack>
          </Stack>
  
          <EditProfile isOpen={isOpen} onClose={onClose} />
        </Flex>
        <Divider />
  
        {postsLoading ? (
          <Text>Posts are loading...</Text>
        ) : (
          <Posts posts={posts} />
        )}
      </Stack>
    );
  }