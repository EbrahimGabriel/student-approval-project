import StudentHome from "../student_pages/student_home";
import ApproverHome from "../approver_pages/approver_home";
let user = "student"; //SAMPLE ONLY, U GET THIS INFO FROM SIGN IN SCREEN

export default function Home() {
    if (user == "student") {
        return(
            <>
            <p>hello i am the home of all homes  i change depending on whatever user type has logged in (only student and approver)</p>
            <StudentHome />
            </>
        );
    }
    else {
        return(
            <>
            <p>hello i am the home of all homes (nav thingy) i change depending on whatever user type has logged in (only student and approver)</p>
            <ApproverHome />
            </>
        )
    }
}