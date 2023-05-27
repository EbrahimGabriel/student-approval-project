//<div> Icons made by <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>


export default function Home() {

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
            
            <button>
                <img src="https://cdn.onlinewebfonts.com/svg/img_373596.png" alt="Submit" width="30px" height="30px"g></img> 
                <h4>Submit Requirements</h4>
            </button>
        </div>
        <div id="RightSection">
            <div id="UpperRightSection">
                <div id = "ClearanceInfo">
                    <div id="imageside">
                        <img src="https://www.freeiconspng.com/thumbs/list-icon/ingredients-list-icon--icon-search-engine-10.png" alt="list"/>
                    </div>
                    <div id="clearancecontent">
                        <h2>Clearance Status</h2>
                        <h3>Application Name</h3>
                        <h4>Status</h4>
                    </div>
                </div>
                
                <div id = "NumberInfo">
                    <div id="imageside">
                        <img src="https://icon-library.com/images/number_of_items_294001.png" alt="list"/>
                    </div>

                    <div id="numbercontent">
                        <h3>No. of</h3>
                        <h3>Application</h3>
                        <h2>04</h2>
                    </div>
                </div>
            </div>

            <div id ="ClearanceHistoryDiv">           
                <h1>Clearance History</h1>
                <div id="HistoryContent">
                    <button id="Content#1">
                        <h2>Application #1</h2>
                        <h4>dd/mm/yyy</h4>
                        <h4>status</h4>
                    </button>
                    <button>
                        <h2>Application #2</h2>
                        <h4>dd/mm/yyy</h4>
                        <h4>status</h4>
                    </button>
                </div>
            </div>
        </div>
        </div>
        </>
    );
    
}
