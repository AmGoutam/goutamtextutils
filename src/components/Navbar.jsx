import React, { useState ,useEffect} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useGlobalContext } from "../context/AppContext";
const Navbar = () => {


    const { darkMode,checked } = useGlobalContext();
    const[myText,setMyText] = useState("Enable Dark Mode")
    const [nav, setNav] = useState(false);


  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });



  useEffect(() => {
    if (checked === true) {
      document.body.style.backgroundColor = "#23272f";
      document.body.style.color = "#fff";
      document.querySelector("textarea").style.backgroundColor = "#132F4C";
      document.querySelector("textarea").style.color = "#fff";
      setNav(false);
      setMyText("Enable Light Mode")
    } else {
      document.querySelector("textarea").style.backgroundColor = "#fff";
      document.querySelector("textarea").style.color = "#132F4C";
      setMyText("Enable Dark Mode")
      setNav(true);
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#23272f";
    }
  }, [checked, nav]);






  return (
    <>
     <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static" color="primary" enableColorOnDark={nav}>
            <Toolbar variant="dense" className="container navbar">
              <Typography
                variant="h6"
                color="inherit"
                component="div"
                className="text-uppercase"
              >
                goutam textutils
              </Typography>
              <Typography>
               {myText}
                <Switch color="secondary" checked={checked} onChange={darkMode} />
              </Typography>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </Box> 
    </>
  )
}

export default Navbar


// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar