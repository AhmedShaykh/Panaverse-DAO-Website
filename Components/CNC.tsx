"use client";
import { FC } from "react";
import {
    Box,
    Container,
    Heading,
    Stack,
    Text,
    chakra,
    HStack,
    VStack,
    Flex,
    useColorModeValue,
    useBreakpointValue
} from '@chakra-ui/react';
import { CardProps } from "./Types";

const milestones = [
    {
        id: 1,
        title: 'Quarter IV',
        description: `CN-351: Certified Kubernetes Application Developer (CKAD)`
    },
    {
        id: 2,
        title: 'Quarter V',
        description: `CN-361: Developing Multi-Cloud APIs using CDK for Terraform`
    },
];

const CNC: FC = () => {

    const isMobile = useBreakpointValue({ base: true, md: false });

    const isDesktop = useBreakpointValue({ base: false, md: true });

    return (
        <Box>
            <Box
                bgGradient="linear(to-r, #051937, #00181a, #0A0B09)"
                color="white"
            >
                <Container maxW={'7xl'}>
                    <Stack
                        textAlign={'center'}
                        align={'center'}
                        px={{ base: "auto", sm: 2 }}
                        py={{ base: 24, md: 32 }}
                    >
                        <Heading
                            as="h2"
                            lineHeight={1.3}
                            fontWeight={"bold"}
                            fontSize={{ base: '3xl', sm: '5xl', lg: '6xl' }}
                        >
                            Cloud Native & Mobile Web Computing Specialization
                        </Heading>
                        <Text
                            fontSize={{ base: 16, sm: 20 }}
                            lineHeight={1.5}
                            pt={{ base: "3", md: "4" }}
                        >
                            The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.
                        </Text>
                    </Stack>
                </Container>
            </Box>

            <Box bg="white">
                <Container maxWidth="7xl"
                    p={{ base: 4, sm: 10 }}
                >
                    {milestones.map((milestone) => (
                        <Flex key={milestone.id} mb="10px">
                            {/* Desktop view(left card) */}
                            {isDesktop && milestone.id % 2 === 0 && (
                                <>
                                    <EmptyCard />
                                    <LineWithDot />
                                    <Card {...milestone} />
                                </>
                            )}

                            {/* Mobile view */}
                            {isMobile && (
                                <>
                                    <Card {...milestone} />
                                </>
                            )}

                            {/* Desktop view(right card) */}
                            {isDesktop && milestone.id % 2 !== 0 && (
                                <>
                                    <Card {...milestone} />

                                    <LineWithDot />
                                    <EmptyCard />
                                </>
                            )}
                        </Flex>
                    ))}
                </Container>
            </Box>
        </Box>
    )
};

const Card = ({ id, title, description }: CardProps) => {
    // For even id show card on left side
    // For odd id show card on right side
    const isEvenId = id % 2 == 0;
    let leftValue = isEvenId ? '-15px' : 'unset';
    let rightValue = isEvenId ? 'unset' : '-15px';

    const isMobile = useBreakpointValue({ base: true, md: false });
    if (isMobile) {
        leftValue = '-15px';
        rightValue = 'unset';
    }

    return (
        <HStack
            flex={1}
            p={{ base: 4, sm: 6 }}
            my={{ base: 2 }}
            bgGradient="linear(to-r, #051937, #00181a, #0A0B09)"
            color="white"
            spacing={5}
            rounded="lg"
            alignItems="center"
            pos="relative"
            boxShadow={useColorModeValue(
                "0 4px 6px rgb(20 22 23 / 60%)",
                "0 4px 6px rgba(9, 17, 28, 0.9)"
            )}
            _before={{
                content: `""`,
                w: '0',
                h: '0',
                borderColor: { md: `transparent ${useColorModeValue("#162022", "#162022")} transparent` },
                borderStyle: 'solid',
                position: 'absolute',
                left: leftValue,
                right: rightValue,
                display: 'block'
            }}
        >
            <Box>
                <VStack spacing={2} mb={3} textAlign="left">
                    <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
                        {title}
                    </chakra.h1>
                    <Text fontSize="md">{description}</Text>
                </VStack>
            </Box>
        </HStack>
    );
};

const LineWithDot = () => {
    return (
        <Flex
            pos="relative"
            alignItems="center"
            mr={{ base: '40px', md: '40px' }}
            ml={{ base: '0', md: '40px' }}
        >
            <chakra.span
                position="absolute"
                left="50%"
                height="calc(100% + 10px)"
                border="1px solid"
                borderColor="#24393f"
                top="0px"
            >
            </chakra.span>
            <Box pos="relative" p="10px">
                <Box
                    pos="absolute"
                    top="0"
                    left="0"
                    bottom="0"
                    right="0"
                    width="100%"
                    height="100%"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center center"
                    bg="#162022"
                    borderRadius="100px"
                    backgroundImage="none"
                    opacity={1}
                >
                </Box>
            </Box>
        </Flex>
    );
};

const EmptyCard = () => {
    return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
};

export default CNC;