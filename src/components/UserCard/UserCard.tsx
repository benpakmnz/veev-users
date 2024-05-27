import React from "react";
import { IUser } from "../../shared/Interfaces";
import { Avatar, Card, CardContent, Typography } from "@mui/material";

const UserCard = (user: IUser) => {
  const { name, nickname, photo } = user;
  return (
    <Card sx={{ width: 250 }}>
      <CardContent>
        <Avatar alt={name} src={photo} />
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {nickname}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
