import React, { useState } from "react";
import bootstrap from "bootstrap";

const SideBar = () => {

    const [inputs, setInputs] = useState({});

    // get name value
    const nameVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, name: value});
    }

    // get salary value
    const salaryVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, salary: value});
    }

    // Household members
    const submit = () => {
        console.log(inputs);
    }

    return(
        <div className="SideBar">
            <div className="Logo"></div>
            <hr/>

            <h3>Add Household Members:</h3>
            <p>What's your Name?</p>
            <input type="text" name="name" onChange={nameVal}/>
            <p>What's your monthly income?</p>
            <input type="number" name="income" onChange={salaryVal}/> <br/>
            <button onClick={submit}>+ ADD HOUSEHOLD MEMBER</button>

            <div className="householdMembers">
                <hr/>
                <h3>Household Members:</h3>
                
                <div className="memberOne">
                    <h4>MemberOne</h4>
                    <p><strong>R </strong>7000</p>
                </div>

                <div className="memberTwo">
                    <h4>Member One</h4>
                    <p>salary indicated here</p>
                </div>
            
                <button>LET'S BUDGET !</button>
            </div>
        </div>
    );
}

export default SideBar;