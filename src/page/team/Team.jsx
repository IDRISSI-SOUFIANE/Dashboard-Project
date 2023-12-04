import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

// === ICONS===

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../component/Header";

// === ICONS===

const Team = () => {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              backgroundColor:
                access == "Admin"
                  ? theme.palette.primary.dark
                  : access == "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",

              p: "5px",
              borderRadius: "3px",
              width: "99px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {access == "Admin" && (
              <AdminPanelSettingsOutlinedIcon
                fontSize="small"
                sx={{ color: "white" }}
              />
            )}
            {access == "Manager" && (
              <LockOpenOutlinedIcon fontSize="small" sx={{ color: "white" }} />
            )}
            {access == "User" && (
              <SecurityOutlinedIcon fontSize="small" sx={{ color: "white" }} />
            )}
            <Typography sx={{ fontSize: "13px", color: "white" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Header title={"Team"} subTitle={"Managing The Team Members"} />
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
};
export default Team;
