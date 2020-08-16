import React from "react";
import ErrorComponent from "../Error";

interface IPropsCustomeHeader {
  text: string;
  style?: any;
}

export default function CustomHeader({
  text,
  style = { color: "Blue" },
}: IPropsCustomeHeader) {
  if (!text) return <ErrorComponent />;
  return <h2 style={style}> {text} </h2>;
}