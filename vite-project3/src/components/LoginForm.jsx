import React from "react";
import { TextField, Button, Checkbox, FormControlLabel, Typography, Box } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const LoginForm = () => {
  return (
    <Box
      sx={{
        
        textAlign: "center",
        pl: 70,
     
      }}
    >
       <Box
        sx={{
          backgroundColor: "purple",
          borderRadius: "50%",
          width: 50,
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          mb: 2, 
        }}
      >
        <LockOutlinedIcon sx={{ color: "white" }} />
      </Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Sign in
      </Typography>

      <TextField
        fullWidth
        label="Email Address"
        variant="outlined"
        margin="normal"
        required
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        required
      />

      <FormControlLabel
        control={<Checkbox color="primary" />}
        label="Remember me"
        sx={{ mt: 2, display: "block", textAlign: "left" }}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2, py: 2, backgroundColor: "#1976d2", "&:hover": { backgroundColor: "#1565c0" } }}
      >
        Sign In
      </Button>
      <Box
  sx={{
    mt: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }}
>
  <Typography variant="body2">
    <a href="#" style={{ textDecoration: "none", color: "#1976d2" }}>
      Forgot password?
    </a>
  </Typography>
  <Typography variant="body2">
    <a href="#" style={{ textDecoration: "none", color: "#1976d2" }}>
    Don't have an account? Sign Up
    </a>
  </Typography>
</Box>


      <Typography variant="caption" display="block" sx={{ mt: 6, color: "#888" }}>
        Copyright © Your Website 2023
      </Typography>
    </Box>
  );
};

export default LoginForm;