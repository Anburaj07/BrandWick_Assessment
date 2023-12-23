import { Box, Flex, Heading, Image, Select, Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import Help from "../images/overview/Help.png";
import Help1 from "../images/navImages/Help.png";
import Right from "../images/overview/Right.png";
import Chevron from "../images/overview/Chevron.png";

const Overview = () => {
  return (
    <DIV>
      <Flex justifyContent={"space-between"} pb={"20px"} id="top">
        <Text w={"40%"} textAlign={"left"} color={"#1a181e"}>
          Overview
        </Text>
        <Select w={"11%"} placeholder={"This Month"}></Select>
      </Flex>
      <Flex justifyContent={"space-between"} id="overview" w={"100%"}>
        <Flex flexDirection={"column"} id="nextPayout" gap={"16px"}>
          <Box p={"24px"}>
            <Flex alignItems={"center"}>
              <Text mr={"5px"}>Next Payout</Text>
              <Box>
                <Image src={Help} />
              </Box>
            </Flex>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Heading>₹2,312.23</Heading>
              <Flex>
                <Text textDecoration={"underline"}>23 orders</Text>
                <Image src={Right} />
              </Flex>
            </Flex>
          </Box>
          <Flex
            w={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
            id="date"
          >
            <Text>Next payout date:</Text>
            <Text>Today, 04:00PM</Text>
          </Flex>
        </Flex>
        <Box id="amount">
          <Flex alignItems={"center"}>
            <Text
              mr={"10px"}
              color={"#4D4D4D"}
              fontFamily={"Inter"}
              fontSize={"16px"}
            >
              Amount Pending
            </Text>
            <Box>
              <Image src={Help1} />
            </Box>
          </Flex>
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            w={"100%"}
          >
            <Heading>₹92,312.20</Heading>
            <Flex>
              <Text textDecoration={"underline"} color={"#146EB4"}>
                13 orders
              </Text>
              <Image src={Chevron} />
            </Flex>
          </Flex>
        </Box>
        <Box id="amount">
        <Flex alignItems={"center"}>
            <Text
              mr={"10px"}
              color={"#4D4D4D"}
              fontFamily={"Inter"}
              fontSize={"16px"}
            >
              Amount Processed
            </Text>
            <Box>
              <Image src={Help1} />
            </Box>
          </Flex>
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            w={"100%"}
          >
            <Heading>₹23,92,312.19</Heading>
          </Flex>
        </Box>
      </Flex>
    </DIV>
  );
};

export default Overview;

const DIV = styled.div`
  box-sizing: border-box;
  margin-bottom: 32px;
  /* border: 3px solid pink; */
  #overview {
    width: 100%;
    /* border:  4px solid yellow; */
  }
  #overview > div {
    /* border: 4px solid blue; */
    width: 30%;
  }
  #top {
    p {
      font-family: Galano Grotesque;
      font-size: 22px;
      font-style: normal;
      font-weight: 550;
      line-height: 28px; /* 140% */
    }
  }

  #nextPayout {
    /* border: 5px solid yellow; */
    color: #ffffff;
    border-radius: var(--Spacing-spacing-04, 8px);
    background: var(--Hover-Blue, #146eb4);
    /* padding: var(--Spacing-spacing-04, 8px) 24px; */
    p {
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
    h2 {
      font-family: Galano Grotesque;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 38px; /* 118.75% */
    }
    #date {
      /* border: 1px solid red; */
      padding: var(--Spacing-spacing-04, 8px) 24px;
      color: var(--Black-95, #f2f2f2);
      font-family: Galano Grotesque;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
      border-radius: var(--Spacing-spacing-04, 8px);
      background: var(--Hover-Blue, #0e4f82);
      background-color: #0e4f82;
    }
  }
  #amount {
    /* border: 1px solid black; */
    border-radius: var(--Spacing-spacing-04, 8px);
    background: var(--Black-100, #fff);

    /* Shadow/Card */
    box-sizing: border-box;
    box-shadow: 0px 2px 6px 0px rgba(26, 24, 30, 0.04);
    display: flex;
    padding: var(--Spacing-spacing-07, 20px);
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    h2 {
      color: var(--Black-12, #1a181e);
      font-family: Galano Grotesque;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 38px; /* 118.75% */
    }
    p {
      line-height: 24px;
      font-weight: 500;
      font-size: 16px;
    }
  }
`;
