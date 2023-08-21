import { Box, Text } from "@chakra-ui/react"
import Header from "./Header"
import Actions from "./Actions"


const Post = ({ post }) => {
    const { text, uid, date } = post
    return ( <
        Box p = { 2 }
        maxW = { '600px' }
        textAlign = { 'left' } >
        <
        Box border = { '2px solid' }
        borderColor = { 'gray.100' }
        borderRadius = { 'md' } >
        <
        Header uid = { uid }
        date = { date }
        post = { post }
        />


        <
        Box p = { 2 }
        minH = { '100px' } >
        <
        Text wordBreak = { 'break-word' }
        fontSize = {
            ['sm', 'md'] } > { text } <
        /Text> <
        /Box> <
        Actions post = { post }
        /> <
        /Box> <
        /Box>
    )
}

export default Post