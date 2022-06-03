// import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState, useEffect } from "react";
import NumberFormat from "react-number-format";


const MainDisplayLeft = () =>{

    const [preState, setPreState] = useState("");
    const [currentState, setCurrentState] = useState("");
    const [input, setInput] = useState("0");
    const [operator, setOperator] = useState(null);
    const [total, setTotal] = useState(false);

    // CALCULATOR FUNCTIONS
    // input
    const inputNo = (e) => {
        if(currentState.includes(".") && e.target.innerText === ".") return;

        if(total){
            setPreState("")
        }

        currentState 
            ? setCurrentState((pre) => pre + e.target.innerText)
            : setCurrentState(e.target.innerText);
        setTotal(false);
    };

    useEffect(() => {
        setInput(currentState);
    }, [currentState]);

    useEffect(() => {
        setInput("0")
    }, []);

    // operatpr
    const operatorType = (e) => {
        setTotal(false);
        setOperator(e.target.innerText);

        if(currentState === "") return;

        if(preState !== ""){
            equals()
        } else {
            setPreState(currentState)
            setCurrentState("")
        };

    }

    // equals
    const equals = (e) => {
        if (e?.target.innerText === "=") {
          setTotal(true);
        }
        let cal;
        switch (operator) {
          case "/":
            cal = String(parseFloat(preState) / parseFloat(currentState));
            break;
    
          case "+":
            cal = String(parseFloat(preState) + parseFloat(currentState));
            break;
          case "X":
            cal = String(parseFloat(preState) * parseFloat(currentState));
            break;
          case "-":
            cal = String(parseFloat(preState) - parseFloat(currentState));
            break;
          default:
            return;
        }
        setInput("");
        setPreState(cal);
        setCurrentState("");
    };



    // minusPlus
    const plusMinus = () => {
        if(currentState.charAt(0) === "-"){
            setCurrentState(currentState.substring(1));
        } else {
            setCurrentState("-" + currentState);
        }
    }

    // percent
    const percent = () => {
        preState ? setCurrentState(String(parseFloat(currentState) / 100 * preState))
        :setCurrentState(String(parseFloat(currentState) / 100));
    }

    // reset
    const reset = (e) => {
        setPreState("");
        setCurrentState("");
        setInput("0");
    }

    return(
        <div className="ContentBlock">

            {/* Left Side */}
            <div className="leftBlock">
                {/* net-income */}
                <div className="netIncome">
                    <h2>Total Net Income: R</h2>
                </div> {/* net-income */}

                {/* income after */}
                <div className="incomeAfterTax">
                    <h3>Income after Tax:</h3>

                    {/* Profile 1 */}
                    <div className="profileOne">
                        <div className="percentageOne"></div>
                        <h4>Household Member One</h4>
                        <p>Tax Bracket:</p>
            
                        <p className="light">Amount deducted:</p>
                        <div className="deductedAmount">
                            <div className="randBox">R</div>
                            <div className="randAmount">Amount to be deducted</div>
                        </div>
                        <p className="light" >Amount after deduction:</p>
                        <div className="deductedAmount">
                            <div className="randBox">R</div>
                            <div className="randAmount">Amount to be deducted</div>
                        </div>
                    </div> {/* Profile 1 */}

                    {/* Profile 2 */}
                    <div className="profileTwo">
                        <div className="percentageTwo"></div>
                        <h4>Household Member Two</h4>
                        <p>Tax Bracket:</p>
            
                        <p className="light">Amount deducted:</p>
                        <div className="deductedAmount">
                            <div className="randBox">R</div>
                            <div className="randAmount">Amount to be deducted</div>
                        </div>
                        <p className="light" >Amount after deduction:</p>
                        <div className="deductedAmount">
                            <div className="randBox">R</div>
                            <div className="randAmount">Amount to be deducted</div>
                        </div>
                    </div> {/* Profile 2 */}

                </div> {/* income after */}

                <div className="monthlyExpenses">

                    <h3>Your Monthly Expenses</h3>

                    {/* Expenses */}
                    <div className="expenseBlock">
                        <p>Rent & Levies</p>
                        <input id="expenseAmount" type="number"></input>
                        <div className="randBox">R</div>
                    </div>

                    <div className="expenseBlock">
                        <p>Water & Electricity</p>
                        <input id="expenseAmount" type="number"></input>
                        <div className="randBox">R</div>
                    </div>

                    <div className="expenseBlock">
                        <p>Groceries</p>
                        <input id="expenseAmount" type="number"></input>
                        <div className="randBox">R</div>
                    </div>

                    <div className="expenseBlock">
                        <p>Petrol</p>
                        <input id="expenseAmount" type="number"></input>
                        <div className="randBox">R</div>
                    </div>

                    <div className="expenseBlock">
                        <p>Internet</p>
                        <input id="expenseAmount" type="number"></input>
                        <div className="randBox">R</div>
                    </div>

                    <div className="expenseBlock">
                        <p>Garden Service</p>
                        <input id="expenseAmount" type="number"></input>
                        <div className="randBox">R</div>
                    </div>

                    <div className="expenseBlock">
                        <p>Cleaning Service</p>
                        <input id="expenseAmount" type="number"></input>
                        <div className="randBox">R</div>
                    </div>

                    <button>LETS SEE THE DAMAGE</button>
                    <div className="totalExpenses">
                        <h3>Total Expenses: R</h3>
                    </div>{/* end of expenses */}

                </div> {/* Monthly Expenses */}

            </div> {/* left block */}

            {/* Right Side */}
            <div className="rightBlock">

                {/* Monthly Expenses */}

                <div className="totalAndSavings">
                    <h3>What's the damage after expenses?</h3>
                    <div className="damage">
                        <p>Total After Expesnses:</p>
                        <div className="randBox">R</div>
                        <div className="randAmount"></div>
                    </div>
                    <hr/>
                    <h3>How much do you want to save?</h3>
                    <select className="savingsDropdown">
                        <option>10%</option>
                        <option>20%</option>
                        <option>30%</option>
                        <option>40%</option>
                        <option>50%</option>
                    </select>
                    <hr/>
                    <h3>Spoil Yourself!</h3>
                    <p>What you have left:</p>
                        <div className="randBox">R</div>
                        <div className="randAmount"></div>
                </div>
                
                <div className="calculatorWrapper">
                    <div className="screen">
                        {input !== "" || input === "0" ? (
                            <NumberFormat
                            value={input}
                            displayType={"text"}
                            thousandSeparator={true}
                            />
                        ) : (
                            <NumberFormat
                            value={preState}
                            displayType={"text"}
                            thousandSeparator={true}
                            />
                        )}   
                    </div>
                    <div className="inputBtns">
                        <div className="inputBtn" onClick={inputNo}>7</div>
                        <div className="inputBtn" onClick={inputNo}>8</div>
                        <div className="inputBtn" onClick={inputNo}>9</div>
                        <div className="inputBtn" onClick={inputNo}>4</div>
                        <div className="inputBtn" onClick={inputNo}>5</div>
                        <div className="inputBtn" onClick={inputNo}>6</div>
                        <div className="inputBtn" onClick={inputNo}>1</div>
                        <div className="inputBtn" onClick={inputNo}>2</div>
                        <div className="inputBtn" onClick={inputNo}>3</div>
                        <div className="inputBtn zero" onClick={inputNo}>0</div>
                        <div className="inputBtn" onClick={inputNo}>.</div>
                    </div>
                    <div className="operatorBtns">
                        <div className="topBtn" onClick={reset}>AC</div>
                        <div className="topBtn" onClick={percent}>%</div>
                        <div className="topBtn" onClick={plusMinus}>+/-</div>
                        <div className="operatorBtn" onClick={operatorType}>/</div>
                        <div className="operatorBtn" onClick={operatorType}>X</div>
                        <div className="operatorBtn" onClick={operatorType}>+</div>
                        <div className="operatorBtn" onClick={operatorType}>-</div>
                        <div className="equalsBtn" onClick={equals}>=</div>
                    </div>
                </div>
            </div> {/* right block */}

        </div> 
    );
}

export default MainDisplayLeft;