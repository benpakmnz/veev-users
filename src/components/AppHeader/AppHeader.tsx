import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import React, { useContext } from "react";
import { StoreContext, ctx } from "../../shared/store";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { langOptions } from "../../constants/lang-options";

const AppHeader: React.FC = () => {
  const { logedInUser } = useContext<ctx>(StoreContext);

  return (
    <header>
      <Toolbar>
        <Typography variant="h6" noWrap component="a" href="/">
          LOGO
        </Typography>

        <div style={{ display: "flex", alignItems: "center" }}>
          <TextField label="feedback us" variant="outlined" />
          <FormControl sx={{ width: 250 }}>
            <InputLabel>Language</InputLabel>
            <Select label="Language">
              {langOptions.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography variant="body1">{logedInUser.name}</Typography>
          <Typography variant="body1">{logedInUser.profession}</Typography>
          <Avatar alt="Remy Sharp" src={logedInUser.photo} />
        </div>
      </Toolbar>
    </header>
  );
};

export default AppHeader;
