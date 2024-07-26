import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// date
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
// switch
import Switch from '@mui/material/Switch';
// select
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
// alert
import Alert from '@mui/material/Alert';
// 
import PostAddIcon from '@mui/icons-material/PostAdd';
// 
import Fab from '@mui/material/Fab';
import ListIcon from '@mui/icons-material/List';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      Developed by Salma Halhoul |
      {/* <Link color="inherit" href="https://mui.com/">
        
      </Link> */}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function AddTask() {
    const [showAlert, setShowAlert] = useState(false);
    const handleSubmit = (event) => {

        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const dataOfTask = {
        title: data.get('title'),
        description: data.get('description'),
        ExecutionDate: data.get('Execution-Date'),
        completed: data.get('completed'),
        priority: data.get('priority'),
        tags: data.get('tags'),
        }
        // console.log({
        //   title: data.get('title'),
        //   description: data.get('description'),
        //   ExecutionDate: data.get('Execution-Date'),
        //   completed: data.get('completed'),
        //   priority: data.get('priority'),
        //   tags: data.get('tags'),
        // });
        fetch(`${process.env.REACT_APP_API_BASE_URL}/tasks`,{
            method:'post',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(dataOfTask)
        })
        .then((res) => res.json())
        .then((result) =>{
            //show the success alert
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        })
        .catch(err=>{
            setShowAlert(false);
            console.log(err)})
    };
  // date
  const currentDate = new Date();
  const [value,setValue] = useState(dayjs(currentDate));
  // switch
  const [checked, setChecked] = useState(false);//false to close checkbox - true to open it
  // select
  const [priority, setPriority] = useState('');

  const handleChange = (event) => {
    setPriority(event.target.value);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PostAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            TODOLIST
          </Typography>
          <Box  sx={{ '& > :not(style)': { m: 1,position: "fixed", right: "2rem", bottom: "3rem" } }}>  
              <Link href={"/tasks"}>
                      <Fab color="secondary" aria-label="add">
                          <ListIcon />
                      </Fab>
              </Link>
          </Box>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            {showAlert && (
                <Box sx={{ my: 3 }}>
                    <Alert severity="success">
                        Success! Your task is created.
                    </Alert>
                </Box>
            )}
            {/* <Box sx={{ my: 3 }}>
                <Alert severity="success">This is a success Alert.</Alert>
            </Box> */}
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="title"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs} w={'100%'}>
                    <DatePicker 
                      onChange={(newValue) => setValue(newValue)}
                      value={value} 
                      name='Execution-Date'
                      label="Execution Date"/>
                  </LocalizationProvider>
                </FormControl>
              </Grid>
              <Grid item xs={12} style={{display:"flex",alignItems:"center"}}>
                  <InputLabel id="demo-simple-select-label">Completed</InputLabel>
                  <Switch
                    checked={checked}
                    name='completed'
                    onChange={(event) => {
                      setChecked(event.target.checked);
                    }}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                  <Select xs={12}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="priority"
                    name="priority"
                    value={priority}
                    onChange={handleChange}
                  >
                    <MenuItem value={''} disabled>--choose an option--</MenuItem>
                    <MenuItem value={1}>High</MenuItem>
                    <MenuItem value={2}>Medium</MenuItem>
                    <MenuItem value={3}>Low</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
               <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="tags"
                  label="Tags"
                  name="tags"
                  autoComplete="tags"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{backgroundColor:"rgba(156, 39, 176, 1)"}}
              sx={{ mt: 3, mb: 2 }}
            >
              ADD Task
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/tasks" variant="body2">
                  Show all my tasks
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}