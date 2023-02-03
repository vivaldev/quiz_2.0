import React from "react";
import { useState, useReducer, useRef } from "react";
import { Flex, Heading, Text, Input } from "@chakra-ui/react";

const App = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      bg="red.200"
      align="center"
      e
      flexDirection="column"
    >
      <Heading as="h1" color="whiteAlpha.900" mt="5vh">
        The Quiz Game!
      </Heading>
      <Flex w="50%" h="60%" border="5px double wheat" mt="5vh"></Flex>
    </Flex>
  );
};

export default App;
