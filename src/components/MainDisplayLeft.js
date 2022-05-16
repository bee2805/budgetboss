import React from "react";

const MainDisplayLeft = () =>{
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
                        <div className="percentage"></div>
                        <h4>Household Member One</h4>
                        <p>Tax Bracket:</p>
            
                        <p className="light">Amount deducted:</p>
                        <div className="deductedAmount">
                            <div class="randBox">R</div>
                            <div className="randAmount">Amount to be deducted</div>
                        </div>
                        <p className="light" >Amount after deduction:</p>
                        <div className="deductedAmount">
                            <div class="randBox">R</div>
                            <div className="randAmount">Amount to be deducted</div>
                        </div>
                    </div> {/* Profile 1 */}

                    {/* Profile 2 */}
                    <div className="profileTwo">
                        <div className="percentage"></div>
                        <h4>Household Member One</h4>
                        <p>Tax Bracket:</p>
            
                        <p className="light">Amount deducted:</p>
                        <div className="deductedAmount">
                            <div class="randBox">R</div>
                            <div className="randAmount">Amount to be deducted</div>
                        </div>
                        <p className="light" >Amount after deduction:</p>
                        <div className="deductedAmount">
                            <div class="randBox">R</div>
                            <div className="randAmount">Amount to be deducted</div>
                        </div>
                    </div> {/* Profile 2 */}

                </div> {/* income after */}

                <div className="extraElement"></div>
            </div> {/* left block */}

            {/* Right Side */}
            <div className="rightBlock">
                <div className="monthlyExpenses">

                    <h3>Your Monthly Expenses</h3>

                    {/* Expenses */}
                    <div className="expenseBlock">
                        <p>Rent & Levies</p>
                        <input id="expenseAmount" type="number"></input>
                        <div class="randBox">R</div>
                    </div>

                    <div className="expenseBlock">
                        <p>Water & Electricity</p>
                        <input id="expenseAmount" type="number"></input>
                        <div class="randBox">R</div>
                    </div>

                    <div className="expenseBlock">
                        <p>Groceries</p>
                        <input id="expenseAmount" type="number"></input>
                        <div class="randBox">R</div>
                    </div>

                    <div className="expenseBlock">
                        <p>Petrol</p>
                        <input id="expenseAmount" type="number"></input>
                        <div class="randBox">R</div>
                    </div>

                    <div className="expenseBlock">
                        <p>Internet</p>
                        <input id="expenseAmount" type="number"></input>
                        <div class="randBox">R</div>
                    </div>

                    <div className="expenseBlock">
                        <p>Garden Service</p>
                        <input id="expenseAmount" type="number"></input>
                        <div class="randBox">R</div>
                    </div>

                    <div className="expenseBlock">
                        <p>Cleaning Service</p>
                        <input id="expenseAmount" type="number"></input>
                        <div class="randBox">R</div>
                    </div>

                    <button>LETS SEE THE DAMAGE</button>
                    <div className="totalExpenses">
                        <h3>Total Expenses: R</h3>
                    </div>{/* end of expenses */}

                </div> {/* Monthly Expenses */}

                <div className="finalTotalAndSavings"></div>
            </div> {/* right block */}

        </div> 
    );
}

export default MainDisplayLeft;