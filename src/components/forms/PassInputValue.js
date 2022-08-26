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
  });

  function handleChange(event) {
    setInputData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
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
          name="firstName"
        />
        <input
          className="inputForm"
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
        />
      </form>
    </div>
  );
};

export default PassInputValue;
