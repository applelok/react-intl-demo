import React, { useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { Button, Menu, MenuItem } from "@material-ui/core";
import styled from "styled-components";
import TranslateIcon from "@material-ui/icons/Translate";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const S = {
    ToolbarWrapper: styled(Toolbar)`
      background: #1976d2;
      color: #fff;
    `,
    DropdownWrapper: styled.div``,
  };

  return (
    <S.ToolbarWrapper>
      Demo
      <S.DropdownWrapper>
        <div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Language
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </S.DropdownWrapper>
    </S.ToolbarWrapper>
  );
}
