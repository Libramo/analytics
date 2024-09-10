import React from "react";
import { Button } from "./ui/button";

// interface ButtonProps {
//   isLoading: boolean;
//   className?: string;
//   children: React.ReactNode;
// }

// { isLoading, className, children }: ButtonProps
const SubmitButton = () => {
  return (
    <Button type="submit" className="w-full">
      Envoyer
    </Button>
  );
};

export default SubmitButton;
