
import React, { useState, useEffect } from "react";
import './profile.css';




function Profile() {




  return (
    <div className='main-container'>



    <div className='inner-container'>

        <div className='form'>

                <div className="input1">
                    <h4 className="">Name</h4>
                    <input
                    placeholder="Name"
                    name="name"
                    type="name"
                    className="input-fields-1"
                    />
                </div>
                

                <br></br>

                <br></br>

                <div className="input2">
                    <h4>Email</h4>
                    <input
                    placeholder="Email"
                    name="email"
                    type="email"
                    className="input-fields-2"
                    />
                </div>

                <br></br>

                <br></br>


                <div  className="input3" >
                    <h4>Surname</h4>
                    <input
                    placeholder="Surname"
                    name="surname"
                    type="surname"
                    className="input-fields-3"
                    />
                </div>

                <br></br>

                <br></br>

                <div className="input4">
                    <h4>Phone number</h4>
                    <input
                    placeholder="Phone number"
                    name="phone number"
                    type="phone"
                    className="input-fields-4"
                    />
                </div>

                <br></br>

                <br></br>

                <div className="input5">
                    <h4>Profession</h4>
                    <input
                    placeholder="Profession"
                    name="profession"
                    type="profession"
                    className="input-fields-5"
                    />
                </div>


                <div className="input6">
                    <h4>Image</h4>

                    <label className="uploadbtn">
                    <h5>Upload</h5>
                    <input
                    type="file"
                    id="inputTag"
                    // className="input-fields-6"
                    />
                    </label>
                </div>



                <button>Done</button>
        </div>
    </div>


</div>
  );
}

export default Profile;