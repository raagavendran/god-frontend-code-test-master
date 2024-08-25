import { AppProps } from "next/app";
import React from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";
import "../public/css/styles.css";

function VolvoApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      {/* vcc-ui theme provider added */}
      <StyleProvider>
        <ThemePicker variant="light">
          <Component {...pageProps} />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default VolvoApp;
