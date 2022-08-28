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

  console.log(inputData);

  return (
    <div className="MemeMain">
      <form className="textInput ">
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
        <input
          className="inputForm"
          type="checkbox"
          name="likeWhatYouSee"
          id="like"
          onChange={handleChange}
          value={inputData.likeWhatYouSee}
        />
        <label htmlFor="like">Like what you see?</label>
      </form>
    </div>
  );
};

export default PassInputValue;
