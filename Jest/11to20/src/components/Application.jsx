import React from "react";

const Application = () => {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>Job Application form</h1>
                <h2>Data Scientist</h2>
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name"></input>
                    </div>
                    <div>
                        <label htmlFor="bio">Bio</label>
                        <textarea name="bio" id="bio"></textarea>
                    </div>
                    <div>
                        <label htmlFor="job-location">Job Location</label>
                        <select id="job-location">
                            <option value="">Select a Country</option>
                            <option value="US">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="CA">Canada</option>
                            <option value="IN">India</option>
                            <option value="AU">Australia</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="terms">I agree to the terms and Conditions</label>
                        <input type="checkbox" id="terms" name="terms"></input>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </>
    );
}

export default Application;