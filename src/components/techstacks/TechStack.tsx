"use client";
import React from "react";
import { Button } from "../ui/button";

interface Props {
  stack: string;
}

export const TechStack: React.FC<Props> = ({ stack }) => {
  const stackArray: string[] = stack.split(", ");
  return (
    <div id="skills">
      <div className="text-4xl text-center pt-[6rem] font-bold bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-400 text-transparent">
        My Tech Stacks
      </div>
      <div className="text-center mt-5 mb-5 gap-2">
        {stackArray.map((st, index) => (
          <Button key={index} variant="secondary" className="m-1">
            {st}
          </Button>
        ))}
      </div>
    </div>
  );
};
