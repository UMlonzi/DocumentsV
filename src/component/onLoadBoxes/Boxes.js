import React,{useState} from 'react'
import { Box } from '@mui/system'

const Boxes = ({color="gray",title}) => {
    const [count,setCount]=useState(0);
  return (
    <Box sx={{background:color,width:"20rem",height:"10rem",lineHeight:"20px"}}>
<h2 style={{color:"white"}}>
    {title}
    </h2>
<p style={{fontSize:"30px",color:"white"}}>
    {count}
    </p>
 <Box sx={{marginLeft:"10px",height:"30px",backgroundColor:"lightgray",width:"90%"}}></Box>
   </Box>
  )
};
export default Boxes