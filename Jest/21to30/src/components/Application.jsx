import React from "react";

const Application = () => {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>Job Application form</h1>
                <h2>Data Scientist</h2>
                <p>All fields are mandatory</p>
                <span title="close">X</span>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAvatar_%25282009_film%2529&psig=AOvVaw2K8h5fk3uFKQkb5-DS-HRh&ust=1673186916600000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNDO1_DQtfwCFQAAAAAdAAAAABAD" alt="Avatar2"></img>
                <div data-testid="custom-element">Custom HTML element</div>
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Fullname" defaultValue="Sujit Kumar Verma"></input>
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