import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet, useNavigate } from 'react-router-dom'

const DashboardLayout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const onboardingStep = localStorage.getItem('onboardingStep');
        const accountType = localStorage.getItem('accountType');

        if (onboardingStep) {
            if (accountType === 'Personal') {
                navigate('/personal');
            } else if (accountType === 'Business') {
                navigate('/business');
            }
        }
    }, [navigate]);

    return (
        <Flex>
            <Box w={"18%"}>
                <Sidebar />
            </Box>
            <Box flexGrow={1} w={"82%"} pos={"relative"}>
                <Header />
                <Box p={6}><Outlet /></Box>
            </Box>
        </Flex>
    )
}

export default DashboardLayout;
