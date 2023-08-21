import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { DASHBOARD } from "../../lib/routes"
import { useAuth } from "../../hooks/auth"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { Box, Flex } from "@chakra-ui/react"
const Layout = () => {

    const { pathname } = useLocation()
    const navigate = useNavigate()
    const { user, isLoading } = useAuth()

    useEffect(() => {
        if (!isLoading && pathname.startsWith('/protected') && !user) {
            navigate(DASHBOARD)
        }
    }, [pathname, user, isLoading])
    if (isLoading) return 'loading...'
    return ( <
        div >
        <
        Navbar / >
        <
        Flex pt = "16"
        pb = "12"
        mx = "auto"
        w = "full"
        maxW = "1200px" >
        <
        Box w = "900px" >
        <
        Outlet / >
        <
        /Box> <
        Sidebar / >
        <
        /Flex> <
        /div>
    )
}

export default Layout