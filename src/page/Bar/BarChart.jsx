import { Box } from "@mui/material";
import Bar from "./Bar";
import Header from "../../component/Header";

const BarChart = () => {
  return (
    <Box>
      <Header title="BarChart" subTitle="Welocme To A BarChart" />
      <Bar />;
    </Box>
  );
};

export default BarChart;
