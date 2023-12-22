import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo.png";
import dukkan from "../images/dukaan.png";
import Home from "../images/logos/Home.png";
import Orders from "../images/logos/Orders.png";
import Delivery from "../images/logos/Delivery.png";
import Products from "../images/logos/Products.png";
import Marketing from "../images/logos/Marketing.png";
import Payments from "../images/logos/Payments.png";
import Tools from "../images/logos/Tools.png";
import Discounts from "../images/logos/Discounts.png";
import Customers from "../images/logos/Customers.png";
import Apperance from "../images/logos/Apperance.png";
import Plugins from "../images/logos/Plugins.png";

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
        <Box>
          <Box display={"flex"} alignItems={"center"} ml={"10px"}>
            <Image src={Home} w={"100%"} />
          </Box>
          <Link>
            <Text>Home</Text>
          </Link>
        </Box>

        <Box>
        <Box display={"flex"} alignItems={"center"} ml={"10px"}>
            <Image src={Orders} w={"100%"} />
          </Box>
          <Link>
            <Text>Orders</Text>
          </Link>
        </Box>
        <Box>
        <Box display={"flex"} alignItems={"center"} ml={"10px"}>
            <Image src={Delivery} w={"100%"} />
          </Box>
          <Link>
            <Text>Delivery</Text>
          </Link>
        </Box>
        <Box>
        <Box display={"flex"} alignItems={"center"} ml={"10px"}>
            <Image src={Products} w={"100%"} />
          </Box>
          <Link>
            <Text>Products</Text>
          </Link>
        </Box>
        <Box>
        <Box display={"flex"} alignItems={"center"} ml={"10px"}>
            <Image src={Marketing} w={"100%"} />
          </Box>
          <Link>
            <Text>Marketing</Text>
          </Link>
        </Box>
        <Box>
        <Box display={"flex"} alignItems={"center"} ml={"10px"}>
            <Image src={Payments} w={"100%"} />
          </Box>
          <Link>
            <Text>Payments</Text>
          </Link>
        </Box>
        <Box>
        <Box display={"flex"} alignItems={"center"} ml={"10px"}>
            <Image src={Tools} w={"100%"} />
          </Box>
          <Link>
            <Text>Tools</Text>
          </Link>
        </Box>
        <Box>
        <Box display={"flex"} alignItems={"center"} ml={"10px"}>
            <Image src={Discounts} w={"100%"} />
          </Box>
          <Link>
            <Text>Discounts</Text>
          </Link>
        </Box>
        <Box>
        <Box display={"flex"} alignItems={"center"} ml={"10px"}>
            <Image src={Customers} w={"100%"} />
          </Box>
          <Link>
            <Text>Customers</Text>
          </Link>
        </Box>
        <Box>
        <Box display={"flex"} alignItems={"center"} ml={"10px"}>
            <Image src={Apperance} w={"100%"} />
          </Box>
          <Link>
            <Text>Appearance</Text>
          </Link>
        </Box>
        <Box>
        <Box display={"flex"} alignItems={"center"} ml={"10px"}>
            <Image src={Plugins} w={"100%"} />
          </Box>
          <Link>
            <Text>Plugins</Text>
          </Link>
        </Box>
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
    padding-left: 4%;
    div {
      display: flex;
    }
  }
  a {
    padding: 10px;
  }
  #credits {
    width: 90%;
    margin: auto;
    height: 50px;
    text-align: center;
    margin-top: 50px;
    background-color: #ffffff1a;
    border-radius: 10px;
  }
`;
