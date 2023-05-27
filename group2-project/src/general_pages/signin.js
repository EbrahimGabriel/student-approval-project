import { Link } from "react-router-dom";

export default function SignIn() {
    return(
      <>
      <div className="flex-container">
        <img src='https://i.pinimg.com/originals/29/17/ba/2917ba685656ff6a2fd317ecb55e95aa.png' className='bg-img'></img>
        <div className="login-box">
          <p className="welcome">WELCOME</p>
          <form id="log-in">
            <p className="label">EMAIL</p>
            <input id="l-email" />
            <p className="label">PASSWORD</p>
            <input id="l-password" type="password" />
            <br />
            <button className="loginbutton">LOGIN</button>
          </form>
          <br /><br />
          <p className="label">Don't have an account? <Link to={"/signup"}><a href="#" className="linksignup">Sign Up</a></Link></p>
          <img src='https://i.pinimg.com/originals/bf/cc/2e/bfcc2e0f376602eeee6ab1365635f543.png' class='imgside'></img>
        </div>
      </div>
      </>
    );
}