import React from "react";
import "./style.scss";

interface CustomInputProps {
  type: string, 
  label: string, 
  id: string, 
  // className: string, 
  name: string, 
  val: string, 
  onChange: (e: any) => void, 
  onBlur: (e: any) => void, 
}

const CustomInput = (props: CustomInputProps) => {
  const { type, label, id, name, val, onChange, onBlur } = props;
  return (
    <div className="custom-input form-floating mt-3">
      <p>{label}</p>
      <input
        type={type}
        className={`custom-input__form-control `}
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