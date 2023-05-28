import { Outlet, Link } from "react-router-dom";

export default function StudentRoot() {
    return(
      <>
      <nav>
        <ul id="NavBarUL">
            <li><Link to={"/student"}>Home</Link></li>
            <li><Link to={"/student/application-details"}>Create Application</Link></li>
        </ul>
      </nav>
      <Outlet />
      </>
    );
}