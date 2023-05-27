import { Outlet, Link } from "react-router-dom";

export default function StudentRoot() {
    return(
      <>
      <p>hello i am the student page (nav thingy) please design me</p>
      <Outlet />
      </>
    );
}