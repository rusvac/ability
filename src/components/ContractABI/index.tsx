import { ABIFunction, Preset } from "@/lib/types";
import { Box, Stack } from "@chakra-ui/react";
import { ABIObject } from "./ABIObject";

interface ContractABIProps {
  abi: Preset;
}

const ContractABI = ({ abi }: ContractABIProps) => {
  if (!abi) {
    return <Box></Box>;
  }

  const id = abi.id;
  const name = abi.name;

  const jsonABI = abi.interface;

  const ABIDisplay = (
    <Stack spacing={1} w="full" maxW="xl">
      {jsonABI &&
        jsonABI.length > 0 &&
        jsonABI.map((el: ABIFunction, i: number) => (
          <Box key={i} p={1}>
            <ABIObject obj={el} />
          </Box>
        ))}
    </Stack>
  );

  return ABIDisplay;
};

export default ContractABI;
