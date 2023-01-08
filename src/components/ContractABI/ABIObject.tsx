import { ABIFunction, ABIFunctionType } from "@/lib/types";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  useColorModeValue as mode,
} from "@chakra-ui/react";

interface ABIObjectProps {
  obj: ABIFunction;
}

export const ABIObject = ({ obj }: ABIObjectProps) => {
  console.log(obj);

  const name = obj.name;
  const objType = obj.type;

  const mutate = obj.stateMutability;

  const inputs = obj.inputs;
  const outputs = obj.outputs;

  const isEvent = obj.type == ABIFunctionType.event;
  const isReadOnly = obj.constant;

  return (
    <Card variant="outline" w="full">
      <CardHeader bg={mode("gray.100", "gray.700")} rounded="md" p={1}>
        <Flex w="full" justifyContent={"space-between"}>
          <Box>{name}</Box>
          <Box>
            {isReadOnly ? "(read only)" : isEvent ? "(event)" : "(mutable)"}
          </Box>
        </Flex>
      </CardHeader>
      <CardBody p={1}>{objType}</CardBody>
    </Card>
  );
};
