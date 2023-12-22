import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo.png";
import dukkan from "../images/dukaan.png";

const Sidebar = () => {
  return (
    <DIV>
      <Box id="logo" display={"flex"}>
        <Image src={logo} ml={"10px"} />
        <Box display={"flex"} alignItems={"center"} ml={"10px"}>
          <Image w={"100%"} src={dukkan} />
        </Box>
      </Box>
      <Box id="links">
        <Link>
          <Text>Home</Text>
        </Link>
        <Link>
          <Text>Orders</Text>
        </Link>
        <Link>
          <Text>Delivery</Text>
        </Link>
        <Link>
          <Text>Products</Text>
        </Link>
        <Link>
          <Text>Marketing</Text>
        </Link>
        <Link>
          <Text>Payments</Text>
        </Link>
        <Link>
          <Text>Tools</Text>
        </Link>
        <Link>
          <Text>Discounts</Text>
        </Link>
        <Link>
          <Text>Customers</Text>
        </Link>
        <Link>
          <Text>Appearance</Text>
        </Link>
        <Link>
          <Text>Plugins</Text>
        </Link>
      </Box>
      <Box id="credits">
        <Text>Available Credits</Text>
      </Box>
    </DIV>
  );
};

export default Sidebar;

const DIV = styled.div`
  width: 20%;
  box-sizing: border-box;
  padding-bottom: 2%;
  background-color: #1e2640;
  color: #ffffff;
  text-align: left;

  #logo {
    padding: 4%;
    /* border: 1px solid red; */
    margin-bottom: 25px;
  }
  #links {
    /* border: 1px solid yellow; */
    padding-left: 4%;
  }
  a {
    padding: 10px;
  }
  #credits {
    width: 90%;
    margin: auto;
    height: 70px;
    text-align: center;
    margin-top: 50px;
    background-color: #ffffff1a;
    border-radius: 10px;
  }
`;
