import { Box, Button } from '@mui/material'
import React from 'react';

// ========================================upload files table====================
function displayUplaodTable(){
  console.log("hello");
  return(
    <Box sx={{width:"100vw",height:"50vh",backgroundColor:"rgb(255, 255, 167)"}}>

    </Box>
  )
}

// ==========================MUI file upload fun====================================
const Tablecomponent=()=>{

  return(
    <>
<Box sx={{display:"flex",height:"30vh",width:"40vw",backgroundColor:"skyblue",alignItems:"center",justifyItems:"center",flexDirection:"column"}}>
<Box component="h3"> uplaod your files here</Box>

<Button variant="contained" component="label" sx={{width:"120px",height:"50px",}}>
  Upload
  <input hidden accept="image/*" multiple type="file" onChange={(e)=>console.log(e)} />
</Button>
</Box>
{displayUplaodTable()}
    </>
  )
}
export default Tablecomponent;