"use client";

import { useGetPostsQuery } from "@/api/postsApi";
import { List, ListItem, ListItemText, Paper, Skeleton } from "@mui/material";

export const PostsList: React.FC = () => {
  const { data, isFetching } = useGetPostsQuery();

  return (
    <Paper sx={{ p: 2 }}>
      <List dense>
        {data?.map((post, index) => (
          <ListItem key={index} divider={index !== data?.length - 1}>
            <ListItemText
              primary={post.message}
              secondary={new Date(post.date).toLocaleString("sv-SE")}
            />
          </ListItem>
        ))}
        {isFetching && (
          <ListItem>
            <ListItemText
              primary={<Skeleton variant="text" width={"50%"} />}
              secondary={<Skeleton variant="text" width={"30%"} />}
            />
          </ListItem>
        )}
      </List>
    </Paper>
  );
};
