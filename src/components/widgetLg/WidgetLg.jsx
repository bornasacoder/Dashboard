import React from 'react'
// import './widgetlg.css'
import { DataGrid } from '@material-ui/data-grid'
import { Box, Typography } from '@mui/material';
import dayjs from 'dayjs';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 120,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  { 
    field: 'dob', 
    headerName: 'Date of Birth', 
    width: 150,
    type:'date',
    valueFormatter: (params) => dayjs(params.value).format('DD/MM/YYYY')
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, dob:"12/12/12"   },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, dob:"11/11/11" },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export const WidgetLg = () => {

  return (
    <>
    <Box sx={{ height: 400, width: '70%', padding:"10px 0px", }}>
      <Typography variant='h6' sx={{textAlign:"center", fontWeight:"600", padding:"0px 0px 20px 0px"}}>User Details</Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </>
  )
}
