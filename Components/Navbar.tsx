"use client";
import { FC } from "react";
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Link,
    Button,
    useDisclosure,
    Stack,
    Image,
} from "@chakra-ui/react";
import {
    HamburgerIcon,
    CloseIcon,
} from "@chakra-ui/icons";

const Navbar: FC = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                zIndex={20}
                right={0}
                left={0}
                boxShadow="md"
                position={"fixed"}
                top={0}
                bg="#232727"
                px={4}
            >
                <Flex h={"100px"} alignItems={"center"} justifyContent={"space-between"}>
                    <HStack spacing={2} alignItems={"center"}>
                        <Flex
                            rounded="md"
                            justify={"center"}
                            zIndex={10}
                            mx="4"
                            display={{ base: "center", md: "flex", lg: "flex" }}
                            align={"center"}
                        >
                            <Link
                                href="/"
                            >
                                <Image
                                    src={
                                        "./Logo.png"
                                    }
                                    alt="logo"
                                    height={50}
                                    width={50}
                                />
                            </Link>
                        </Flex>
                        <HStack
                            as={"nav"}
                            spacing={4}
                            display={{ base: "none", md: "flex" }}
                        >
                            <Link
                                px={2}
                                py={1}
                                rounded={"md"}
                                color="white"
                                fontWeight="semibold"
                                transition="0.25s ease"
                                _hover={{
                                    textDecoration: "none",
                                    transition: "0.25s ease",
                                    bgGradient: "linear(to-r, #18514e, #225d61, #326874, #457386, #5b7d96, #5b7d96, #5b7d96, #5b7d96, #457386, #326874, #225d61, #18514e)",
                                    bgClip: "text"
                                }}
                                href="/"
                            >
                                Home
                            </Link>
                            <Link
                                px={2}
                                py={1}
                                rounded={"md"}
                                color="white"
                                fontWeight="semibold"
                                transition="0.25s ease"
                                _hover={{
                                    textDecoration: "none",
                                    transition: "0.25s ease",
                                    bgGradient: "linear(to-r, #18514e, #225d61, #326874, #457386, #5b7d96, #5b7d96, #5b7d96, #5b7d96, #457386, #326874, #225d61, #18514e)",
                                    bgClip: "text"
                                }}
                                href="/courses"
                            >
                                Courses
                            </Link>
                        </HStack>
                    </HStack>
                    <Flex alignItems={"center"} display={{ base: "none", md: "flex" }}>
                        <Link
                            _hover={{
                                textDecoration: "none",
                            }}
                            href="https://portal.piaic.org/"
                        >
                            <Button
                                variant={"solid"}
                                bg="black"
                                color={"gray.50"}
                                _hover={{
                                    textDecoration: "none",
                                    bg: "white",
                                    color: "black"
                                }}
                                size={"sm"}
                                py={5}
                                px={4}
                                mx="4"
                            >
                                Apply
                            </Button>
                        </Link>
                    </Flex>
                    <IconButton
                        color={"white"}
                        bg="black"
                        mr="2"
                        size={"lg"}
                        _hover={{
                            textDecoration: "none",
                            bg: "white",
                            color: "black"
                        }}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                </Flex>

                {isOpen ? (
                    <Box
                        pb={8}
                        display={{ md: "none" }}
                    >
                        <Stack
                            as={"nav"}
                            spacing={6}
                        >
                            <Link
                                px={2}
                                py={1}
                                rounded={"md"}
                                color="white"
                                fontWeight="semibold"
                                transition="0.25s ease"
                                _hover={{
                                    textDecoration: "none",
                                    transition: "0.25s ease",
                                    bgGradient: "linear(to-r, #18514e, #225d61, #326874, #457386, #5b7d96, #5b7d96, #5b7d96, #5b7d96, #457386, #326874, #225d61, #18514e)",
                                    bgClip: "text"
                                }}
                                href="/"
                            >
                                Home
                            </Link>
                            <Link
                                px={2}
                                py={1}
                                rounded={"md"}
                                color="white"
                                fontWeight="semibold"
                                transition="0.25s ease"
                                _hover={{
                                    textDecoration: "none",
                                    transition: "0.25s ease",
                                    bgGradient: "linear(to-r, #18514e, #225d61, #326874, #457386, #5b7d96, #5b7d96, #5b7d96, #5b7d96, #457386, #326874, #225d61, #18514e)",
                                    bgClip: "text"
                                }}
                                href="/courses"
                            >
                                Courses
                            </Link>
                            <Link
                                _hover={{
                                    textDecoration: "none",
                                }}
                                href="https://portal.piaic.org/"
                            >
                                <Button
                                    variant={"solid"}
                                    bg="black"
                                    color={"gray.50"}
                                    _hover={{
                                        textDecoration: "none",
                                        bg: "white",
                                        color: "black"
                                    }}
                                    size={"sm"}
                                    py={5}
                                    px={4}
                                    mr={4}
                                >
                                    Apply
                                </Button>
                            </Link>
                        </Stack>
                    </Box>
                ) : null}

            </Box>
        </>
    );
};

export default Navbar;