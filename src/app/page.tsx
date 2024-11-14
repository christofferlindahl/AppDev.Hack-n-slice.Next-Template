import { Greeting } from "@/components/Greeting";
import { Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Stack spacing={2}>
      <Typography variant="h1">Hello world</Typography>
      <Greeting />
    </Stack>
  );
}
