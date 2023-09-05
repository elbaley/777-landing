import { PropsWithChildren } from "react";

interface ActionButtonProps {}

const ActionButton = ({ children }: PropsWithChildren<ActionButtonProps>) => {
  return (
    <button className="bg-action rounded-lg text-sm font-bold w-[120px] h-10 px-10  hover:bg-opacity-80">
      {children}
    </button>
  );
};

export default ActionButton;
