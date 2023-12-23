import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import Help from "../images/navImages/Help.png";
import Search from "../images/navImages/search.png";
import Menu from "../images/navImages/Menu.png";
import Group from "../images/navImages/Group.png";
import Overview from "../components/Overview";
import Table from "../components/Table";

const HomePage = () => {
  return (
    <DIV>
      <Box id="nav">
        <Flex alignItems={"center"} w={"30%"} pl={"35px"}>
          <Image src={Help} />
          <Text id="help">How it works</Text>
        </Flex>
        <Flex
          alignItems={"center"}
          w={"32.8%"}
          background={"#F2F2F2"}
          borderRadius={"6px"}
          pt={"9px"}
          pb={"9px"}
          pl={"16px"}
          pr={"16px"}
        >
          <Image src={Search} />
          <Text id="search">Search features, tutorials, etc.</Text>
        </Flex>
        <Flex
          alignItems={"center"}
          w={"30%"}
          boxSizing={"border-box"}
          justifyContent={"end"}
        >
          <Image src={Group} />
          <Image src={Menu} />
        </Flex>
      </Box>
      <Box id="dashboard">
        <Overview />
        <Table/>
      </Box>
    </DIV>
  );
};

export default HomePage;

const DIV = styled.div`
  width: 100%;
  /* border: 4px solid blue; */
  #nav {
    display: flex;
    padding: 12px 32px;
    align-items: center;
    gap: 16px;
    font-family: Galano Grotesque;
    /* border: 1px solid red; */
    width: 100%;
    border-bottom: 1px solid #D9D9D9;

    div {
      gap: 16px;
      flex: 1 0 0;
    }
    #help {
      color: #4d4d4d;
      font-size: 17px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 133.333% */
    }
  }
  #dashboard {
    /* border: 4px solid rosybrown; */
    padding: 32px;
    background: var(--Black-98, #FAFAFA);
  }
`;
