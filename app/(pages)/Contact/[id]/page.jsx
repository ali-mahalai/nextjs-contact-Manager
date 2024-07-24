"use client"

import {
    Avatar,
    Box,
    Button,
    Divider,
    Grid,
    List,
    ListItemText,
    Typography,
  } from "@mui/material";
  import { Person2 } from "@mui/icons-material";
  import { useParams } from "next/navigation";
  import { useGetContactQuery } from "@/app/(redux)/Api";
  import { useRouter } from "next/navigation";
  const Contact = () => {
    const params = useParams()
    const { data: contact = [] } = useGetContactQuery(params.id);
    const Router = useRouter()
    console.log(contact);
  
    return (
      <Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" color="purple.main" mt={5}>
            اطلاعات مخاطب
          </Typography>
  
          <Divider
            sx={{ bgcolor: "purple.main", width: "100%", marginTop: "20px" }}
          />
        </Box>
  
        <Grid mt={10} container>
          <Grid sx={{ display: "flex", justifyContent: "center" }} xs={12} item>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                borderRadius: "10px",
                justifyContent: "center",
                alignItems: "center",
                width: "80%",
                backgroundColor: "currentLine.main",
              }}
            >
              <Grid container>
                <Grid
                  xs={12}
                  sm={12}
                  md={4}
                  sx={{ marginBottom: { xs: "15px" } }}
                  item
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      src={contact.photo}
                      variant="rounded"
                      sx={{ width: "200px", height: "200px", marginTop: "20px" }}
                    >
                      <Person2 sx={{ width: "100px", height: "100px" }} />
                    </Avatar>
                  </Box>
                </Grid>
                <Grid xs={12} sm={12} md={8} item>
                  <Box
                    sx={{
                      backgroundColor: "foreGround.main",
                      borderRadius: "10px",
                    }}
                  >
                    <List sx={{ textAlign: "center" }}>
                      <ListItemText sx={{ padding: "6px" }}>
                        نام و نام خانوادگی : {contact.fullName}
                      </ListItemText>
                      <Divider />
                      <ListItemText sx={{ padding: "6px" }}>
                        شماره موبایل : {contact.mobile}
                      </ListItemText>
                      <Divider />
                      <ListItemText sx={{ padding: "6px" }}>
                        ایمیل آدرس : {contact.email}
                      </ListItemText>
                      <Divider />
                      <ListItemText sx={{ padding: "6px" }}>
                        شغل : {contact.job}
                      </ListItemText>
                      <Divider />
                      <ListItemText sx={{ padding: "6px" }}>
                        گروه : {contact.group}
                      </ListItemText>
                    </List>
                  </Box>
                </Grid>
              </Grid>
              <Button
                color="purple"
                variant="contained"
                sx={{ marginTop: "30px" }}
                onClick={() => Router.push("/")}
              >
                بازگشت به صفحه اصلی
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default Contact;
  