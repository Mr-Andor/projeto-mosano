import Box from "@mui/material/Box";
import React from "react";
import "../styles/MessageBox.css";

const MessageBox = (props) => {

console.log(props.data)

    let validatedData = {
        name: "",
        surname: "",
        country: "",
        birthday: "",
      };

      validatedData.name = props.data.name;
      validatedData.surname = props.data.surname;
      validatedData.birthday = props.data.birthday;
      validatedData.country = props.data.country;


    let birthday = new Date(validatedData.birthday);
    let today = new Date();

    let age = (today.getFullYear - birthday.getFullYear)

    let greetingMessage = "Hello ${validatedData.name} from ${validatedData.country} on ${birthday.getDay} of ${birthday.getMonth} you will have ${age} years"

    return (
        <div className = "MessageBox">
            <Box sx = {{
                width: 360,
                height: 100,
                backgroundColor: "rgba(197, 202, 100, 1)",
            }} >
                {greetingMessage}
            </Box>
        </div>
    )
}

export default MessageBox;