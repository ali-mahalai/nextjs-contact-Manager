import SpinnerGif from "../../public/photo/Spinner.gif"
import Image from "next/image";
const Spinner = () => {
  return (
    <>
      <Image
        src={SpinnerGif}
        style={{ width: "200px", height:"200px" , margin: "0 auto", display: "block" }}
      />
    </>
  );
};

export default Spinner;