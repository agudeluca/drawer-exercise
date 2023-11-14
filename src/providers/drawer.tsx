import React, {createContext, useMemo, useState} from 'react';

type MyContextValues = {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  currentRoute: string;
  setCurrentRoute: React.Dispatch<React.SetStateAction<string>>;
};
const DrawerContext = createContext<MyContextValues>({
  isOpened: false,
  setIsOpened: () => {},
  currentRoute: '',
  setCurrentRoute: () => {},
});

const DrawerProvider = ({children}: {children: React.ReactNode}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [currentRoute, setCurrentRoute] = useState('' as string);
  const contextValues: MyContextValues = useMemo(() => {
    return {
      isOpened,
      setIsOpened,
      currentRoute,
      setCurrentRoute,
    };
  }, [isOpened, setIsOpened, currentRoute, setCurrentRoute]);

  return <DrawerContext.Provider value={contextValues}>{children}</DrawerContext.Provider>;
};

export {DrawerProvider, DrawerContext};
