import React from "react";
import './formTitle.css'

export function FormTitle(props) {
  const { className, text } = props;
  return <h1 className={`${className} form-title`}>{text}</h1>;
}
