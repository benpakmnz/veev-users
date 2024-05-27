import React, { useContext } from "react";
import { StoreContext, ctx } from "../../shared/store";
import UserCard from "../../components/UserCard/UserCard";
import {
  Avatar,
  List,
  ListItem,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import styles from "./users-page-styles.module.scss";

const UsersList = () => {
  const { users } = useContext<ctx>(StoreContext);
  const [listType, setListType] = React.useState("list");
  return (
    <div>
      <h1>Users List</h1>
      <ToggleButtonGroup
        color="primary"
        value={listType}
        exclusive
        onChange={(_event, newValue) => setListType(newValue)}
        aria-label="Platform"
      >
        <ToggleButton value="list">List</ToggleButton>
        <ToggleButton value="card">Cards</ToggleButton>
      </ToggleButtonGroup>
      <List className={styles.list}>
        {users.map((user) => (
          <ListItem
            key={user.id}
            sx={{ width: listType === "list" ? "100%" : "auto" }}
          >
            {listType === "list" ? (
              <div className={styles.userListItem}>
                <Avatar src={user.photo} /> Name: {user.name} NickName:{" "}
                {user.nickname}
              </div>
            ) : (
              <UserCard {...user} />
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default UsersList;
