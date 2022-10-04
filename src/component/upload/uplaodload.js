import { Box, Button } from '@mui/material'
import { borderBottom } from '@mui/system';
import React from 'react';
import Welocome from "../../images/welcomeIMG.svg";
import Boxes from '../onLoadBoxes/Boxes';
// ========================================upload files table====================
function displayUplaodTable(){
    console.log("hello");
    return(
        <Box sx={{width:"100vw",height:"50vh",backgroundColor:"#F5F5F5"}}>

    </Box>
  )
};
const welcomeCard=()=>{
    return(
        <Box style={{height:"100%",width:"50%",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"space-around"}}>       
<Box sx={{display:"flex" ,borderBottom:"2px solid rgba(128,128,128,0.4)",padding:"7px",minWidth:"37em",maxWidth:"800px"
,height:"20vh",backgroundColor:"#ECF5FF",alignItems:"center",justifyContent:"space-between",flexDirection:"row"}}>
    <Box 
    sx={{display:"flex",flexDirection:"column",textAlign:"start",lineHeight:"30x"}}>
<Box component="h2">Welcome Back, </Box>
<p style={{fontSize:"20px"}}>get the power to take your BlockDoc to the next level</p>
    </Box>
<img src={Welocome} alt="welcom" style={{width:"200px",height:"200px",alignSelf:"end",}}/>
</Box>
    <Box sx={{display:"flex" ,border:"4px dotted rgba(128,128,128,0.4)"
    ,height:"20vh",minWidth:"40em",maxWidth:"800px",backgroundColor:"#ECF5FF",
    alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
    <Box component="h2"> uplaod your files here</Box>
    <Button size='large' variant="contained" component="label" sx={{width:"150px",height:"60px",color:"white"}}> 
    Upload File
    <input hidden accept="image/*" multiple type="file" />
    </Button>
    </Box>
        </Box>
    )
};
const uplaodToBlockchainBoxes=()=>{
  return(
    <Box sx={{height:"100%",width:"50%",alignItems:"center",justifyContent:"space-around",display:"flex",flexDirection:"column"}}>
        <Boxes color={"#02781E"} title={"Verified"}/>
        <Boxes color={"#9E1215"} title={"Rejected"}/>
        <Boxes color={"#3F3D3F"} title={"Pending"}/>
    </Box>
    )
    }
    

// ==========================MUI file upload fun====================================
const Tablecomponent=()=>{
    
    return(
        <>
    <div style={{width:"100vw",height:"70vh",display:"flex"}}>

{welcomeCard()}
 
{uplaodToBlockchainBoxes()}
    </div>
    {displayUplaodTable()}
    </>
  )
}
export default Tablecomponent;
