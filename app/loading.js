import Image from "next/image"
import SpinnerGif from "../public/photo/Spinner.gif"
import { Box } from "@mui/material";
const loading = () => {
  return (
    <>
    <div style={{marginTop:"300px"}}>
    <Image 
      src={SpinnerGif}
      style={{ width: "200px", height:"200px" , margin: "0 auto", display: "block" }}
    />
    </div>
  </>
  );
};

export default loading;
