/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  validateUsername,
  validateUsernameMessage,
  validateAvatarUrl,
  avatarUrlValidationMessage,
  validateDescription,
  descriptionValidationMessage,
  validateTitle,
  validateTitleMessage,
  validatePassword,
  validatePasswordConfir,
  passwordConfirmationMessage,
} from "../../shared/validators";
import { Input } from "../Input.jsx";

const inputs = [
  {
    field: "password",
    label: "Password",
    validationMessage: validatePasswordConfir,
    type: "text",
  },
  
];

export const ChannelSettings = ({ settings, saveSettings }) => {
  const [formState, setFormState] = useState({
    password: {
      isValid: validateTitle(settings.password),
      showError: false,
      value: settings.password,
    },
  });

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case "password":
        isValid = validatePassword(value);
        break;
      default:
        break;
    }
    setFormState((prevState) => ({
        ...prevState,
        [field]:{
            ...prevState[field],
            isValid,
            showError: !isValid
        }
    }))
  };

  const handleFormSubmit = (event) =>{
    event.preventDefault()

    saveSettings({
        password: formState.password.value,
        
    })

    console.log(formState)
  }

  const isSubmitButtonDisabled = !formState.password.isValid 
                                 

  return(
    <form className="settings-form">
        {inputs.map((inputs) => (
            <Input 
                key={inputs.field}
                field={inputs.field}
                label={inputs.label}
                value={formState[inputs.field].value}
                onChangeHandler={handleInputValueChange}
                onBlurHandler={handleInputValidationOnBlur}
                showErrorMessage={formState[input.field].showError}
                validationMessage={inputs.validationMessage}
                type={inputs.type}
                textarea={inputs.textarea}
            />
        ))}
        <button onClick={handleFormSubmit} disabled={isSubmitButtonDisabled}>
            Guardar
        </button>
    </form>

  )
};
