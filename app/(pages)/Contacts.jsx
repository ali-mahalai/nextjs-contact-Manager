"use client";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import PersonIcon from "@mui/icons-material/Person";
import personGif from "../../public/photo/no-found.gif";
import Grid from "@mui/material/Grid";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import { useGetContactsQuery } from "../(redux)/Api";
import { useContext, useEffect, useState } from "react";
import { useDeleteContactMutation } from "../(redux)/Api";
import dynamic from "next/dynamic";
import { ContactContext } from "../(context)/ContactContext";

const Contacts = () => {
  const { data: users = [], isLoading, isError , isSuccess } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const [userDetail,setUserDetail] = useState()
  const PageError = dynamic(() => import("../(component)/PageError"));
  const Spinner = dynamic(() => import("../(component)/Spiner"));
  const Router = useRouter();
  const { query, setQuery } = useContext(ContactContext);
  const params = useParams();


  useEffect(() => {
   
    setQuery("")

    return() => {}

  },[isSuccess])



  return (
    <Box component="main" sx={{ marginTop: "30px" }}>
      <Grid container spacing={2}>
        {isError ? (
          <PageError />
        ) : isLoading ? (
          <Spinner />
        ) : users.length > 0 ? (
          users
            .filter((post) => {
              if (query === "") {
                return post;
              } else if (post.fullName.toLowerCase().includes(query)) {
                return post;
              }
            })
            .map((c, index) => (
              <Grid
                sx={{ display: "flex", justifyContent: "center" }}
                item
                xs={12}
                sm={12}
                md={6}
                key={index}
              >
                <Box sx={{ width: "80%" }}>
                  <Box
                    sx={{
                      backgroundColor: "currentLine.main",
                      height: "200px",
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      borderRadius: "5px",
                    }}
                  >
                    <Avatar
                      variant="square"
                      src={c.photo}
                      sx={{ width: "150px", height: "150px" }}
                    >
                      <PersonIcon sx={{ width: "100px", height: "100px" }} />
                    </Avatar>

                    <Box
                      sx={{
                        backgroundColor: "foreGround.main",
                        borderRadius: "5px",
                        flexGrow: "",
                        minWidth: "315px",
                      }}
                    >
                      <List sx={{ textAlign: "start" }}>
                        <ListItemText sx={{ padding: "6px" }}>
                          نام و نام خانوادگی : {c.fullName}
                        </ListItemText>
                        <Divider />
                        <ListItemText sx={{ padding: "6px" }}>
                          شماره موبایل : {c.mobile}
                        </ListItemText>
                        <Divider />
                        <ListItemText sx={{ padding: "6px" }}>
                          ایمیل آدرس : {c.email}
                        </ListItemText>
                      </List>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <IconButton
                        sx={{
                          backgroundColor: "orange.main",
                          margin: "5px",
                          borderRadius: "1px",
                          "&:hover": {
                            backgroundColor: "orange.main",
                          },
                        }}
                        color="foreGround"
                        onClick={() => Router.push(`/Contact/${c.id}`)}
                      >
                        <RemoveRedEyeIcon />
                      </IconButton>

                      <IconButton
                        sx={{
                          backgroundColor: "cyan.main",
                          margin: "5px",
                          borderRadius: "1px",
                          "&:hover": {
                            backgroundColor: "cyan.main",
                          },
                        }}
                        onClick={() => Router.push(`/EditContact/${c.id}`)}
                        color="foreGround"
                      >
                        <BorderColorIcon />
                      </IconButton>

                      <IconButton
                        sx={{
                          backgroundColor: "red.main",
                          margin: "5px",
                          borderRadius: "1px",
                          "&:hover": {
                            backgroundColor: "red.main",
                          },
                        }}
                        color="foreGround"
                        onClick={async () => await deleteContact(c.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))
        ) : (
          <Box
            sx={{
              display: "flex",
              marginTop: "50px",
              justifyContent: "center",
              width: "100%",

              alignItems: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "currentLine.main",
                minHeight: "300px",
                width: "80%",
                textAlign: "center",
              }}
            >
              <Image
                style={{ width: "300px", height: "200px", marginTop: "20px" }}
                src={personGif}
              />

              <Typography color="foreGround.main" sx={{ marginTop: "20px" }}>
                مخاطب یافت نشد ......!
              </Typography>
            </Box>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default Contacts;
