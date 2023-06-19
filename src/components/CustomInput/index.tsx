import React from "react";
import "./style.scss";

interface CustomInputProps {
  type: string, 
  label: string, 
  id: string, 
  className: string, 
  name: string, 
  val: string, 
  onChange: (e: never) => void,
}

const CustomInput = (props: CustomInputProps) => {
  const { type, label, id, name, val, className, onChange } = props;
  return (
    <div className="custom-input">
      <p className="custom-input__label">{label}</p>
      <input
        type={type}
        className={`custom-input__form-control ${className}`}
        id={id}
        placeholder={label}
        name={name}
        value={val}
        onChange={onChange}
      />
    </div>
  )
}

export default CustomInput