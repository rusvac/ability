import {
  Link as ChakraLink,
  Text,
  Box,
  Code,
  List,
  ListIcon,
  ListItem,
  Flex,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Container } from "../components/skel/Container";
import ContractABI from "../components/ContractABI";

import { abis } from "@/lib/abis";

const Samples = () => (
  <Container height="100vh" overflow={"hidden"}>
    <Box w="full">
      <Box w="full">
        <Text>Sample Contract and UI</Text>
      </Box>

      <Flex
        direction={"column"}
        overflowY="scroll"
        height="100%"
        minH="px"
        maxH="full"
        sx={{
          "&::-webkit-scrollbar-track": {
            bg: "transparent",
          },
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            bg: mode("blue.600", "gray.700"),
            borderRadius: "20px",
          },
        }}
      >
        <ContractABI abi={abis[0]} />
      </Flex>
    </Box>
  </Container>
);

export default Samples;
