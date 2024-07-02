import * as React from 'react';
import { useState,useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
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
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

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
    fetch(`${process.env.REACT_APP_API_BASE_URL}/tasks`)
    .then((res) => res.json())
    .then((result) =>{
      setRows(result);
      console.log(result);
    })
    .catch(err=>console.log(err))
  },[])
  const handleView = (rowData) => {
    const id = rowData.id;
    fetch(`${process.env.REACT_APP_API_BASE_URL}/tasks/`+id)
    .then((res) => res.json())
    .then((result) =>{
      
    })
    .catch(err=>console.log(err))
    // Implement logic for viewing using the id
    console.log('Viewing row with ID:', id);
  };
  
  const handleEdit = (rowData) => {
    const id = rowData.id;
    // Implement logic for editing using the id
    console.log('Editing row with ID:', id);
  };
  
  const handleDelete = (rowData) => {
    const id = rowData.id;
    // Implement logic for deleting using the id
    console.log('Deleting row with ID:', id);
  };
  
  const columns = [
    { field: 'completed', headerName: 'Completed', width: 150,
      renderCell: (params) => (
        <div style={{display:"flex", alignItems:"center", height:"100%"}}>
          {params.row.completed?
            (<div style={{display:"flex", color:"green"}}>
              <TaskAltIcon/>
              <Typography variant="body2" style={{marginLeft:10}}>completed</Typography>
            </div>)
            :
            (<div style={{display:"flex", color:"red"}}>
              <HighlightOffIcon/>
              <Typography variant="body2" style={{marginLeft:10}}>not completed</Typography>
            </div>)
          }
        </div>
      ),
     },
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
      width: 150,
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
    {
      field: 'Actions',
      headerName: 'Actions',
      width: 110,
      renderCell: (params) => (
        <div>
          <Button style={{width:"40%"}} size="small" onClick={() => handleView(params.row)}>
            <VisibilityIcon style={{color:"rgba(156, 39, 176, 1)"}}/>
          </Button>
          <Button style={{width:"40%"}} size="small" onClick={() => handleEdit(params.row)}>
            <EditIcon style={{color:"rgba(156, 39, 176, 1)"}}/>
          </Button>
          <Button style={{width:"40%"}} size="small" onClick={() => handleDelete(params.row)}>
            <DeleteIcon style={{color:"rgba(156, 39, 176, 1)"}}/>
          </Button>
        </div>
      ),
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
  
  // 

    const handleChangeCheckbox = (id) => {
        // setChecked(event.value);
        console.log(document.getElementById('task'+id));
        // fetch(`${process.env.REACT_APP_API_BASE_URL}/tasks/update`+id,{
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
      <Container component="main" >
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
              width: '100%',
              height: '400px',
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
            />
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}