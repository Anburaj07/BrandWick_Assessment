import { Box, Flex, Select, Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

const Overview = () => {
  return (
    <DIV>
      <Flex justifyContent={"space-between"}>
        <Text w={"40%"} textAlign={"left"}>Overview</Text>
        <Select w={"11%"} placeholder={"This Month"}></Select>
      </Flex>
    </DIV>
  );
};

export default Overview;

const DIV = styled.div`
  border: 3px solid pink;
  p {
    color: var(--Black-12, #1a181e);
    font-family: Galano Grotesque;
    font-size: 22px;
    font-style: normal;
    font-weight: 550;
    line-height: 28px; /* 140% */
  }
`;
