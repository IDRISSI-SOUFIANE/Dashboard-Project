import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows, columns } from "./bigdata";
import Header from "../../component/Header";

const Contact = () => {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Header
        title={"Conatact"}
        subTitle={"List Of Contacts For Future Refrence"}
      />

      <DataGrid
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        columns={columns}
      />
    </Box>
  );
};
export default Contact;
