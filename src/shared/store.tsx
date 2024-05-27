import React, { useState, createContext } from "react";
import { IUser } from "./Interfaces";
import usersData from "../constants/users-data";

export interface ctx {
  users: IUser[];
  logedInUser: IUser;
}

export const StoreContext = createContext<ctx>({
  users: usersData,
  logedInUser: usersData[0],
});

const StoreContextProvider = (props: { children: React.ReactElement }) => {
  const [users] = useState<IUser[]>(usersData);
  const [logedInUser] = useState<IUser>(usersData[0]);

  return (
    <StoreContext.Provider
      value={{
        users,
        logedInUser,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
