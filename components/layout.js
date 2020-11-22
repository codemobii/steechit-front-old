import React, { useState } from "react";
import Head from "next/head";
import Header from "./header";
import { ThemeProvider, StyleReset, Div, Container } from "atomize";
import Footer from "./footer";
import AuthBox from "./auth_box";

const theme = {
  colors: {
    primary: "tomato",
    accent: "yellow",
  },
  fontFamily: {
    primary: "'Rubik', sans-serif",
  },
};

export default function Layout({
  children,
  title = "Steechit - Find the Best Tailors Anywhere, Anytime",
  fixed,
}) {
  const [openLogin, setOpenLogin] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <StyleReset />
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="text/javascript"
          src="https://ravesandbox.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js"
        ></script>
        <script src="https://checkout.flutterwave.com/v3.js"></script>
      </Head>
      <Header fixed={fixed} onOpen={() => setOpenLogin(true)} />
      <Div bg="gray200" p={{ t: fixed ? "8rem" : "3rem", b: "3rem" }}>
        <Container>
          {children}
          <AuthBox isOpen={openLogin} onClose={() => setOpenLogin(false)} />
        </Container>
      </Div>
      <Footer />
    </ThemeProvider>
  );
}
