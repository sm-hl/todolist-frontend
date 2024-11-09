import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';import Fab from "@mui/material/Fab";
import ListIcon from "@mui/icons-material/List";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const defaultTheme = createTheme();

export default function ShowTask(params) {
  const { id } = useParams();
  const [task, setTask] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/tasks/${id}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setTask(result);
      })
      .catch((err) => console.log(err));
      
  }, [id]);

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <AutoStoriesIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              View Task
            </Typography>
            <Box
              sx={{
                "& > :not(style)": {
                  m: 1,
                  position: "fixed",
                  right: "2rem",
                  bottom: "3rem",
                },
              }}
            >
              <Link href={"/tasks"}>
                <Fab color="secondary" aria-label="add">
                  <ListIcon />
                </Fab>
              </Link>
            </Box>
            {/* task view */}
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
              aria-label="contacts"
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText inset primary={`Title : ${task.title}`} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText inset primary={`Description : ${task.description}`} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CalendarTodayIcon />
                  </ListItemIcon>
                  <ListItemText primary={`Execution Date : ${task.execution_date}`} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary={`Priority : ${task.priority==="1"?'High':task.priority==="2"?'Medium':task.priority==="3"??'Low'}`} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
