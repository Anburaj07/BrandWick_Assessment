import {
  Box,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import dot1 from "../images/table/dot1.png";
import dot2 from "../images/table/dot2.png";
import styled from "styled-components";

const Refunds = () => {
  const data = [
    {
      order_id: "#281209",
      order_id: "#281208",
      image: dot2,
      status: "Successful",
      id: 131634495747,
      date: "Today, 08:45 PM",
      amount: "₹10,125.00",
    },
    {
      order_id: "#281208",
      image: dot1,
      status: "Processing",
      id: 131634495747,
      date: "Yesterday, 3:00 PM",
      amount: "₹10,125.00",
    },
    {
      order_id: "#281207",
      image: dot2,
      status: "Successful",
      id: 131634495747,
      date: "12 Jul 2023, 03:00 PM",
      amount: "₹10,125.00",
    },
    {
      order_id: "#281206",
      image: dot2,
      status: "Successful",
      id: 131634495747,
      date: "12 Jul 2023, 03:00 PM",
      amount: "₹10,125.00",
    },
    {
      order_id: "#281205",
      image: dot2,
      status: "Successful",
      id: 131634495747,
      date: "12 Jul 2023, 03:00 PM",
      amount: "₹10,125.00",
    },
    {
      order_id: "#281204",
      image: dot2,
      status: "Successful",
      id: 131634495747,
      date: "12 Jul 2023, 03:00 PM",
      amount: "₹10,125.00",
    },
  ];
  return (
    <DIV>
      <Table>
        <Thead>
          <th>Order ID</th>
          <th>Status</th>
          <th>Transaction ID</th>
          <th>Refund Date</th>
          <th>Order amount</th>
        </Thead>
        <Tbody>
          {data.map((el) => (
            <Tr key={el.id}>
              <Td
                color={"#146EB4"}
                fontFamily={"InGalano Grotesque"}
                fontWeight={"500"}
              >
                {el.order_id}
              </Td>
              <Td
                display={"flex"}
                alignItems={"center"}
                color={"#1a181e"}
                justifyContent={"center"}
              >
                <Box pr={"5px"}>
                  <Image src={el.image} />
                </Box>
                <Text color={"#1a181e"} fontFamily={"Inter"}>
                  {el.status}
                </Text>
              </Td>
              <Td color={"#4D4D4D"} fontFamily={"Galano Grotesque"}>
                {el.id}
              </Td>
              <Td color={"#1a181e"} fontFamily={"Galano Grotesque"}>
                {el.date}
              </Td>
              <Td color={"#1a181e"} fontFamily={"Galano Grotesque"}>
                {el.amount}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </DIV>
  );
};

export default Refunds;

const DIV = styled.div`
  th {
    color: var(--Black-30, #4d4d4d);
    text-align: right;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    padding: 10px;
  }
  table {
    border-radius: var(--Spacing-spacing-04, 8px);
    background: var(--Black-100, #fff);

    /* Shadow/Card */
    box-shadow: 0px 2px 6px 0px rgba(26, 24, 30, 0.04);
  }
  thead {
    border-radius: 4px;
    background: var(--Black-95, #f2f2f2);
  }
  th {
    text-align: center;
  }
  td {
    text-align: center;
    /* Body 2 / Regular */
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
`;
