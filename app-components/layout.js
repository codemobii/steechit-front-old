import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "./header";
import { ThemeProvider, StyleReset, Div, Container } from "atomize";
import Footer from "./footer";
import AuthBox from "./auth_box";
import { Router, useRouter } from "next/router";

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
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const auth = router.query.auth;

  useEffect(() => {
    console.log(auth);
    if (auth) {
      setOpenLogin(true);
    }
    setLoading(false);
  }, []);

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
      {loading ? (
        <Div pos="fixed" top="0" left="0" w="100%" h="100%" bg="black100" />
      ) : null}
      <Div bg="gray200" p={{ t: fixed ? "6.5rem" : "3rem", b: "3rem" }}>
        <Container>
          {children}
          <AuthBox isOpen={openLogin} onClose={() => setOpenLogin(false)} />
        </Container>
      </Div>
      <Footer />
    </ThemeProvider>
  );
}