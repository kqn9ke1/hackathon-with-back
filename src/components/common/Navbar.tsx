import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import LiveSearch from "./LiveSearch/LiveSearch";
// import LiveSearch from "./LiveSearch";

export default function Navbar() {
  const { user, logout } = useAuthContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "inherit" }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component={Link} to="/">
            Instagram
          </Typography>

          <Box sx={{ display: "flex", ml: 2, flexGrow: 1 }}>
            <Button
              component={Link}
              to="/add"
              sx={{
                color: "black",
                border: "1px solid white",
                borderRadius: "10px",
                "&:hover": {
                  color: "gray",
                },
              }}
            >
              Add Product
            </Button>
          </Box>
          <LiveSearch />
          <Button component={Link} to="/profile">
            Profile
          </Button>
          {user ? (
            <Box display="flex" alignItems="center" gap={1}>
              <Typography sx={{ color: "black" }}>{user.email}</Typography>
              <Button
                sx={{
                  border: "1px solid black",
                  borderRadius: "10px",
                  "&:hover": {
                    color: "gray",
                  },
                  color: "black",
                }}
                onClick={logout}
              >
                Log out
              </Button>
            </Box>
          ) : (
            <Button
              component={Link}
              to="/auth"
              sx={{
                border: "1px solid white",
                color: "black",
                borderRadius: "10px",
                cursor: "pointer",
                "&:hover": {
                  color: "red",
                },
              }}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
