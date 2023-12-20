import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import BuyPlan from "../Assets/BuyPlan.svg";
import Notification from "../Assets/Notification.svg";
import NavMid from "../Assets/NavMid.svg";
import NavRight from "../Assets/NavRight.svg";
import Delete from "../Assets/Delete.svg";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 80,
  },
}));

export default function ProminentAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#FFFFFF" }}>
        <StyledToolbar sx={{ justifyContent: "flex-end" }}>
        <Typography
            variant="body1"
            sx={{ color: "black", paddingTop: "15px" }}
          >
              Free Trial ends in 2 days
          </Typography>
         <IconButton size="large" aria-label="search" color="inherit">
            <img src={BuyPlan} alt="My Icon" style={{}} />
          </IconButton>
        <IconButton size="large" aria-label="search" color="inherit">
            <img src={Delete} alt="My Icon" style={{}} />
          </IconButton>
        <IconButton size="large" aria-label="search" color="inherit">
            <img src={Notification} alt="My Icon" style={{}} />
          </IconButton>
          <IconButton size="large" aria-label="search" color="inherit">
            <img src={NavMid} alt="My Icon" style={{}} />
          </IconButton>
          <Typography
            variant="body1"
            sx={{ color: "black", paddingTop: "15px" }}
          >
              Mukund Cake Shop
          </Typography>
          <IconButton>
        <ArrowDropDownIcon />
      </IconButton>

          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <img src={NavRight} alt="My Icon" style={{}} />
          </IconButton>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
