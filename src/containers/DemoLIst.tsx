import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
export default function DemoList() {
  return (
    <List component="nav" aria-label="main mailbox folders">
      <ListItem button>
        <ListItemText primary="Store Translation With Object" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Access ArrayList Translation" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Using Default Language as Fallback" />
      </ListItem>
    </List>
  );
}
