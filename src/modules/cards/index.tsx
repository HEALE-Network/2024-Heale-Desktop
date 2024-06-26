import { Badge, Box, Flex, Heading, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import CardDetailModal from './components/CardDetailModal';
import ResetCardPinModal from './components/ResetCardPinModal';
import { CardIcon } from 'modules/shared/Icons';
import LostDamagedCardModal from './components/LostDamagedCardModal';
import EditNameModal from './components/EditNameModal';
import ActivateCardModal from './components/ActivateCardModal';
import ButtonTheme from 'modules/shared/ButtonTheme';
import { getUserFromLocalStorage } from 'services/localStorage.sevice';
import CreateCardModal from './components/CreateCardModal';

const Cards = () => {
    const { isOpen: isOpenCreateCardModal, onOpen: onOpenCreateCardModal, onClose: onCloseCreateCardModal } = useDisclosure()

    const [isCardModalOpen, setCardModalOpen] = useState(false);
    const [isResetModalOpen, setResetModalOpen] = useState(false);
    const [isLostDamageModalOpen, setLostDamageModalOpen] = useState(false);
    const [isEditNameModalOpen, setEditNameModalOpen] = useState(false);
    const [isActivateCardModalOpen, setActivateCardModalOpen] = useState(false);

    const openCardModal = () => {
        setCardModalOpen(true);
    };

    const closeCardModal = () => {
        setCardModalOpen(false);
    };

    const openResetModal = () => {
        setCardModalOpen(false);
        setResetModalOpen(true);
    };

    const closeResetModal = () => {
        setResetModalOpen(false);
        setCardModalOpen(true);
    };

    const closeLostDamageModal = () => {
        setLostDamageModalOpen(false);
        setCardModalOpen(true);
    };

    const openLostDamageModal = () => {
        setLostDamageModalOpen(true);
        setCardModalOpen(false);
    }

    const closeEditNameModal = () => {
        setEditNameModalOpen(false);
        setCardModalOpen(true);
    };

    const openEditNameModal = () => {
        setEditNameModalOpen(true);
        setCardModalOpen(false);
    };

    const closeActivateCardModal = () => {
        setActivateCardModalOpen(false);
        setCardModalOpen(true);
    };

    const openActivateCardModal = () => {
        setActivateCardModalOpen(true);
        setCardModalOpen(false);
    };

    return (
        <Box>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Heading fontSize={"3xl"}>
                    Cards
                </Heading>
                {getUserFromLocalStorage()?.default_profile?.account_type === "Personal" ? "" :
                    <ButtonTheme btnText='Create Card' chakraProps={{
                        onClick: onOpenCreateCardModal
                    }} primary />
                }
            </Flex>
            <TableContainer mt={6}
                sx={{
                    "th": {
                        color: "Neutral.700",
                        fontSize: "sm",
                        textTransform: "capitalize",
                        fontWeight: "400"
                    },
                    "tr": {
                        cursor: "pointer"
                    },
                    // "tbody tr": {
                    //     "td:first-child": {
                    //         bgColor: "white"
                    //     },
                    //     "_hover": {
                    //         bgColor: "Neutral.200"
                    //     }
                    // },
                    "td": {
                        color: "Primary.Navy",
                        fontSize: "sm",
                        textTransform: "capitalize",
                        fontWeight: "600",
                        ".chakra-badge": {
                            textTransform: "capitalize"
                        }
                    }
                }}>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Cardholder</Th>
                            <Th>Card Number</Th>
                            <Th>Spent this Month</Th>
                            <Th>Type</Th>
                            <Th>Account</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr onClick={openCardModal}>
                            <Td rowSpan={2}>
                                <Flex gap={2} alignItems={"center"}>
                                    <Heading fontSize={"sm"} color={"Primary.Navy"}>Jeff Bridges</Heading>
                                    <Badge px={2} borderRadius={"full"} bgColor={"Neutral.100"} color={"Primary.Navy40"}>You</Badge>
                                </Flex>
                            </Td>
                            <Td>
                                <Flex gap={2} alignItems={"center"}>
                                    <CardIcon />
                                    <Heading color={"Primary.Navy"} fontSize={"sm"}>••••3456</Heading>
                                </Flex>
                            </Td>
                            <Td><Text>$1,500 <Text as={"span"} color={"Neutral.700"}>USD</Text></Text></Td>
                            <Td><Text color={"Neutral.700"}>Business</Text></Td>
                            <Td>Checking ••••0101</Td>
                        </Tr>
                        <Tr onClick={openCardModal}>
                            <Td>
                                <Flex gap={2} alignItems={"center"}>
                                    <CardIcon />
                                    <Heading color={"Primary.Navy"} fontSize={"sm"}>••••2948</Heading>
                                </Flex>
                            </Td>
                            <Td><Text>$1,500 <Text as={"span"} color={"Neutral.700"}>USD</Text></Text></Td>
                            <Td><Text color={"Neutral.700"}>Personal</Text></Td>
                            <Td>Checking ••••0101</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            <CardDetailModal isOpen={isCardModalOpen} onClose={closeCardModal} onOpenReset={openResetModal} onOpenLostDamage={openLostDamageModal} onOpenEditName={openEditNameModal} onOpenActiveCard={openActivateCardModal} />
            <ResetCardPinModal isOpen={isResetModalOpen} onClose={closeResetModal} />
            <LostDamagedCardModal isOpen={isLostDamageModalOpen} onClose={closeLostDamageModal} />
            <EditNameModal isOpen={isEditNameModalOpen} onClose={closeEditNameModal} />
            <ActivateCardModal isOpen={isActivateCardModalOpen} onClose={closeActivateCardModal} />
            <CreateCardModal isOpen={isOpenCreateCardModal} onOpenActiveCard={openActivateCardModal} onClose={onCloseCreateCardModal} />
        </Box>
    )
}

export default Cards;
