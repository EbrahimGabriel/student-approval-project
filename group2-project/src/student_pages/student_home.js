import { useNavigate} from "react-router-dom";

import { useEffect, useState } from "react";

export default function StudentHome() {

    //this will be used for onclick of buttons!
    const navigate = useNavigate();

    const navigateToAppDetails = () => {
        navigate('/student/application-details');
      };
    useEffect(() => {
        getApplications()
    }, []);
    
    //this is for application history
    const [applications, setApplications] = useState([]);

    //this will get the applications made by the user!!
    function getApplications(){
        fetch("http://localhost:3001/get-applications")
        .then(response => response.json())
        .then(body => {
            setApplications(body)
        })
    }

    return (
      <>
      <header id ="headerdiv">
          <div id="logo">
              <img src="https://static.cdnlogo.com/logos/m/39/minexcoin.svg" alt="logo"/>
              <h1>Lorem Ipsum</h1>
          </div>
          <button id ="logoutbutton"> Log Out</button>
      </header>
      <div id= "MainContainer"> 
      <div id ="LeftSection">
          <card id ="ProfileCard">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="User Profile"/>
              <h2>Name of Student</h2>
              <p>Student</p>
          </card>
          
      </div>
      <div id="RightSection">
          <div id="UpperRightSection">
              <div id = "ClearanceInfo">
                  <div id="imageside">
                      <img src="https://www.freeiconspng.com/thumbs/list-icon/ingredients-list-icon--icon-search-engine-10.png" alt="list"/>
                  </div>
                  <div id="clearancecontent">
                      <h2>Clearance Status</h2>
                      <h3>Status</h3>
                      <h4>Date</h4>
                  </div>
              </div>
              
              <div id = "NumberInfo">
                  <div id="imageside">
                      <img src="https://icon-library.com/images/number_of_items_294001.png" alt="list"/>
                  </div>

                  <div id="numbercontent">
                      <h3>No. of</h3>
                      <h3>Application</h3>
                      <h2>{applications.length}</h2>
                  </div>
              </div>
              <div id="ButtonSection">
                <button id="Create" onClick={navigateToAppDetails}>
                    <h3>Create Clearance</h3>
                </button>
                <button id="Delete">
                    <h3>Cancel Clearance</h3>
                </button>
                <button id="Request">
                    <h3>Submit Requirements</h3>
                </button>
              </div>
          </div>
          <div id ="UnderClearance">
            <button>View</button>
            <button>Download</button>
          </div>

          <div id ="ClearanceHistoryDiv">           
              <h1>Clearance History</h1>
              <div id="HistoryContent">
                  <card id="Content#1">
                      <h2>Application #1</h2>
                      <h4>dd/mm/yyy</h4>
                      <h4>status</h4>
                  </card>
                  <card>
                      <h2>Application #2</h2>
                      <h4>dd/mm/yyy</h4>
                      <h4>status</h4>
                  </card>
                  {applications.map((application, i) =>
                    <card id ="ApplicationsCard">
                        <h2>{application.status}</h2>
                        <h4>{application.step}</h4>
                        <h4>{application.studentsubmission.date}</h4>
                    </card>
                )}
              </div>
          </div>
      </div>
      </div>
      </>
  );
  
}
