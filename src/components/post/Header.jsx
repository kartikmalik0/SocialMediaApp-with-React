import { Box, Flex, Text } from '@chakra-ui/react';
import { useUser } from '../../hooks/users';
import Avatar from '../profile/Avatar';
import { formatDistanceToNow } from 'date-fns';
import UserButton from '../profile/userButton';

const Header = ({ post }) => {
  const { uid, date} = post
  const { user, isLoading } = useUser(uid);
  if (isLoading) {
    return <div>Loading user...</div>;
  }

  return (
    <Flex
      alignItems="center"
      borderBottom="2px solid"
      borderColor="teal.100"
      p="3"
      bg="gray.50"
    >
      <Avatar user={user} size="md" />

      <Box ml={4}>
              <UserButton user={user}/>
              <Text fontSize={'sm'} color={'gray.500'}>
                  {formatDistanceToNow(date)} ago
              </Text>
      </Box>
    </Flex>
  );
};

export default Header;
