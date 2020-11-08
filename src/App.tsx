import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./containers/Header";
import DemoList from "./containers/DemoLIst";
import styled from "styled-components";
import DemoContent from "./containers/DemoContent";

function App() {
  const S = {
    MainContentWrapper: styled.div`
      display: flex;
      flex-wrap: wrap;
    `,
    DemoListWrapper: styled.div`
      flex: 1 0 360px;
      border-right: 1px solid azure;
    `,
    ContentWrapper: styled.div`
      flex: 99;
      padding-left: 10px;
    `,
  };
  return (
    <div>
      <Header />
      <S.MainContentWrapper>
        <S.DemoListWrapper>
          <DemoList />
        </S.DemoListWrapper>
        <S.ContentWrapper>
          <DemoContent />
        </S.ContentWrapper>
      </S.MainContentWrapper>
    </div>
  );
}

export default App;
