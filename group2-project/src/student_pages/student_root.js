import { Outlet, Link } from "react-router-dom";

export default function StudentRoot() {
    return(
      <>
      <nav>
        <ul id="NavBarUL">
            <li><Link to={"/home"}>Home</Link></li>
        </ul>
      </nav>
      <Outlet />
      </>
    );
}