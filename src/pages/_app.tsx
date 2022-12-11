import ListContextProvider from "../context/ListContext";
import Header from "../components/Header";
import type { AppProps } from "next/app";
import { globalStyle } from "../styles/global";
import { Container } from "../styles/pages/app";

globalStyle();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />

      <Container>
        <ListContextProvider>
          <Component {...pageProps} />
        </ListContextProvider>
      </Container>
    </>
  );
}
