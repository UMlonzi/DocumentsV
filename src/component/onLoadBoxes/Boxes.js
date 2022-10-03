import React,{useState} from 'react'
import { Box } from '@mui/system'
import { LinearProgress } from '@mui/material';
LinearProgress
const Boxes = ({color="gray",title}) => {
    const [count,setCount]=useState(0);
  return (
    <Box sx={{background:color,width:"20rem",height:"10rem"}}>
<h2 style={{color:"white"}}>
    {title}
    </h2>
<br/>
<p style={{fontSize:"30px",color:"white"}}>
    {count}
    </p>
    Progress bars

   </Box>
  )
}

export default Boxes
