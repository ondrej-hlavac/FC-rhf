import React from "react";

interface Props {
  renderCount: number;
}

const Result: React.FC<Props> = ({ renderCount }) => {
  console.log("render child");
  return <>child component - počet renderů : {renderCount}</>;
};

export default Result;
