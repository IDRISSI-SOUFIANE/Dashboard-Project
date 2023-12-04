import { Box } from "@mui/material";
import Pie from "./Pie";
import Header from "../../component/Header";

const PieCHart = () => {
  return (
    <Box>
      <Header title="PieChhart" subTitle="Welocme To A PieChhart" />

      <Pie />
    </Box>
  );
};

export default PieCHart;
