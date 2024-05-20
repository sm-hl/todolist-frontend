import * as React from 'react';
import { useState,useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// addIcon
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
// alert
import Alert from '@mui/material/Alert';
// 
import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
// 
import AssignmentIcon from '@mui/icons-material/Assignment';


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

const defaultTheme = createTheme();

export default function Task() {
  // 
  const [rows,setRows] = useState([]);
  useEffect(()=>{
    fetch('http://127.0.0.1:8001/api/tasks')
    .then((res) => res.json())
    .then((result) =>{
      setRows(result);
      console.log(result);
    })
    .catch(err=>console.log(err))
  },[])

  const columns = [
    { field: 'completed', headerName: 'Completed', width: 150 },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 150,
    },
    {
      field: 'execution_date',
      headerName: 'Execution Date',
      width: 110,
    },
    {
      field: 'priority',
      headerName: 'Priority',
      width: 110,
    },
    {
      field: 'tags',
      headerName: 'Tags',
      width: 110,
    },
  ];
  
  // const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  // ];
  
  const HeaderWithIconRoot = styled('div')(({ theme }) => ({
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    '& span': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      marginRight: theme.spacing(0.5),
    },
  }));
  const columnGroupingModel = [
    {
      groupId: 'internal_data',
      headerName: 'Internal',
      description: '',
      children: [{ field: 'id' }],
    },
    {
      groupId: 'character',
      description: 'Information about the character',
      headerName: 'Basic info',
      children: [
        {
          groupId: 'naming',
          headerName: 'Names',
          headerClassName: 'my-super-theme--naming-group',
          children: [{ field: 'lastName' }, { field: 'firstName' }],
        },
        { field: 'age' },
      ],
    },
  ];
  // 

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
      {/* <Container component="main" maxWidth="xs"> */}
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
            <AssignmentIcon />
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
          <Box
            sx={{
              width: '70%',
              mt: 3,
              '& .my-super-theme--naming-group': {
                backgroundColor: 'rgba(255, 7, 0, 0.55)',
              },
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              checkboxSelection
              disableRowSelectionOnClick
              columnGroupingModel={columnGroupingModel}
            />
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      {/* </Container> */}
    </ThemeProvider>
  );
}