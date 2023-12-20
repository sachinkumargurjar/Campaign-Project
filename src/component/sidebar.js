import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ZocketLogo from "../Assets/ZocketLogo.svg";
import Home from "../Assets/Home.svg";
import Campaign from "../Assets/Campaign.svg";
import Products from "../Assets/Products.svg";
import Customers from "../Assets/Customers.svg";

const drawerWidth = 85;

function ResponsiveDrawer(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  const drawer = (
    <div>
      <img
        src={ZocketLogo}
        alt="My Icon"
        style={{
          paddingLeft: "20px",
          paddingTop: "20px",
          paddingBottom: "20px",
          width: "80%",
        }}
      />
      <Divider />
      <List>
        {["Home", "Campaign", "Products", "Customers"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            onClick={() => handleListItemClick(index)}
            sx={{
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderLeft: `4px solid ${
                  selectedIndex === index ? "blue" : "transparent"
                }`,
              },
            }}
          >
            <ListItemButton
              sx={{
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>
                {text === "Home" ? (
                  <img
                    src={Home}
                    alt="My Icon"
                    style={{
                      paddingLeft: "16px",
                      // paddingTop: "20px",
                      // paddingBottom: "20px",
                      width: "60%",
                    }}
                  />
                ) : text === "Campaign" ? (
                  <img
                    src={Campaign}
                    alt="My Icon"
                    style={{
                      paddingLeft: "16px",
                      // paddingTop: "20px",
                      // paddingBottom: "20px",
                      width: "60%",
                    }}
                  />
                ) : text === "Products" ? (
                  <img
                    src={Products}
                    alt="My Icon"
                    style={{
                      paddingLeft: "16px",
                      // paddingTop: "20px",
                      // paddingBottom: "20px",
                      width: "60%",
                    }}
                  />
                ) : (
                  <img
                    src={Customers}
                    alt="My Icon"
                    style={{
                      paddingLeft: "16px",
                      // paddingTop: "20px",
                      // paddingBottom: "20px",
                      width: "60%",
                    }}
                  />
                )}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ alignItems: "center" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="Ad component"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "black",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
