"use client";

import {
  useGetContactQuery,
  useUpDateContactMutation,
} from "@/app/(redux)/Api";
import { Person2, Watch } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const EditContact = () => {
  const params = useParams();
  const { data: contactDetail = {} , isSuccess } = useGetContactQuery(params.id);
  const Router = useRouter();

  const [fullName, setFullName] = useState('');
  const [photo, setPhoto] = useState("");
  const [mobile, setMobile] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState();
  const [group, setGroup] = useState();

  const contactId = params.id;

  const [EditContact] = useUpDateContactMutation();

  useEffect(() => {


    setFullName(contactDetail.fullName);
    setPhoto(contactDetail.photo);
    setMobile(contactDetail.mobile);
    setJob(contactDetail.job);
    setEmail(contactDetail.email);
    return() =>{
     
    }
  }, [isSuccess]);
  console.log(fullName)
  const EditSubmit = async () => {
    await EditContact(
      {
        fullName,
        photo,
        mobile,
        job,
        email,
        group,
        contactId,
      },
      Router.push("/")
    );
  };

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
          ویرایش مخاطب
        </Typography>

        <Divider
          sx={{ bgcolor: "purple.main", width: "100%", marginTop: "20px" }}
        />
      </Box>

      <Grid container>
        <Grid
          sx={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
          xs={12}
          item
        >
          <Grid
            container
            sx={{
              backgroundColor: "currentLine.main",
              padding: "20px",
              width: "40%",
              display: "flex",
            }}
          >
            <Grid xs={6} item>
              <Box sx={{ width: "100%" }}>
                <TextField
                  name="name"
                  type="text"
                  sx={{
                    backgroundColor: "currentLine.main",
                    border: "1px solid #BD93F9",
                    WebkitTextFillColor: "white",
                    width: "100%",
                    marginBottom: "15px",
                    borderRadius: "10px",
                  }}
                  color="purple"
                  variant="filled"
                  size="small"
                  label ="نام و نام خانوادگی"
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                />
                <TextField
                  name="name"
                  type="text"
                  sx={{
                    backgroundColor: "currentLine.main",
                    border: "1px solid #BD93F9",
                    WebkitTextFillColor: "white",
                    width: "100%",
                    marginBottom: "15px",
                    borderRadius: "10px",
                  }}
                  color="purple"
                  variant="filled"
                  size="small"
                  label="لینک تصویر"
                  onChange={(e) => setPhoto(e.target.value)}
                  value={photo}

                />
                <TextField
                  name="name"
                  type="text"
                  sx={{
                    backgroundColor: "currentLine.main",
                    border: "1px solid #BD93F9",
                    WebkitTextFillColor: "white",
                    width: "100%",
                    marginBottom: "15px",
                    borderRadius: "10px",
                  }}
                  color="purple"
                  variant="filled"
                  size="small"
                  label='شماره تماس'
                  onChange={(e) => setMobile(e.target.value)}
                  value={mobile}
                />
                <TextField
                  name="name"
                  type="text"
                  sx={{
                    backgroundColor: "currentLine.main",
                    border: "1px solid #BD93F9",
                    WebkitTextFillColor: "white",
                    width: "100%",
                    marginBottom: "15px",
                    borderRadius: "10px",
                  }}
                  color="purple"
                  variant="filled"
                  size="small"
                  label="ایمیل"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <TextField
                  name="name"
                  type="text"
                  sx={{
                    backgroundColor: "currentLine.main",
                    border: "1px solid #BD93F9",
                    WebkitTextFillColor: "white",
                    width: "100%",
                    marginBottom: "15px",
                    borderRadius: "10px",
                  }}
                  color="purple"
                  variant="filled"
                  size="small"
                  label="شغل"
                  onChange={(e) => setJob(e.target.value)}
                  value={job}
                />
              </Box>
            </Grid>

            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              xs={6}
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
                  src={contactDetail.photo}
                  variant="rounded"
                  sx={{ width: "200px", height: "200px" }}
                >
                  <Person2 sx={{ width: "100px", height: "100px" }} />
                </Avatar>
              </Box>
            </Grid>

            <Box sx={{ margin: "20px auto" }}>
              <Button
                sx={{ marginRight: "50px" }}
                variant="contained"
                color="purple"
                onClick={EditSubmit}
              >
                ویرایش
              </Button>
              <Button
                onClick={() => Router.push("/")}
                variant="contained"
                color="cyan"
                sx={{ marginRight: "20px" }}
              >
                انصراف
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditContact;
