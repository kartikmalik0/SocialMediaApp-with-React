import React from 'react';
import { Avatar as ChakraAvatar } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { PROTECTED } from '../../lib/routes';

export default function Avatar({ user, size = "xl", overrideAvatar = null }) {
  // Check if the user object is defined
  if (!user) {
    return null; // or some fallback content if desired
  }

  // Check if the username property is defined
  const username = user.username || 'User'; // Provide a default value if username is not available

  return (
    <ChakraAvatar
      as={Link}
      to={`${PROTECTED}/profile/${user?.id}`}
      name={username}
      size={size}
      src={overrideAvatar || user.avatar}
      _hover={{ cursor: "pointer", opacity: "0.8" }}
    />
  );
}
