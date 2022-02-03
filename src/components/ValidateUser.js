import React from "react";
import validator from "validator";

const ValidateUser = (props) => {
  let validatedData = {
    name: "",
    surname: "",
    country: "",
    birthday: "",
  };

  let invalidName = false;
  let invalidSurname = false;
  let invalidBirthday = false;
  let invalidCountry = false;

  function CheckData(props) {
    if (validator.isAlphanumeric(String(props.data.name), "pt-PT")) {
      validatedData.name = props.data.name;
      invalidName = false;
    } else invalidName = true;

    if (validator.isAlphanumeric(String(props.data.surname), "pt-PT")) {
      validatedData.surname = props.data.surname;
      invalidSurname = false;
    } else invalidSurname = true;

    if (validator.isDate(props.data.birthday)) {
      validatedData.birthday = props.data.birthday;
      invalidBirthday = false;
    } else invalidBirthday = true;

    if (validator.isAlphanumeric(String(props.data.country))) {
      validatedData.country = props.data.country;
      invalidCountry = false;
    } else invalidCountry = true;
  }

  const handleSendData = (data) => props.sendData(data);

  return (
    <div>
      {CheckData(props)}
      {handleSendData(validatedData)}

      {/*console.log(validatedData)*/}
      {/*console.log(invalidData)*/}
    </div>
  );
};

export default ValidateUser;
