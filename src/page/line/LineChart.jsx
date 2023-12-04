import Line from "./Line";
import Header from "../../component/Header";
import { Box } from "@mui/material";
const LineChart = () => {
  return (
    <Box>
      <Header title="PieChhart" subTitle="Welocme To A PieChhart" />

      <Line />
    </Box>
  );
};

export default LineChart;
