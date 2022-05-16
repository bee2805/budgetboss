import React from "react";
import bootstrap from "bootstrap";

const SideBar = () => {
    return(
        <div className="SideBar">
            <div className="Logo"></div>
            <hr/>

            <h3>Add Household Members:</h3>
            <p>What's your Name?</p>
            <input type="text"/>
            <p>What's your monthly income?</p>
            <input type="text"/> <br/>
            <button>+ ADD HOUSEHOLD MEMBER</button>
            <hr/>

            <div className="householdMembers">
                <h3>Household Members:</h3>
                
                <div className="memberOne">
                    <h4>Member One</h4>
                    <p>salary indicated here</p>
                </div>

                <div className="memberTwo">
                    <h4>Member Two</h4>
                    <p>salary indicated here</p>
                </div>
            
                <button>LET'S BUDGET !</button>
            </div>
        </div>
    );
}

export default SideBar;