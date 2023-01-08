import { Box, Flex, Heading } from "@chakra-ui/react";

export const Hero = () => (
  <Box>
    <Flex
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
      bgClip="text"
      py={10}
    >
      <Flex>
        <Heading fontSize="6vw">{"[ABI]"}</Heading>
        <Heading fontSize="6vw">{"lity"}</Heading>
      </Flex>
    </Flex>
    <Flex
      w="full"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Heading fontSize="xl">
        {"Read Smart Contract ABI as Documentation"}
      </Heading>
    </Flex>
  </Box>
);
