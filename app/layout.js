"use client";

import { Box, IconButton, ThemeProvider, Typography } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { theme } from "./(mui)/theme";
import { Provider } from "react-redux";
import { Store } from "./(redux)/Store";
import { createContext, useContext, useState } from "react";
import { Context } from "./(context)/ContactContext";
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

// Create rtl cache

export default function RootLayout(props) {

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <html
      style={{
        marginLeft: "100px",
        marginRight: "100px",
        backgroundColor: "#282A36",
      }}
      lang="fa"
      dir="rtl"
    >
      <body>
        <AppRouterCacheProvider te>
          <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <Provider store={Store}><Context>{props.children}</Context></Provider>
          </ThemeProvider>
          </CacheProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
