"use client";
import React, { createContext, useContext, useState } from 'react';

type SettingsContextType = {
    enableTypeEffect: boolean;
    setEnableTypeEffect: (value: boolean) => void;
    source: string;
    setSource: (value: string) => void; 
    sourceOptions: string[];
};

const sourceOptions = [
    'http://localhost:3000',
    'https://spacex-production.up.railway.app',
];

const SettingsContext = createContext<SettingsContextType>({
    enableTypeEffect: true, 
    setEnableTypeEffect: () => {},
    source: sourceOptions[0],
    setSource: () => {},
    sourceOptions: sourceOptions,
});

type SettingsProviderProps = {
    children: React.ReactNode;
  };

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
    const [enableTypeEffect, setEnableTypeEffect] = useState(true);
    const [source, setSource] = useState(sourceOptions[0]);

    return (
    <SettingsContext.Provider value={{ enableTypeEffect, setEnableTypeEffect, source, setSource, sourceOptions }}>
        {children}
      </SettingsContext.Provider>
    );
};
