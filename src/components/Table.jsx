import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import Search from "../images/table/Search.png";
import Sort from "../images/table/Sort.png";
import download from "../images/table/download.png";

const Table = () => {
  return (
    <DIV>
      <Flex flexDirection={"column"} gap={"20px"} pb={"20px"}>
        <Heading textAlign={"start"}>Transactions | This Month</Heading>
        <Flex>
          <Button background={"#146eb4"} color={"#FFF"}>
            Payouts (22)
          </Button>
          <Button background={"#E6E6E6"} color={"#808080"}>
            Refunds (2)
          </Button>
        </Flex>
      </Flex>
      <Flex flexDirection={"column"} p={"12px"} id="tableContent">
        <Flex justifyContent={"space-between"} pb={"12px"}>
          <Flex
            border={"1px solid gray"}
            alignItems={"center"}
            pt={"6px"}
            pl={"16px"}
            pb={"6px"}
            pr={"16px"}
            borderRadius={"4px"}
          >
            <Box>
              {" "}
              <Image src={Search} />
            </Box>
            <Input border={"none"} />
          </Flex>
          <Flex
            alignItems={"center"} gap={"16px"}
          >
            <Flex alignItems={"center"} p={"4px"} id="sort" border={"1px solid #D9D9D9"} borderRadius={"4px"}>
              <Text pr={"2px"}>Sort</Text>
              <Box>
                <Image src={Sort} />
              </Box>
            </Flex>
            <Box border={"1px solid #D9D9D9"} borderRadius={"4px"}>
                <Image p={"4px"} src={download}/>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </DIV>
  );
};

export default Table;

const DIV = styled.div`
  border: 1px solid black;
  h2 {
    color: var(--Black-12, #1a181e);
    font-family: Galano Grotesque;
    font-size: 20px;
    font-style: normal;
    /* font-weight: 500; */
    line-height: 28px; /* 140% */
  }
  button {
    border-radius: 40px;
    /* Body 2/Medium */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }
  #tableContent {
    border-radius: var(--Spacing-spacing-04, 8px);
    background: var(--Black-100, #fff);

    /* Shadow/Card */
    box-shadow: 0px 2px 6px 0px rgba(26, 24, 30, 0.04);
    #sort {
      color: var(--Black-30, #4d4d4d);

      /* Sub Title/Regular */
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
    }
  }
`;
