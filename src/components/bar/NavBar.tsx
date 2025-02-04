import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import { AppBar, Box, Toolbar, Button, Typography, Container } from "@mui/material";
import Register from "../login/Register";
import LetterAvatars from "../login/avatar";
import Login from "../login/Login";

const NavBar = () => {
  const userState = useContext(userContext);

  return (
    <AppBar position="fixed"  sx={{ top: 0, left: 0, backgroundColor: "#77A672", zIndex: 1000 }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
            }}
          >
            Tasty
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
          <Register />
          {!userState.user?.isConnected&&<Login /> }    
          <LetterAvatars />
            <Button
              component={Link}
              to="/"
              sx={{
                color: "white",
                ":hover": { backgroundColor: "#5E8B5C", color: "white" },
                textTransform: "none",
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/about"
              sx={{
                color: "white",
                ":hover": { backgroundColor: "#5E8B5C", color: "white" },
                textTransform: "none",
              }}
            >
              About
            </Button>
            <Button
              component={Link}
              to="/recipes"
              sx={{
                color: "white",
                ":hover": { backgroundColor: "#5E8B5C", color: "white" },
                textTransform: "none",
              }}
            >
              Recipes
            </Button>
            {userState.user?.isConnected && (
              <Button
                component={Link}
                to="/addRecipe"
                sx={{
                  color: "white",
                  ":hover": { backgroundColor: "#5E8B5C", color: "white" },
                  textTransform: "none",
                }}
              >
                Add Recipe
              </Button>
            )}
            
          </Box>
        </Toolbar>
      </Container>
      
    </AppBar>
    
  );
};

export default NavBar;
