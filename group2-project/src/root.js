import StudentRoot from "./student_pages/student_root";
import ApproverRoot from "./approver_pages/approver_root";

let user = "student"; //SAMPLE ONLY, U GET THIS INFO FROM SIGN IN SCREEN

export default function Root() {
    if (user == "student") {
        return(
            <>
            <p>hello i am the root of all roots (nav thingy) i change depending on whatever user type has logged in (only student and approver)</p>
            <StudentRoot />
            </>
        );
    }
    else {
        return(
            <>
            <p>hello i am the root of all roots (nav thingy) i change depending on whatever user type has logged in (only student and approver)</p>
            <ApproverRoot />
            </>
        )
    }
}