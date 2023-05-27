import { Outlet, Link } from "react-router-dom";

export default function AdminRoot() {
    return(
      <>
      <p>hello i am the admin page (nav thingy) please design me</p>
      <Outlet />
      </>
    );
}