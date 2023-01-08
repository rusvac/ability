import {
  Link as ChakraLink,
  Text,
  Box,
  Code,
  Flex,
  useColorModeValue as mode,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

import { abis } from "@/lib/abis";

const SelectABI = ({ addTab }: any) => {
  const [value, setValue] = useState<string>("");

  const usePresetABI = (ABI: any) => addTab(ABI);

  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    let newABI = undefined;

    try {
      newABI = JSON.parse(inputValue);
    } catch (error) {}

    if (newABI) {
      addTab({
        id: "Pasted",
        name: "Pasted ABI",
        interface: newABI,
      });
      return;
    }

    setValue(inputValue);
  };

  return (
    <Box>
      <Box px={1} pt={1}>
        <Box>
          <Box>
            <Text fontSize="xl">Common ABIs</Text>
          </Box>
          {abis.map((el, i) => (
            <Box key={i} p={1}>
              <Button w="full" onClick={() => usePresetABI(el)}>
                {el.name}
              </Button>
            </Box>
          ))}
        </Box>

        <Box>
          <Box>
            <Text fontSize="xl">Paste in an ABI</Text>
          </Box>
          <Box p={1}>
            <Textarea
              placeholder="paste json"
              value={value}
              onChange={handleInputChange}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SelectABI;
