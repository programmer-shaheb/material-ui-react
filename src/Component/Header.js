import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
} from "@material-ui/core";
import React from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item sm={6} style={{ border: "1px solid #fff" }}>
            <InputBase />
          </Grid>
          <Grid item sm={6} style={{ border: "1px solid #000" }}>
            <IconButton>
              <Badge badgeContent={12} color="secondary">
                <NotificationsNoneIcon></NotificationsNoneIcon>
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={12} color="secondary">
                <ChatBubbleOutlineIcon></ChatBubbleOutlineIcon>
              </Badge>
            </IconButton>
            <IconButton>
              <Badge color="secondary">
                <ExitToAppIcon></ExitToAppIcon>
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
