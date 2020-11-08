import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./containers/Header";
import DemoList from "./containers/DemoLIst";
import styled from "styled-components";
import DemoContent from "./containers/DemoContent";
import { IntlProvider } from "react-intl";
import flatten from "flat";
import en from "./locale/en";
import zh_tw from "./locale/zh_tw";

const flattenTranslation = (trans: any): any => {
  return flatten(trans);
};

const translation: Record<string, any> = {
  en: flattenTranslation(en),
  "zh-Hant-TW": flattenTranslation(zh_tw),
};

function App() {
  const [locale, setLocale] = useState<string>(navigator.language);
  const [mergedMessages, setMergedMessages] = useState(translation["en"]);

  useEffect(() => {
    // Merging english and current locale, avoid showing Text id if cannot look for the translate in locale file
    setMergedMessages(
      Object.assign({}, translation["en"], translation[locale])
    );
  }, [locale]);

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
    <IntlProvider
      messages={mergedMessages}
      locale={locale}
      key={locale}
      defaultLocale="en"
    >
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
    </IntlProvider>
  );
}

export default App;
