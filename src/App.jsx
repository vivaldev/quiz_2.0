import React from "react";
import { useState, useReducer, useRef } from "react";
import { Flex, Heading, Text, Input } from "@chakra-ui/react";

const quizData = [
  {
    question: "What is the capital of Finland?",
    answers: ["Helsinki", "Tampere", "Pori", "Rauma"],
    correctAnswer: "Pori",
  },
  // more questions here
];

const initialState = {
  playerName: "",
  questions: quizData,
  currentQuestion: 0,
  score: 0,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "PLAYER_NAME":
      return {
        ...state,
        playerName: action.payload,
      };

    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };
    case "UPDATE_SCORE":
      return {
        ...state,
        score: state.score + action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const App = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const answeInputRef = useRef(null);
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
      <Flex
        flexDirection="column"
        justify="center"
        align="center"
        w="50%"
        h="60%"
        border="5px double wheat"
        mt="5vh"
      >
        <Heading as="h3" color="green.600">
          What's your name?
        </Heading>
        <Input type="text" w="60%" m={5} bg="red.100" />
      </Flex>
    </Flex>
  );
};

export default App;
