import React,{useState} from 'react'
import { Box } from '@mui/system'

const Boxes = ({color="gray",title}) => {
    const [count,setCount]=useState(0);
  return (
    <Box sx={{background:color,width:"20rem",height:"10rem"}}>
{title}
<br/>
{count}
   </Box>
  )
}

export default Boxes
