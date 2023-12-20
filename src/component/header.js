import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <div
      style={{
        height: "100px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "50px",
      }}
    >
      <div>
        <Typography variant="h4" style={{ color: "#333",fontWeight: "bold" }}>
          Your Campaigns
        </Typography>
        <Typography variant="body1" style={{ color: "#666" }}>
          Check the list of campaigns you created
        </Typography>
      </div>

      <div>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#0F6EFF", marginRight: "50px" }}
        >
          Create New Campaign
        </Button>
      </div>
    </div>
  );
};

export default Header;
