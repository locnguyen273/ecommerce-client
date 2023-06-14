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
  onBlur: (e: never) => void, 
}

const CustomInput = (props: CustomInputProps) => {
  const { type, label, id, name, val, className, onChange, onBlur } = props;
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
        onBlur={onBlur}
      />
    </div>
  )
}

export default CustomInput