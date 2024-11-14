import { AddPost } from "@/components/AddPost";
import { PostsList } from "@/components/PostsList";
import { Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Stack spacing={2}>
      <Typography variant="h1">Hello world</Typography>
      <AddPost />
      <PostsList />
    </Stack>
  );
}
