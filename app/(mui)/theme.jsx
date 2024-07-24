'use client'
import { createTheme } from "@mui/material";
import localFont from 'next/font/local'

const myFont = localFont({src: "font/Vazir-medium.woff2"})



export const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: myFont.style.fontFamily
  },
  palette: {
    background: {
      main: "#282A36",
    },
    currentLine: {
      main: "#44475A",
    },
    foreGround: {
      main: "#F8F8F2",
    },
    comment: {
      main: "#6272A4",
    },
    cyan: {
      main: "#8BE9FD",
    },
    green: {
      main: "#50FA7B",
    },
    orange: {
      main: "#FFB86C",
    },
    pink: {
      main: "#FF79C6",
    },
    purple: {
      main: "#BD93F9",
    },
    red: {
      main: "#FF5555",
    },
  },
});