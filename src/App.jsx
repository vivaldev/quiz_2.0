// @ts-nocheck
import React from "react";
import { useState, useReducer, useRef } from "react";
import { Flex, Heading, Text, Input, Button } from "@chakra-ui/react";
import StartGame from "./components/StartGame";
const quizData = [
  {
    question: "What is the capital of Finland?",
    answers: ["Helsinki", "Tampere", "Pori", "Rauma"],
    correctAnswer: "Pori",
  },
  // more questions here
];

const PlayerInfo = ({ handleChange, handleSubmit }) => {
  return (
    <>
      <Heading as="h3" color="green.600">
        What's your name?
      </Heading>
      <Input type="text" w="60%" m={5} bg="red.100" onChange={handleChange} />
      <Button onClick={handleSubmit}>Start Quiz!</Button>
    </>
  );
};

const initialState = {
  username: "",
  hasStarted: false,
  questions: quizData,
  currentQuestion: 0,
  score: 0,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "updateUsername":
      return {
        ...state,
        username: action.payload,
      };

    case "startNewGame":
      return {
        ...state,
        hasStarted: true,
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

  console.log(state);
  const handleChange = (e) => {
    dispatch({
      type: "updateUsername",
      payload: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "startNewGame",
    });
  };

  return (
    <Flex
      w="100vw"
      h="100vh"
      bg="red.200"
      align="center"
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
        {!state.hasStarted ? (
          <PlayerInfo handleChange={handleChange} handleSubmit={handleSubmit} />
        ) : (
          <StartGame />
        )}
      </Flex>
    </Flex>
  );
};

export default App;
