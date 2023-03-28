import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { useHistory, Link } from "react-router-dom";
import {
  InputAdornment,
  TextField,
} from "@mui/material";
import { Search} from "@mui/icons-material";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();
  
  const handleClick = () =>{
    window.localStorage.clear();
    history.push("/");
    window.location.reload();
    
  }
  let displaythis; 
  let userdata= window.localStorage.getItem("username");
  
  if(hasHiddenAuthButtons){
    displaythis = (<div>
      <Stack direction="row" spacing={1}>
      <Avatar
  alt={userdata}
  src="avatar.png"
  // sx={{ width: 24, height: 24 }}
/>
    <div className="username-text">{userdata}</div>
    <Button name="logout" onClick={handleClick}>Logout</Button>
  </Stack></div>)
  }
  else if(children==="Login"||children==="Register"){
    displaythis = (<Button
      className="explore-button"
      startIcon={<ArrowBackIcon />}
      variant="text"
      onClick={()=>{history.push("/")}}
    >
      Back to explore
    </Button>)
  }
  else{
    displaythis = (<div> 
      
      <Button onClick={()=>{history.push("/login")}}>Login</Button> <Button className="button" variant="contained" onClick={()=>{history.push("/register")}}>Register</Button></div>)
  }
    return (<>
      <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
      {/* {(children!=="Login"||children!=="Register")} */}
        <Box>{displaythis}</Box>
      </Box>
      </>
    );
};

export default Header;
