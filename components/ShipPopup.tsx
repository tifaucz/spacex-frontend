import React, { useEffect, useRef } from 'react';
import { Ship } from '@/util/types/graphql';
import { typeEffectPlus } from '@/util/typeEffectPlus';
import { useSettings } from '../context/SettingsContext';

interface ShipPopupProps {
  ship: Ship;
  onClose: () => void;
}

const ShipPopup: React.FC<ShipPopupProps> = ({ ship, onClose }) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const shipPopupRef = useRef<HTMLDivElement>(null); 
    const { enableTypeEffect } = useSettings();

    useEffect(() => {
        if (dialogRef.current) {
          dialogRef.current.showModal();
        }
        if (enableTypeEffect && shipPopupRef.current) {
          typeEffectPlus(shipPopupRef.current);
        }
      }, []);
  
    const redText = (text: string | number | undefined) => {
        return text ? (<span className="text-red">{text}</span>) : false;
    }
    const blueText = (text: string | number | undefined) => {
        return text ? (<span className="text-blue">{text}</span>) : false;
    }

    return (
      <>
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={onClose}
        ></div>
        <dialog
          ref={dialogRef}
          className="w-fit h-fit min-w-[20rem] min-h-[50rem] bg-black border-4 border-green text-green flex justify-center items-start p-4 outline-none"
          onClick={onClose}
        >
          <div className="p-6 w-[32rem] h-auto">
              {ship.image && ship.name && <img
                  src={ship.image}
                  alt={ship.name}
                  className="w-full h-auto object-cover"
              />}
              {!ship.image && (
                  <div className="flex justify-center items-center w-full h-72 object-cover bg-gray">
                      <span className="text-center text-white">IMAGE NOT FOUND</span>
                  </div>
              )}
              <div ref={shipPopupRef}>
              <h3 className="text-xl font-bold my-4">{ship.name}</h3>
              <div className="grid grid-cols-4 gap-4">
                  <p className="text-gray col-span-3">HOME PORT: {ship.home_port ? blueText(ship.home_port) : redText('Unknown')}</p>
                  <p className="text-gray col-span-1">ACTIVE:{ship.active ? blueText('YES') : redText('NO')}</p>
                  <p className="text-gray col-span-4">ROLES: {ship.roles ? blueText(ship.roles?.join(', ')) : redText('Unknown')}</p>
                  <p className="text-gray col-span-2">CLASS: {ship.class ? blueText(ship.class) : redText('Unknown')}</p>
                  <p className="text-gray col-span-2">ABS: {ship.abs ? blueText(ship.abs) : redText('Unknown')}</p>
                  <p className="text-gray col-span-2">IMO: {ship.imo ? blueText(ship.imo) : redText('Unknown')}</p>
                  <p className="text-gray col-span-2">MMSI: {ship.mmsi ? blueText(ship.mmsi) : redText('Unknown')}</p>
                  <p className="text-gray col-span-2">MODEL: {ship.model ? blueText(ship.model) : redText('Unknown')}</p>
                  <p className="text-gray col-span-2">STATUS: {ship.status ? blueText(ship.status) : redText('Unknown')}</p>
                  <p className="text-gray col-span-2">TYPE: {ship.type ? blueText(ship.type) : redText('Unknown')}</p>
                  <p className="text-gray col-span-2">YEAR BUILT: {ship.year_built ? blueText(ship.year_built) : redText('Unknown')}</p>
              </div>
              {ship.missions && (
              <div>
                  <h4 className="font-bold mt-4 mb-2">MISSIONS:</h4>
                  <ul className="list-disc pl-5">
                  {ship.missions.map((mission, index) => (
                      <li key={index}>
                      {mission?.name} (Flight: {mission?.flight})
                      </li>
                  ))}
                  </ul>
              </div>
              )}
              </div>
          </div>
        </dialog>
      </>
    );
  };
  
export default ShipPopup;
