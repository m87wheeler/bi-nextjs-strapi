import * as React from "react";

type BackgroundType = "primary" | "white";
type ContextType = {
  backgroundColor: BackgroundType;
  setBackgroundColor: React.Dispatch<React.SetStateAction<BackgroundType>>;
};
interface Props {
  children?: React.ReactNode;
}

export const ScrollContext = React.createContext<ContextType>({
  backgroundColor: "primary",
  setBackgroundColor: () => {},
});

const ScrollContextProvider = ({ children }: Props) => {
  const [backgroundColor, setBackgroundColor] =
    React.useState<BackgroundType>("white");

  const value = {
    backgroundColor,
    setBackgroundColor,
  };

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};

export default ScrollContextProvider;
