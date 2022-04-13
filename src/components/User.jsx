import React from "react";
import { TableRow, TableCell, Avatar, Chip } from "@mui/material";

const User = ({ user }) => {
  return (
    <TableRow>
      <TableCell>{!user.name ? user.loginName : user.name}</TableCell>
      <TableCell>
        <Chip
          label="Visit Github Proflie"
          component="a"
          href={user.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          avatar={<Avatar alt="" src={user.avatarUrl} />}
          variant="outlined"
          clickable
        />
      </TableCell>
      <TableCell>{user.creationDate.substring(0, 10)}</TableCell>
      <TableCell>{user.rank}</TableCell>
    </TableRow>
  );
};

export default User;
