import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import React, { useRef, useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import "../styles/DataInput.css";
import ValidateUser from "./ValidateUser";

export default function DataInput(props) {
  //State & Ref Hooks
  const [country, setCountry] = useState("");

  const handleCountryChange = (event) => setCountry(event.target.value);

  const countryInputRef = useRef();
  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const birthdayInputRef = useRef();

  const [rawData, setRawData] = useState("");

  // I/O
  let returnUserData;

  const handleFormSubmission = (event) => {
    event.preventDefault();

    let data = {
      name: "",
      surname: "",
      country: "",
      birthday: "",
    };

    data.name = nameInputRef.current.value;
    data.surname = surnameInputRef.current.value;
    data.country = countryInputRef.current.value;
    data.birthday = birthdayInputRef.current.value;

    setRawData(data);
  };

  const getValidatedData = (params) => {
    returnUserData = { ...returnUserData, ...params };
    returnUserData.isSubmited = true;
    //console.log(returnUserData);
    props.sendData(returnUserData);
  };

  return (
    <div className="DataInput">
      <form>
        <div className="Input-Boxes">
          <div className="Box-Name">
            <TextField
              sx={{ input: { color: "blue" } }}
              label="Name"
              inputRef={nameInputRef}
              required
            />
          </div>

          <div className="Box-Surname">
            <TextField
              sx={{ input: { color: "blue" } }}
              label="Surname"
              inputRef={surnameInputRef}
              required
            />
          </div>

          <div className="Box-Country">
            <FormControl variant="filled" sx={{ minWidth: 220 }}>
              <InputLabel id="demo-simple-select-filled-label">
                Countries
              </InputLabel>

              <Select
                required
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                label="Countries"
                value={country}
                autoWidth
                onChange={handleCountryChange}
                inputRef={countryInputRef}
              >
                <MenuItem value={"Brazil"}> Brazil </MenuItem>
                <MenuItem value={"Portugal"}> Portugal </MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="Box-Birthday">
            <TextField
              sx={{ input: { color: "blue" } }}
              label="Birthday"
              inputRef={birthdayInputRef}
              type="date"
              InputLabelProps={{ shrink: true }}
              required
            />
          </div>
        </div>

        <div className="Button-Save">
          <LoadingButton
            loadingPosition="end"
            endIcon={<SaveIcon />}
            variant="outlined"
            type="submit"
            onClick={handleFormSubmission}
          >
            Save
          </LoadingButton>
          <ValidateUser data={rawData} sendData={getValidatedData} />
        </div>
      </form>
    </div>
  );
}
