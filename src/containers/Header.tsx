import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";
import styled from "styled-components";

export default function Header() {
  const S = {
    ToolbarWrapper: styled(Toolbar)`
      background: #1976d2;
      color: #fff;
    `,
  };
  return <S.ToolbarWrapper>Demo</S.ToolbarWrapper>;
}
