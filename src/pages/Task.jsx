import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
// addIcon
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
// alert
import Alert from '@mui/material/Alert';

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

export default function Task() {
    const [tasks,setTasks] = useState([]);
    fetch('http://127.0.0.1:8001/api/tasks')
    .then((res) => res.json())
    .then((result) =>{
        setTasks(result);
    })
    .catch(err=>console.log(err))
    const [showAlert, setShowAlert] = useState(false);
//   const handleSubmit = (event) => {

//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const dataOfTask = {
//       title: data.get('title'),
//       description: data.get('description'),
//       ExecutionDate: data.get('Execution-Date'),
//       completed: data.get('completed'),
//       priority: data.get('priority'),
//       tags: data.get('tags'),
//     }
//     // console.log({
//     //   title: data.get('title'),
//     //   description: data.get('description'),
//     //   ExecutionDate: data.get('Execution-Date'),
//     //   completed: data.get('completed'),
//     //   priority: data.get('priority'),
//     //   tags: data.get('tags'),
//     // });
    
//   };
    const [checked, setChecked] = useState(false);//false to close checkbox - true to open it

    const handleChangeCheckbox = (id) => {
        // setChecked(event.value);
        console.log(document.getElementById('task'+id));
        // fetch('http://127.0.0.1:8001/api/tasks/update'+id,{
        //     method:'put',
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8"
        //     },
        //     body: JSON.stringify(checked)
        // })
        // .then((res) => res.json())
        // .then((result) =>{
        //     //show the success alert
        //     setShowAlert(true);
        //     setTimeout(() => {
        //         setShowAlert(false);
        //     }, 3000);
        // })
        // .catch(err=>{
        //     setShowAlert(false);
        //     console.log(err)
        // })
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ALL TASKS
          </Typography>
            <Box  sx={{ '& > :not(style)': { m: 1,position: "fixed", right: "2rem", bottom: "3rem" } }}>  
                <Link href={"/"}>
                        <Fab color="secondary" aria-label="add">
                            <AddIcon />
                        </Fab>
                </Link>
            </Box>
          
          <Box component="form" noValidate sx={{ mt: 3 }}>
            {showAlert && (
                    <Box sx={{ my: 3 }}>
                        <Alert severity="success">
                            Success! Your changes have been saved.
                        </Alert>
                    </Box>
            )}
            <Grid container spacing={2}>
              
                    {
                        tasks.map((task,index)=>(
                            <Grid item xs={12} sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }} key={index}>
                                    <Checkbox sx={{'& .MuiSvgIcon-root': { fontSize: 38 } }}
                                        // inputProps={{ 'aria-label': 'controlled' }}
                                        // checked={task.completed}
                                        // onClick={handleChangeCheckbox(task.id)}
                                        name={`task${task.id}`}
                                        id={`task${task.id}`}
                                    />
                                <FormControl fullWidth>
                                    <Box
                                        // height={200}
                                        // width={200}
                                        my={4}
                                        display="flex"
                                        alignItems="center"
                                        gap={4}
                                        p={2}
                                        fontSize={'14px'}
                                        sx={{ border: '2px solid grey' }}
                                        >
                                        {`task${task.title}`}<br/>
                                        {task.completed}
                                    </Box>
                                </FormControl>
                            </Grid>
                        ))
                    }
                
                {/* <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
             
            </Grid>
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ADD Task
            </Button> */}
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                    ADD Task
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}