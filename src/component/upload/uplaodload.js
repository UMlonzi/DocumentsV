import { Box, Button } from '@mui/material'
import { borderBottom } from '@mui/system';
import React from 'react';
import Welocome from "../../images/welcomeIMG.svg";
import Boxes from '../onLoadBoxes/Boxes';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import "./uploadload.css";
import DescriptionIcon from '@mui/icons-material/Description';

// ========================================upload files table====================
function displayUplaodTable(){
    console.log("hello");
    return(
        <div className='tableDesign'>
<table className='table'>
    <tr>
        <th></th>
        <th>Document Name</th>
        <th>Created On</th>
        <th>Action</th>
        <th>Status</th>
    </tr>
    <tr>
<td style={{width:"100px",textAlign:"center"}}><DescriptionIcon sx={{fontSize:"4.0rem"}}/></td>
<td>Matric certificate</td>
<td>7 Sep 2022</td>
<td style={{paddingLeft:'3.3%'}}>
<h3 
style={{width:"8rem",height:"4rem",lineHeight:"60px",fontSize:"30px",borderRadius:"100%",
color:"rgb(145,246,245,1)",backgroundColor:"skyblue",textAlign:"center"}}>SN</h3></td>
<td><h4 className='tableHeader4'> complete</h4></td>
    </tr>

</table>
    </div>
  )
};
const welcomeCard=()=>{
    return(
        <>
        <Box style={{height:"100%",width:"50%",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"space-around"}}>       
<Box sx={{display:"flex" ,borderBottom:"2px solid rgba(128,128,128,0.4)",padding:"7px",minWidth:"300px",maxWidth:"800px"
,height:"200px",backgroundColor:"#ECF5FF",alignItems:"center",justifyContent:"space-between",flexDirection:"row"}}>
    <Box 
    sx={{display:"flex",flexDirection:"column",textAlign:"start",lineHeight:"30x"}}>
<Box component="h2">Welcome Back, </Box>
<p style={{fontSize:"20px"}}>get the power to take your BlockDoc to the next level</p>
    </Box>
<img src={Welocome} alt="welcom" style={{width:"200px",height:"200px",alignSelf:"end",}}/>
</Box>
    <Box sx={{position:"relative",display:"flex" ,border:"4px dotted rgba(128,128,128,0.4)"
    ,height:"200px",minWidth:"700px",maxWidth:"800px",backgroundColor:"#ECF5FF",
    alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <h2 style={{position:"absolute",top:"-3em" ,left:"0"}}>Upload file</h2>
        <FileOpenIcon sx={{color:"rgba(128,128,128,0.4)",fontSize:"4rem"}}/>
    <Box component="h2"> uplaod your files here</Box>
    <Button size='large' variant="contained" component="label" sx={{width:"150px",height:"60px",color:"white"}}> 
    Upload File
    <input hidden accept="image/*" multiple type="file" />
    </Button>
    </Box>
        </Box>
        </>
    )
};
const uplaodToBlockchainBoxes=()=>{

  return(
    <Box sx={{marginBottom:"10rem",height:"100%",width:"50%",alignItems:"flex-start",justifyContent:"space-around",display:"flex",flexDirection:"column"}}>
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
