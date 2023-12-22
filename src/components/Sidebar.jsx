import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo.png";
import Down from "../images/Down.png";
import Home from "../images/logos/Home.png";
import Orders from "../images/logos/Orders.png";
import Delivery from "../images/logos/Delivery.png";
import Products from "../images/logos/Products.png";
import Marketing from "../images/logos/Marketing.png";
import Payments from "../images/logos/Payments.png";
import Analytics from "../images/logos/Analytics.png";
import Discounts from "../images/logos/Discounts.png";
import Customers from "../images/logos/Customers.png";
import Apperance from "../images/logos/Apperance.png";
import Plugins from "../images/logos/Plugins.png";
import wallet from "../images/logos/wallet.png";

const Sidebar = () => {
  return (
    <DIV>
      <Box
        id="logo"
        display={"flex"}
        w={"85.74%"}
        alignItems={"center"}
        margin={"auto"}
      >
        <Box>
          <Image
            borderRadius={"4px"}
            src={logo}
            backgroundRepeat={"no-repeat"}
          />
        </Box>
        <Box>
          <Text
            fontWeight={"500"}
            fontSize={"15px"}
            w={"108px"}
            lineHeight={"22px"}
          >
            Nishyan
          </Text>
          <Text
            fontWeight={"400"}
            fontSize={"13px"}
            lineHeight={"16px"}
            color={"#aca7a7"}
            textDecorationLine={"underline"}
          >
            Visit store
          </Text>
        </Box>
        <Box>
          <Image src={Down} />
        </Box>
      </Box>
      <Box id="links">
        <Box>
          <Image src={Home} w={"12%"} />
          <Link>
            <Text>Home</Text>
          </Link>
        </Box>
        <Box>
          <Image src={Orders} w={"12%"} />
          <Link>
            <Text>Orders</Text>
          </Link>
        </Box>
        <Box>
          <Image src={Products} w={"12%"} />
          <Link>
            <Text>Products</Text>
          </Link>
        </Box>
        <Box>
          <Image src={Delivery} w={"12%"} />
          <Link>
            <Text>Delivery</Text>
          </Link>
        </Box>
        <Box>
          <Image src={Marketing} w={"12%"} />
          <Link>
            <Text>Marketing</Text>
          </Link>
        </Box>
        <Box>
          <Image src={Analytics} w={"12%"} />
          <Link>
            <Text>Analytis</Text>
          </Link>
        </Box>
        <Box>
          <Image src={Payments} w={"12%"} />
          <Link>
            <Text>Payouts</Text>
          </Link>
        </Box>
        <Box>
          <Image src={Discounts} w={"12%"} />
          <Link>
            <Text>Discounts</Text>
          </Link>
        </Box>
        <Box>
          <Image src={Customers} w={"12%"} />
          <Link>
            <Text>Audience</Text>
          </Link>
        </Box>
        <Box>
          <Image src={Apperance} w={"12%"} />
          <Link>
            <Text>Appearance</Text>
          </Link>
        </Box>
        <Box>
          <Image src={Plugins} w={"12%"} />
          <Link>
            <Text>Plugins</Text>
          </Link>
        </Box>
      </Box>
      <Box id="credits">
        <Box w={"16%"} backgroundColor={"#353c53"} p={"3px"}>
            <Image src={wallet} />
        </Box>
        <Box>
          <Text>Available Credits</Text>
          <Text>222.10</Text>
        </Box>
      </Box>
    </DIV>
  );
};

export default Sidebar;

const DIV = styled.div`
  width: 15.55%;
  box-sizing: border-box;
  background-color: #1e2640;
  color: #ffffff;
  text-align: left;
  font-family: Galano Grotesque;
  padding: 16px 10px;
  /* border: 1px solid red; */

  #logo {
    gap: var(--Spacing-spacing-05, 12px);
    margin-bottom: 25px;
  }
  #links {
    padding-left: 4%;
    div {
      display: flex;
      padding: 8px 16px;
      align-items: center;
      gap: 12px;
      width: 92%;
      /* border: 1px solid red; */
      p {
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        opacity: 0.8;
      }
    }
  }
  a {
    padding: 10px;
  }
  #credits {
    display: flex;
    width: 192px;
    padding: 6px 12px;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    border-radius: 4px;
    background: #353c53;
    margin-top: 100px;
  }
`;
