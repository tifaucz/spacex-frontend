"use client";
import React from 'react';
import RootLayout from '../layout';
import { useSettings } from '../../context/SettingsContext';
import Link from 'next/link';

export default function SettingsPage() {
  const { enableTypeEffect, setEnableTypeEffect, source, setSource, sourceOptions } = useSettings();

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnableTypeEffect(event.target.value === 'yes');
  };

  const handleSourceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSource(event.target.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="border-4 border-green p-8">
        <h1 className="text-2xl font-bold text-green mb-6">Settings</h1>
        <form>
          <div className="mb-4">
            <span className="text-lg font-medium text-gray">Enable Typing Effect:</span>
            <div className="flex items-center mt-2">
              <label className="inline-flex items-center mr-6">
                <input
                  type="radio"
                  name="enableTypeEffect"
                  value="yes"
                  className="form-radio text-blue"
                  checked={enableTypeEffect === true}
                  onChange={handleRadioChange}
                />
                <span className="ml-2 font-bold text-blue">Enable</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="enableTypeEffect"
                  value="no"
                  className="form-radio text-red"
                  checked={enableTypeEffect === false}
                  onChange={handleRadioChange}
                />
                <span className="ml-2 font-bold text-red">Disable</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <span className="text-lg font-medium text-gray">API Source:</span>
            <div className="mt-2 text-green">
              {sourceOptions.map((uri, index) => 
                  <div className="hover:text-blue" key={index}>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="source"
                      value={uri}
                      className="form-radio"
                      checked={source === uri}
                      onChange={handleSourceChange}
                    />
                    <span className="ml-2">{uri}</span>
                  </label>
                </div>
              )}
            </div>
          </div>
        </form>
        <div className="text-center w-full items-center p-6 ">
          <Link href="/" passHref >
            <span className="text-center w-fit  p-4 bg-green text-black hover:bg-blue font-bold">Back to ship list</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

SettingsPage.layout = RootLayout;