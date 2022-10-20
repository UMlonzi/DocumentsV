import React,{useState} from 'react'
import { Box } from '@mui/system'
const Boxes = ({color="gray",title}) => {
    const [count,setCount]=useState(0);
  return (
    <div className='boxStyle' style={{boxShadow:"4px 3px 5px lightgray",background:color,width:"20rem",height:"10rem",lineHeight:"4.1rem"}}>
<h2 style={{color:"white"}}>
    {title}
    </h2>
<p style={{fontSize:"30px",color:"white"}}>
    {count}
    </p>
 <div style={{marginLeft:"10px",height:"30px",backgroundColor:"lightgray",width:"90%"}}></div>
   </div>
  )
};
export default Boxes;