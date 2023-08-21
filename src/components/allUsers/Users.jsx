import { SimpleGrid } from "@chakra-ui/react"
import { useUsers } from "../../hooks/users"
import User from "./User"
const Users = () => {
   const {users, isLoading } = useUsers()
  return (
    <SimpleGrid columns={[2,3,4]} spacing={[2,3]} px={'10px'} py={'6'}>
          {users?.map((user) => (
          <User isLoading={isLoading} key={user.id} user={user} />
             
      ))}
    </SimpleGrid>
  )
}

export default Users
