import React, { useState } from "react";
import { TableRow, TableHead, TableCell } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const SortingTableHead = ({ users, setUsers }) => {
  //order object: true->asc order false->dsc order
  const [order, setOrder] = useState({ name: true, date: true, rank: true });
  const handleSort = (key) => {
    if (key === "name") {
      if (order.name === true) {
        let sorted = [...users].sort(function (a, b) {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0;
        });
        setUsers(sorted);
      } else {
        let sorted = [...users].sort(function (a, b) {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
          return 0;
        });
        setUsers(sorted);
      }
      setOrder((prev) => ({ ...prev, name: !prev.name }));
    } else if (key === "date") {
      if (order.date === true) {
        let sorted = [...users].sort(function (a, b) {
          let a1 = new Date(a.creationDate.substring(0, 10));
          let b1 = new Date(b.creationDate.substring(0, 10));
          return a1 - b1;
        });
        setUsers(sorted);
      } else {
        let sorted = [...users].sort(function (a, b) {
          let a1 = new Date(a.creationDate.substring(0, 10));
          let b1 = new Date(b.creationDate.substring(0, 10));
          return b1 - a1;
        });
        setUsers(sorted);
      }
      setOrder((prev) => ({ ...prev, date: !prev.date }));
    } else if (key === "rank") {
      if (order.rank === true) {
        let sorted = [...users].sort((a, b) => a.rank - b.rank);
        setUsers(sorted);
      } else {
        let sorted = [...users].sort((a, b) => b.rank - a.rank);
        setUsers(sorted);
      }
      setOrder((prev) => ({ ...prev, rank: !prev.rank }));
    }
  };
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell onClick={() => handleSort("name")}>
            Name
            {order.name ? (
              <KeyboardArrowDownIcon />
            ) : !order.name ? (
              <KeyboardArrowUpIcon />
            ) : null}
          </TableCell>
          <TableCell>Profile Link</TableCell>
          <TableCell onClick={() => handleSort("date")}>
            Created Date
            {order.date ? (
              <KeyboardArrowDownIcon />
            ) : !order.date ? (
              <KeyboardArrowUpIcon />
            ) : null}
          </TableCell>
          <TableCell onClick={() => handleSort("rank")}>
            Followers Rank
            {order.rank ? (
              <KeyboardArrowDownIcon />
            ) : !order.rank ? (
              <KeyboardArrowUpIcon />
            ) : null}
          </TableCell>
        </TableRow>
      </TableHead>
    </>
  );
};

export default SortingTableHead;
