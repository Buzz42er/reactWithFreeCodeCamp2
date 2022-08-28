import React, { useState } from "react";

const PassInputValue = () => {
  ///////////////////////////////first phase
  // const [firstName, setFirstName] = useState("")
  // const [lastName, setLastName] = useState("")
  // /**
  //  * Challenge: Track the applicant's last name as well
  //  */

  // function handleFirstNameChange(event) {
  //     setFirstName(event.target.value)

  // }

  // function handleLastNameChange(event) {
  //     setLastName(event.target.value)
  // }

  // console.log(firstName + ", " + lastName)

  // return (
  //     <form>
  //         <input
  //             type="text"
  //             placeholder="First Name"
  //             onChange={handleFirstNameChange}
  //         />
  //         <input
  //             type="text"
  //             placeholder="Last Name"
  //             onChange={handleLastNameChange}
  //         />
  //     </form>
  // )

  ////////////////////////second phase
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    likeWhatYouSee: false,
    employment: "",
    favColor: "",
  });

  function handleChange(event) {
    setInputData((prevData) => {
      const { name, value, checked, type } = event.target;
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputData);
    //submitToApi() ---> function to submit to API
  };

  return (
    <div className="MemeMain">
      <form className="formPassInput" onSubmit={handleSubmit}>
        <div className="firstPartOfAForm">
          <input
            className="inputForm"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName" //to connect to function handleChange
            value={inputData.firstName} //to have only one state
          />
          <input
            className="inputForm"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={inputData.lastName}
          />
          <input
            className="inputForm"
            type="text"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={inputData.email}
          />
          {/* adding textarea */}
          <textarea
            name="comment"
            className="inputForm"
            cols="30"
            rows="1"
            placeholder="Comment"
            onChange={handleChange}
            value={inputData.comment}
          />
        </div>

        <div className="secondPartOfTheForm">
          <section className="checkbox">
            <input
              className="inputForm"
              type="checkbox"
              name="likeWhatYouSee"
              id="like"
              onChange={handleChange}
              value={inputData.likeWhatYouSee}
            />
            <label htmlFor="like">Like what you see?</label>
          </section>
          <fieldset className="inputForm">
            <legend>Current employment status</legend>

            <input
              type="radio"
              id="unemployed"
              value="unemployed"
              onChange={handleChange}
              name="employment"
              checked={inputData.employment === "unemployed"} //creates boolean from string by comparing value in object (if same = true if not the same = false)
            />
            <label htmlFor="unemployed">Unemployed</label>
            <br />

            <input
              type="radio"
              id="part-time"
              value="part-time"
              onChange={handleChange}
              name="employment"
              checked={inputData.employment === "part-time"}
            />
            <label htmlFor="part-time">Part-time</label>
            <br />

            <input
              type="radio"
              id="full-time"
              value="full-time"
              onChange={handleChange}
              name="employment"
              checked={inputData.employment === "full-time"}
            />
            <label htmlFor="full-time">Full-time</label>
            <br />
          </fieldset>

          <div className="halfOfSecond">
            <label htmlFor="favColor">What is your favorite color?</label>
            <select
              className="inputForm"
              id="favColor"
              name="favColor"
              onChange={handleChange}
              value={inputData.favColor}
            >
              <option value="">-- Choose --</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="indigo">Indigo</option>
              <option value="violet">Violet</option>
            </select>
          </div>
        </div>

        <div className="thirdPartOfTheForm">
          <button className="submitButton">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PassInputValue;

/**
1. In a vanilla JS app, at what point in the form submission
   process do you gather all the data from the filled-out form?
   No, you need to 'collect it'
..
Right before the form is submitted.

2. In a React app, when do you gather all the data from
   the filled-out form?
    on every change there it updates, and on submit it displays what was gathered
..
As the form is being filled out. The data is all held in local state.

3. Which attribute in the form elements (value, name, onChange, etc.)
   should match the property name being held in state for that input?
   Name should match property name in state object
..
`name` property.

4. What's different about a saving the data from a checkbox element
   vs. other form elements?
    checkbox element needs boolean value that we label checked
..
A checkbox uses the `checked` property to determine what should
be saved in state. Other form elements use the `value` property instead.

5. How do you watch for a form submit? How can you trigger
   a form submit?
   with a button and onSubmit handler
..
- Can watch for the submit with an onSubmit handler on the `form` element.
- Can trigger the form submit with a button click.

 */
