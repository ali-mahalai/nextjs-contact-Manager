"use client";

import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import personImage from "../../../public/photo/man-taking-note.png";
import { useContext, useState } from "react";
import { useAddContactMutation } from "@/app/(redux)/Api";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ContactContext } from "@/app/(context)/ContactContext";
const CreateContact = () => {
  const [fullName, setFullName] = useState();
  const [photo, setPhoto] = useState();
  const [mobile, setMobile] = useState();
  const [job, setJob] = useState();
  const [email, setEmail] = useState();
  const [group, setGroup] = useState();
  const Router = useRouter();

  const [CreateContact] = useAddContactMutation();
   
 const {query} = useContext(ContactContext)

 console.log(query)

  const submit = async () => {
    await CreateContact(
      {
        fullName,
        photo,
        mobile,
        job,
        email,
        group,
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
          ساخت مخاطب جدید
        </Typography>

        <Divider
          sx={{ bgcolor: "purple.main", width: "100%", marginTop: "20px" }}
        />
      </Box>

      <Grid container>
        <Grid xs={12} sm={12} md={6} item>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            mt={10}
          >
            <TextField
              name="name"
              type="text"
              sx={{
                backgroundColor: "currentLine.main",
                border: "1px solid #BD93F9",
                WebkitTextFillColor: "white",
                width: "70%",
                marginBottom: "15px",
                borderRadius: "10px",
              }}
              color="purple"
              variant="filled"
              size="small"
              label="نام و نام خانوادگی"
              onChange={(e) => setFullName(e.target.value)}
            />
            <TextField
              name="photo"
              type="text"
              sx={{
                backgroundColor: "currentLine.main",
                border: "1px solid #BD93F9",
                WebkitTextFillColor: "white",
                width: "70%",
                marginBottom: "15px",
                borderRadius: "10px",
              }}
              color="purple"
              variant="filled"
              size="small"
              label=" تصویر"
              onChange={(e) => setPhoto(e.target.value)}
            />
            <TextField
              name="mobile"
              type="number"
              sx={{
                backgroundColor: "currentLine.main",
                border: "1px solid #BD93F9",
                WebkitTextFillColor: "white",
                width: "70%",
                marginBottom: "15px",
                borderRadius: "10px",
              }}
              color="purple"
              variant="filled"
              size="small"
              label=" شماره تماس "
              onChange={(e) => setMobile(e.target.value)}
            />
            <TextField
              name="email"
              type="email"
              sx={{
                backgroundColor: "currentLine.main",
                border: "1px solid #BD93F9",
                WebkitTextFillColor: "white",
                width: "70%",
                marginBottom: "15px",
                borderRadius: "10px",
              }}
              color="purple"
              variant="filled"
              size="small"
              label=" ایمیل"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              name="job"
              type="text"
              sx={{
                backgroundColor: "currentLine.main",
                border: "1px solid #BD93F9",
                WebkitTextFillColor: "white",
                width: "70%",
                marginBottom: "15px",
                borderRadius: "10px",
              }}
              color="purple"
              variant="filled"
              size="small"
              label=" شغل "
              onChange={(e) => setJob(e.target.value)}
            />

            <FormControl variant="filled" sx={{ m: 1, width: "70%" }}>
              <InputLabel
                sx={{ color: "white" }}
                id="demo-simple-select-standard-label"
              >
                گروه
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                onChange={(e) => setGroup(e.target.value)}
                label="گروه"
                color="purple.main"
                sx={{
                  backgroundColor: "currentLine.main",
                  color: "white",
                  borderRadius: "10px",
                  border: "1px solid #BD93F9",
                  WebkitTextFillColor: "white",
                }}
              >
                <MenuItem value="">
                  <em>هیچکدام</em>
                </MenuItem>
                <MenuItem value={"همکار"}>همکار</MenuItem>
                <MenuItem value={"دوست"}>دوست</MenuItem>
                <MenuItem value={"فامیل"}>فامیل</MenuItem>
              </Select>
            </FormControl>

            <Box>
              <Button
                onClick={submit}
                color="purple"
                variant="contained"
                sx={{ marginRight: "15px" }}
              >
                ساخت مخاطب
              </Button>
              <Link style={{ color: "black", marginRight: "20px" }} href={"/"}>
                <Button color="cyan" variant="contained">
                  انصراف
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          md={6}
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
              width: "100%",
            }}
          >
            <Image style={{ opacity: ".5" }} src={personImage} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateContact;
