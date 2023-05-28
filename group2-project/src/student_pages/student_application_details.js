import {useState} from 'react';

export default function StudentApplicationDetails() {
    // for opening the option to print PDF
    const [cleared, setCleared] = useState(false)

    const prevReload = event => {
        event.preventDefault();

        // document.getElementById("acadAdviser").value="";
        document.getElementById("gitHubLink").value="";
    }

    //This function is created to stop reloading when submitting!
    //THIS PART IS COPIED FROM THE INTERNET TO STOP THE RELOADING (https://bobbyhadz.com/blog/react-prevent-page-refresh-on-form-submit#:~:text=Use%20the%20preventDefault()%20method,is%20to%20refresh%20the%20page.)
    const stopReloadSubmit = event => {
        event.preventDefault(); // prevent page refresh
      };

    // Get the Values from the Fields and Check if empty
    function FieldGetterChecker() {
        // Status set to Open and Step set to 1 since we're just opening a new Application for clearance
        var Status = "Open" 
        var Step = 1
        
        // get the Current Date
        const currentDate = new Date();

        // var acadAdviser = document.getElementById("acadAdviser").value;
        var gitHubLink = document.getElementById("gitHubLink").value;

        // if (acadAdviser === "" ) {
        //     alert ("Please Enter Your Academic Adviser");
        // }
        if (gitHubLink === "") {
            alert ("Please Enter Your Github Link");
        }else{
        var remarks = {remark: "Library Clearance not presented", date: currentDate, stepgiven: 1}
        var studentsubmission = {link: gitHubLink, date: currentDate, step: Step};
        // call the addApplication to add the data to database
        addApplication(Status, Step, gitHubLink, remarks, studentsubmission);
        }


    }

    // For pushing data to the database
    function addApplication(Status, Step, remarks, Studentsubmission) {
        fetch("http://localhost:3001/add-application", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // not yet complete (remakrs not yet implemented)
            body: JSON.stringify({status: Status, step: Step, remarks: remarks, studentsubmission: Studentsubmission})
        })
            .then(console.log);
                alert("Successfully Requested");
    }

    return (
        <>
        <header id ="headerdiv">
            <div id="logo">
                <img src="https://static.cdnlogo.com/logos/m/39/minexcoin.svg" alt="logo"/>
                <h1>Lorem Ipsum</h1>
            </div>
            <div id="headerbuttons">
            <div id="notifbutton">
                <button>
                    <img src="https://flaticons.net/icon.php?slug_category=miscellaneous&slug_icon=bell" alt="logo"/>
                </button>
            </div>            
                <button id ="logoutbutton"> Log Out</button>
            <div id="extraspace">
            </div>
            </div>

        </header>
        <div id='ApplicationMainContainer'>
            <div id="ApplicationDetails">
                <form onSubmit={stopReloadSubmit} id="AppDetailsForm">
                    <h1> Application Details </h1>
                    <p> Request for a clearance </p>
                    {cleared && <button> Print PDF </button>}
                    {/* <label for="acadAdviser"> Academic Adviser </label> */}
                    {/* <input type='text' id="acadAdviser" required/> */}
                    <br/>
                    <label for="gitHubLink"> GitHub Link </label>
                    <input type='text' id="gitHubLink" required/>
                    <br/>
                    <button onClick={() => FieldGetterChecker()}> Request </button>
                </form>
            </div>

        </div>
        </>
    );
}