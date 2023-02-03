import React, { useState } from "react"
import './FormTask.css'
import { toast } from "react-toastify";

export default function App() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirm_password: "",
        isNewsLetter: true,
        range: "",
        day: "",
        month: "",
        year: "",
    })
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */

    // function handleChange(event) {
    //     const {name, value} = event.target;
    //     setFormData((prevFormData) => {
    //         return {
    //             ...prevFormData,
    //             [name]: value
    //         }
    //     })
    // }

    function handleChange (event) {
        const { name, value, type, checked  } = event.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    }
    
    function handleSubmit(event) {
        event.preventDefault()

        if(formData.password === formData.confirm_password){
            console.log("Successfully signed up")
        } else {
            console.log("passwords do not match")
        }
        toast.success("Sign up successfull")


        if(formData.isNewsLetter){
            console.log("Thanks for signing up for our newsletter!")
        }

        console.log(formData)
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    name="password"
                    value={formData.password}
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    name="confirm_password"
                    value={formData.confirm_password}
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                />
              

                {/* Added By Me */}
                <input 
                id="typeinp" 
                type="range" 
                min="0" max="5" 
                name="range"
                value={formData.range} 
                onChange={handleChange}
                step="1"
                />


                <select
                    id="countrty"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                >
                    <option value="">-- Choose --</option>
                    <option value="nigeria">Nigeria</option>
                    <option value="gambia">Gambia</option>
                    <option value="kenya">Kenya</option>
                    <option value="south africa">South Africa</option>
                    <option value="nairobi">Nairobi</option>
                    <option value="egypt">Egypt</option>
                </select>

                <select 
                   id="day"
                   name="day"
                   value={formData.day}
                   onChange={handleChange}
                > 
                  <option value="">-- Choose --</option>
                    <option value="01">1</option>
                    <option value="02">2</option>
                    <option value="03">3</option>
                    <option value="04">4</option>
                    <option value="05">5</option>
                    <option value="06">6</option>
                </select>

                <select 
                   id="month"
                   name="month"
                   value={formData.month}
                   onChange={handleChange}
                > 
                  <option value="">-- Choose --</option>
                    <option value="january">January</option>
                    <option value="febuaray">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                </select>


                <select 
                   id="year"
                   name="year"
                   value={formData.year}
                   onChange={handleChange}
                > 
                  <option value="">-- Choose --</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2017">2017</option>
                </select>


                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="isNewsLetter"
                        checked={formData.isNewsLetter}
                        onChange={handleChange}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
