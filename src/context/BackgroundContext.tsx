import { createContext, useContext, useEffect, useState } from 'react';

const BackgroundContext = createContext<{
  setBackground: (color: string) => void;
}>({ setBackground: () => {} });

export const BackgroundProvider = ({ children }: { children: React.ReactNode }) => {
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <BackgroundContext.Provider value={{ setBackground: setColor }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => useContext(BackgroundContext);
