"use client";

import { useAddPostMutation } from "@/api/postsApi";
import { Send } from "@mui/icons-material";
import {
  Button,
  CircularProgress,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";

export const AddPost: React.FC = () => {
  const [input, setInput] = React.useState("");

  const [addPost, { isLoading }] = useAddPostMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    await addPost({ message: input }).unwrap();
    setInput("");
  };

  return (
    <Paper sx={{ p: 2 }} component="form" onSubmit={() => void handleSubmit()}>
      <Stack spacing={1}>
        <TextField
          value={input}
          onChange={handleInputChange}
          label="Message"
          placeholder="Type your message here"
          disabled={isLoading}
          multiline
          rows={3}
        />
        <Button
          variant="contained"
          type="submit"
          disabled={isLoading || !input}
          disableElevation
          endIcon={<Send />}
        >
          {isLoading ? <CircularProgress size={24} /> : "Send"}
        </Button>
      </Stack>
    </Paper>
  );
};
