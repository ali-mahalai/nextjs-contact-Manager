"use client";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { Person2 } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { AddCircle } from "@mui/icons-material";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { ContactContext } from "../(context)/ContactContext";
import { useGetContactsQuery } from "../(redux)/Api";
const Navbar = () => {
  let { setQuery, query } = useContext(ContactContext);

  

  return (
    <>
      <Box
        component="header"
        sx={{
          backgroundColor: "currentLine.main",
          height: "50px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography color="foreGround.main">
            <Person2 color="purple" sx={{ verticalAlign: "middle" }} /> وب
            اپلیکیشن مدیریت مخاطیین
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            placeholder="جستجو"
            style={{
              borderColor: "#BD93F9",
              outline: "none",
              width: "300px",
              fontFamily: "vazir",
            }}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <IconButton color="purple">
            <Search />
          </IconButton>
        </Box>
      </Box>

      <Link style={{ color: "black" }} href="/CreateContact">
        <Button color="purple" variant="contained" sx={{ marginTop: "20px" }}>
          ساخت مخاطب جدید <AddCircle sx={{ marginRight: "10px" }} />
        </Button>
      </Link>
    </>
  );
};

export default Navbar;
