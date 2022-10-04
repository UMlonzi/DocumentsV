import React from 'react';
import './verihome.css'

function VeriHome() {
  return (
    <div className='veriTbl'>
      <table>
       <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Address</th>
        <th>Status</th>
        <th>View</th>
    </tr>
    <tr>
        <td>vhonani</td>
        <td>i want to verify</td>
        <td>jfkbgkj...</td>
        <td>pending</td>
        <td><button className='view-btn'>View</button></td>
    </tr>
</table>
    </div>
  )
}

export default VeriHome