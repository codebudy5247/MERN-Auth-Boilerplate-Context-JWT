import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";

import useStyles from "./style";

const Header = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <div className={classes.brandContainer}>
                    <Typography
                        component={Link}
                        to="/"
                        className={classes.heading}
                        variant="h2"
                        align="center"
                    >
                        Social{" "}
                    </Typography>
                    {/* <img
                        className={classes.image}
                        src={memories}
                        alt="icon"
                        height="40"
                    />
                    <LinkContainer to="/jobs">
                <Nav.Link>
                  <button type="button" class="btn btn-primary btn-sm">
                    Jobs
                  </button>
                </Nav.Link>
  </LinkContainer>*/}
                </div>

                <Toolbar className={classes.toolbar}>


                    <Button
                        component={Link}
                        to="/auth"
                        variant="contained"
                        color="primary"
                    >
                        Sign In
                        </Button>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header
