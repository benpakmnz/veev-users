import React, { useContext } from "react";
import { StoreContext, ctx } from "../../shared/store";
import UserCard from "../../components/UserCard/UserCard";
import { List, ListItem } from "@mui/material";

const UsersList = () => {
  const { users } = useContext<ctx>(StoreContext);
  return (
    <div>
      <h1>Users List</h1>
      <List sx={{ display: "flex" }}>
        {users.map((user) => (
          <ListItem key={user.id}>
            <UserCard {...user} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default UsersList;
