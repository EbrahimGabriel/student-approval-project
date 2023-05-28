import { Link } from "react-router-dom";

export default function SignUp() {
    return(
      <>
      <div className="flex-container">
        <img src='https://i.pinimg.com/originals/29/17/ba/2917ba685656ff6a2fd317ecb55e95aa.png' className='bg-img'></img>
        <div className="login-box">
          <p className="welcome">SIGN UP</p>
          <form id="sign-up">
            <input id="s-fname" placeholder="First Name" className="inputs"/>
            <input id="s-mname" placeholder="Middle Name" className="inputs" />
            <input id="s-lname" placeholder="Last Name" className="inputs"/>
            <input id="s-snum" placeholder="Student Number" className="inputs"/>
            <input id="s-email" placeholder="UP mail" className="inputs" />
            <input id="s-password" type="password" placeholder="Password" className="inputs" />
            <br />
            <Link to={"/home"}><button id='signupbtn' className="loginbutton">Create Account</button></Link>
          </form>
          <br /><br />
          <img src='https://i.pinimg.com/originals/bf/cc/2e/bfcc2e0f376602eeee6ab1365635f543.png' class='suimgside'></img>
        </div>
      </div>
      </>
    );
}