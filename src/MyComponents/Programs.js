import React from 'react'
export const Programs = () => {
    let form={
        position:"absolute",
        width:"100%",
        height:"100%",
        top:"60%"
    }
    return (
        <div>
            <form className="mx-2 mt-4 font-weight-bold form"  >
<h3 className="text-center" >Online Registration</h3><br/>  
<h5>Registration for category</h5>
<label for="under 17">Under 17</label>
<input id="under17" type="checkbox" className="mx-1 my-2"  name="under17"/>
<label for="under 19">Under 19</label>
<input id="under19" type="checkbox" className="mx-1 my-2"  name="under19"/>
<label for="under 23">Under 23</label>
<input id="under 23" type="checkbox" className="mx-1 my-2"  name="23"/>
<label for="under 25">Under 25</label>
<input id="under 25" type="checkbox" className="mx-1 my-2"  name="25"/>
<label for="open">open</label>
<input id="open" type="checkbox" className="mx-1 my-2"  name="open"/><br/>
<label for="name">player name</label>
<input id="name" type="text" className="form-control " name="player name"/>
<label for=" name">Father's Name</label>
<input type="text" className="form-control " name="father name"/>
<label for=" name">Mother's Name</label>
<input id="name" type="text" className="form-control " name="mother name"/>
<label for="DOB">Date of Birth</label>
<input id="dob" type="date" className="form-control" name="DOB"/>
<label className="mr-4" for="name">Sex</label>
<label className="mx-1 my-2" for="name">male</label>
<input id="male" className="mx-1 my-2 " type="checkbox" name="male"/>
<label  for="name">Female</label>
<input id="Female" className="mx-1 my-2 " type="checkbox" name="Female"/><br/>
<label for="num">Mobile Number</label>
<input id="num" type="num" className="form-control" name="mobile num"/>
<label for="email">Email-Id</label>
<input id="email" type="text" className="form-control" name="email"/>
<label for="Height"> Height</label>
<input  id="inches" type="text" className="mx-2 my-2 " id="b2"  name="height"/>inches<br/>
<label for="address">Residental Address</label>
<input id="address" type="text" className="form-control" id="b3"  name="address"/>
<label for="dis-name">District</label>
<input id="dis-name" type="text" className="form-control" name="District"/>
<label for="state">State</label>
<input id="state" type="text" className="form-control" name="state"/>
<label for="pin-code">Pin Code</label>
<input id="pin-code" type="text" className="form-control" name="pincode"/>
<label for="weight">Weight</label>
<input id="weight" className="mx-2 my-2" type="text" id="b4"   name="weight"/>kgs<br/>
<label className="mr-4" for="size">T-Shirt Size</label>
<label for="small">Small</label>
<input id="small" className="mx-1 my-2 " type="checkbox" name="small"/>
<label  for="medium">Medium</label>
<input id="Medium" className="mx-1 my-2 " type="checkbox" name="medium"/>
<label  for="large">Large</label>
<input id="large" className="mx-1 my-2 " type="checkbox" name="large"/>
<p  id="b5">About Game</p>
<label for="level">Level</label>
<label className="mr-4" for="c-level">Club level</label>
<input id="c-level" type="checkbox" className="mx-1 my-2" name="clevel"/>
<label for="s-level">School level</label>
<input id="s-level" type="checkbox" className="mx-1 my-2" name="slevel"/>
<label for="casual">Casual</label>
<input id="casual" type="checkbox" className="mx-1 my-2" name="casual"/>
<label for="locality">Locality</label>
<input id="locality" type="checkbox" className="mx-1 my-2" name="locality"/><br/>
<label className="mr-4" for="b-Arm">Bowling Arm</label>
<label for="l-Arm">Left Arm</label>
<input id="l-Arm" type="checkbox" className="mx-1 my-2" name="leftarm"/>
<label for="r-Arm">Right Arm</label>
<input id="r-Arm" type="checkbox" className="mx-1 my-2" name="rightarm"/>
<label for="Both">Both</label>
<input id="Both" type="checkbox" className="mx-1 my-2" name="Both"/><br/>
<label className="mr-4" for="W-K">Wicket Keeper</label>
<label for="y">Yes</label>
<input id="y" type="checkbox" className="mx-1 my-2" name="Yes"/>
<label for="N">No</label>
<input id="N" type="checkbox" className="mx-1 my-2" name="No"/><br/>
<label for="CAN">Cricket Academy Name</label>
<input id="CAN" type="text" className="form-control" name="Cricket Academy"/>
<label className="mr-4" for="Bat">Batting</label>
<label for="l-f">Left Hand</label>
<input id="l-f" type="checkbox" className="mx-1 my-2" name="left Hand"/>
<label for="r-f"> Right Hand</label>
<input id="r-f" type="checkbox" className="mx-1 my-2" name="right Hand"/><br/>
<label className="mr-4" for="f-p">First Prefernce </label>
<label for="bat">Batting</label>
<input id="bat" type="checkbox" className=" mx-1 my-2"  name="bat"/>
<label for="bowl">Bowling</label>
<input id="bowl" type="checkbox" className="mx-1 my-2" name="Bowling"/><br/>
<label className="mr-4" for="TCE">Team Captain Experiency</label>
<label  for="y">Yes</label>
<input id="y" type="checkbox" className="mx-1 my-2" name="Yes"/>
<label for="N">No</label>
<input id="N" type="checkbox" className="mx-1 my-2" name="No"/><br/>
<input type="submit" value="register" className="btn btn-danger btn-right mx-2 my-4" name=""/>
<p className="text-secandary text-center mx-1 ">You are going to register for Cricket Club in The  Masters Batters </p>
</form>
        </div>
    )
}
