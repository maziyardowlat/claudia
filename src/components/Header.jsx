import React from "react";
import {Link} from "react-router-dom"
import {AppBar, Toolbar, Typography,Stack,Button} from "@mui/material";

const Header = () =>{
    return(
        <AppBar position='fixed' style={{ background: '#FFFFF', marginBottom: 0, "background-image": "linear-gradient(to right, #3B1B04, #72170B)"}}>
            <Toolbar>
                <Typography variant='h4' component = 'div' sx={{flexGrow:1, height: '100px',display: 'flex', alignItems: 'center', fontSize: "40px",fontFamily: 'Bentham'}}>
                    Claudia
                </Typography>
                <Stack direction='row' spacing={4}>
                    <Link to = "/" style={{ color: '#FFF', textDecoration: 'none' }}>
                        <Button style={{ fontSize: '20px' ,fontFamily: 'Bentham'}} color='inherit'>Home</Button>
                    </Link>
                    <Link to ="/about" style={{ color: '#FFF', textDecoration: 'none' }}>
                        <Button style={{ fontSize: '20px',fontFamily: 'Bentham '}} color='inherit'>About Us</Button>
                    </Link>
                    <Link to ="/purchase" style={{ color: '#FFF', textDecoration: 'none' }}>
                        <Button style={{ fontSize: '20px',fontFamily: 'Bentham ' }} color='inherit'>Buy</Button>
                    </Link>
                    <Link to ="/contact" style={{ color: '#FFF', textDecoration: 'none' }}>
                        <Button style={{ fontSize: '20px',fontFamily: 'Bentham '}} color='inherit'>Contact</Button>
                    </Link>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Header;