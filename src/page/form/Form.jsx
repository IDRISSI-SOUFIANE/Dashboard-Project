import React from "react";
import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Header from "../../component/Header";

import { useForm } from "react-hook-form";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp = /^(\+\d{1,}(\s?\d{1,})?|\d{1,})$/;

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manger",
    label: "Manger",
  },
  {
    value: "User",
    label: "User",
  },
];

// ========= ========= ========= ========= ========= =========
const Form = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    console.log("dooonnnnnnnne");
    handleClick();
  };

  // === ALERT ===
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  // === ALERT ===
  return (
    <Box>
      <Header title="CREATE USER" subTitle="Create a New User Profile" />

      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <Stack sx={{ gap: 2 }} direction={"row"}>
          <TextField
            error={errors.firstName}
            helperText={
              errors.firstName
                ? "Filed Is Requierd & Only letters & max character: 20"
                : null
            }
            {...register("firstName", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/ /*Only letters allowed */,
            })}
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
            type="text"
          />

          <TextField
            error={errors.lastName}
            helperText={
              errors.lastName
                ? "Filed Is Requierd & Only letters & max character: 20"
                : null
            }
            {...register("lastName", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/ /*Only letters allowed */,
            })}
            sx={{ flex: 1 }}
            label="Last Name"
            variant="filled"
            type="text"
          />
        </Stack>

        <TextField
          error={errors.email}
          helperText={
            errors.email ? "Please Provide a Valide Form Email" : null
          }
          {...register("email", { required: true, pattern: regEmail })}
          label="Email"
          variant="filled"
        />

        <TextField
          error={errors.contactNumber}
          helperText={
            errors.contactNumber ? "Please Provide a Valide Form Number" : null
          }
          {...register("contactNumber", {
            required: true,
            pattern: phoneRegExp,
          })}
          label="Contact Number"
          variant="filled"
        />

        <TextField label="Adrres 1" variant="filled" />
        <TextField label="Adrres 2" variant="filled" />

        <TextField
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="User"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            sx={{ textTransform: "capitalize" }}
            variant="contained"
          >
            Create New User
          </Button>
        </Box>

        {/* === SNACK BAR === */}

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Your Register Is Complete
          </Alert>
        </Snackbar>
        {/* === SNACK BAR === */}
      </Box>
    </Box>
  );
};

export default Form;
