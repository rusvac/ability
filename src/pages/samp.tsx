import {
  Link as ChakraLink,
  Text,
  Box,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Textarea,
  Button,
  useColorModeValue as mode,
  useTab,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";

import { Container } from "../components/skel/Container";
import ContractABI from "../components/ContractABI";

import React, { useState } from "react";
import SelectABI from "@/comp/SelectABI";

const CustomTab = React.forwardRef((props: any, ref) => {
  // 1. Reuse the `useTab` hook
  const tabProps = useTab({ ...props, ref });
  const isSelected = !!tabProps["aria-selected"];

  // 2. Hook into the Tabs `size`, `variant`, props
  const styles = useMultiStyleConfig("Tabs", tabProps);

  const normalizedProps: any = { ...tabProps };

  return (
    <Button
      {...tabProps}
      size="sm"
      fontWeight="normal"
      rounded="none"
      py={1}
      bg={mode("gray.200", "gray.700")}
      _hover={{
        bg: mode("gray.200", "gray.600"),
      }}
      _selected={{
        bg: mode("gray.200", "gray.600"),
      }}
    >
      {tabProps.children}
      {isSelected && normalizedProps.onClear ? (
        <Box px={1} onClick={normalizedProps.onClear}>
          <SmallCloseIcon />
        </Box>
      ) : (
        <></>
      )}
    </Button>
  );
});

const Samples = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [tabs, setTabs] = useState<any[]>([]);
  const [abi, setABI] = useState<any>(undefined);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const addTab = (ABI) => {
    setTabs([...tabs, { title: ABI.id, content: ABI }]);
    handleTabsChange(tabs.length + 1);
  };

  const closeTab = (id) => {
    if (tabs.length - 1 == id) {
      handleTabsChange(0);
    }
    setTabs([...tabs.filter((el, i) => id != i)]);
  };

  return (
    <Container>
      <Box w="full" h="full">
        <Tabs
          variant="soft-rounded"
          colorScheme="gray"
          index={tabIndex}
          onChange={handleTabsChange}
        >
          <TabList borderBottomWidth={1}>
            <CustomTab>ABILITY+</CustomTab>
            {tabs.map((el, i) => (
              <CustomTab key={i} onClear={() => closeTab(i)}>
                {el.title}
              </CustomTab>
            ))}
          </TabList>
          <TabPanels>
            <TabPanel>
              <SelectABI addTab={addTab} />
            </TabPanel>
            {tabs.map((el, i) => (
              <TabPanel key={i} p={0}>
                <ContractABI abi={el.content} />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Samples;
