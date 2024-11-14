"use client";

import { usePostGreetingMutation } from "@/api/greetingApi";
import { WavingHand } from "@mui/icons-material";
import {
  Alert,
  Button,
  CircularProgress,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";

export const Greeting: React.FC = () => {
  const [input, setInput] = React.useState("");

  const [greet, { data, isLoading }] = usePostGreetingMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    greet({ name: input });
  };

  return (
    <Paper sx={{ p: 2 }} component={Stack} spacing={1}>
      <TextField
        onChange={handleInputChange}
        label="Name"
        disabled={isLoading}
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={isLoading || !input}
        disableElevation
      >
        {isLoading ? <CircularProgress size={24} /> : "Greet"}
      </Button>
      {data && (
        <Alert variant="outlined" severity="success" icon={<WavingHand />}>
          {data.greeting}
        </Alert>
      )}
    </Paper>
  );
};
