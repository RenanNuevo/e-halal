import React from "react";

import Badge from "../Badge";
import './styles.css';

export default function Tabs({ color }) {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex list-none flex-wrap pt-3 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-green"
                    : "text-white bg-gray")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                ON-GOING SUBSCRIPTION
                <Badge display={3} />
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-green"
                    : "text-white bg-gray")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                AVAILABLE SUBSCRIPTION
                <Badge display={5} />
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-green w-full">
            <div className="px-4 py-5 flex-auto bg-green">
              <div className="tab-content tab-space pt-10">
                <div className={`${openTab === 1 ? "block" : "hidden"}`} id="link1">
                    <div className="block p-6 rounded-lg shadow-lg bg-white w-full my-2">
                        <h5 className="text-gray-900 text-xl leading-tight font-medium ">Additional 8 Items for the menu</h5>
                        <div className="grid  grid-cols-2">
                            <div className="grid content-center">
                            <p className="text-gray-700 text-base">
                            Additional of 8 items with image for a total of 16 items for the menu
                            </p>
                            <p className="text-gray-700 text-base">
                            Cost: Php 300.00 / month
                            </p>
                            </div>
                            <div className="grid content-center justify-self-end">
                                <button
                                    type="button"
                                    className="bg-gray-darker px-6 text-white font-medium py-2.5 text-xs uppercase 
                                        rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
                                        active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >UNSUBSCRIBE</button>
                                <p className="italic">Subscribe since 11/03/2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="block p-6 rounded-lg shadow-lg bg-white w-full my-2">
                        <h5 className="text-gray-900 text-xl leading-tight font-medium ">Additional 8 Items for the menu</h5>
                        <div className="grid  grid-cols-2">
                            <div className="grid content-center">
                            <p className="text-gray-700 text-base">
                            Additional of 8 items with image for a total of 16 items for the menu
                            </p>
                            <p className="text-gray-700 text-base">
                            Cost: Php 300.00 / month
                            </p>
                            </div>
                            <div className="grid content-center justify-self-end">
                                <button
                                    type="button"
                                    className="bg-gray-darker px-6 text-white font-medium py-2.5 text-xs uppercase 
                                        rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
                                        active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >UNSUBSCRIBE</button>
                                <p className="italic">Subscribe since 11/03/2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="block p-6 rounded-lg shadow-lg bg-white w-full my-2">
                        <h5 className="text-gray-900 text-xl leading-tight font-medium ">Additional 8 Items for the menu</h5>
                        <div className="grid  grid-cols-2">
                            <div className="grid content-center">
                            <p className="text-gray-700 text-base">
                            Additional of 8 items with image for a total of 16 items for the menu
                            </p>
                            <p className="text-gray-700 text-base">
                            Cost: Php 300.00 / month
                            </p>
                            </div>
                            <div className="grid content-center justify-self-end">
                                <button
                                    type="button"
                                    className="bg-gray-darker px-6 text-white font-medium py-2.5 text-xs uppercase 
                                        rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
                                        active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >UNSUBSCRIBE</button>
                                <p className="italic">Subscribe since 11/03/2022</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className="block p-6 rounded-lg shadow-lg bg-white w-full my-2">
                        <h5 className="text-gray-900 text-xl leading-tight font-medium ">Additional 8 Items for the menu</h5>
                        <div className="grid  grid-cols-2">
                            <div className="grid content-center">
                            <p className="text-gray-700 text-base">
                            Additional of 8 items with image for a total of 16 items for the menu
                            </p>
                            <p className="text-gray-700 text-base">
                            Cost: Php 300.00 / month
                            </p>
                            </div>
                            <div className="grid content-center justify-self-end">
                                <button
                                    type="button"
                                    className="bg-blue-1 px-6 text-white font-medium py-2.5 text-xs uppercase 
                                        rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
                                        active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >SUBSCRIBED</button>
                            </div>
                        </div>
                    </div>
                    <div className="block p-6 rounded-lg shadow-lg bg-white w-full my-2">
                        <h5 className="text-gray-900 text-xl leading-tight font-medium ">Additional 8 Items for the menu</h5>
                        <div className="grid  grid-cols-2">
                            <div className="grid content-center">
                            <p className="text-gray-700 text-base">
                            Additional of 8 items with image for a total of 16 items for the menu
                            </p>
                            <p className="text-gray-700 text-base">
                            Cost: Php 300.00 / month
                            </p>
                            </div>
                            <div className="grid content-center justify-self-end">
                                <button
                                    type="button"
                                    className="bg-blue-1 px-6 text-white font-medium py-2.5 text-xs uppercase 
                                        rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
                                        active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >SUBSCRIBED</button>
                            </div>
                        </div>
                    </div>
                    <div className="block p-6 rounded-lg shadow-lg bg-white w-full my-2">
                        <h5 className="text-gray-900 text-xl leading-tight font-medium ">Additional 8 Items for the menu</h5>
                        <div className="grid  grid-cols-2">
                            <div className="grid content-center">
                            <p className="text-gray-700 text-base">
                            Additional of 8 items with image for a total of 16 items for the menu
                            </p>
                            <p className="text-gray-700 text-base">
                            Cost: Php 300.00 / month
                            </p>
                            </div>
                            <div className="grid content-center justify-self-end">
                                <button
                                    type="button"
                                    className="bg-blue-1 px-6 text-white font-medium py-2.5 text-xs uppercase 
                                        rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
                                        active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >SUBSCRIBED</button>
                            </div>
                        </div>

                    </div>
                    <div className="block p-6 rounded-lg shadow-lg bg-white w-full my-2">
                        <h5 className="text-gray-900 text-xl leading-tight font-medium ">Additional 8 Items for the menu</h5>
                        <div className="grid  grid-cols-2">
                            <div className="grid content-center">
                            <p className="text-gray-700 text-base">
                            Additional of 8 items with image for a total of 16 items for the menu
                            </p>
                            <p className="text-gray-700 text-base">
                            Cost: Php 300.00 / month
                            </p>
                            </div>
                            <div className="grid content-center justify-self-end">
                                <button
                                    type="button"
                                    className="bg-blue-1 px-6 text-white font-medium py-2.5 text-xs uppercase 
                                        rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
                                        active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >SUBSCRIBED</button>
                            </div>
                        </div>
                        
                    </div><div className="block p-6 rounded-lg shadow-lg bg-white w-full my-2">
                        <h5 className="text-gray-900 text-xl leading-tight font-medium ">Additional 8 Items for the menu</h5>
                        <div className="grid  grid-cols-2">
                            <div className="grid content-center">
                            <p className="text-gray-700 text-base">
                            Additional of 8 items with image for a total of 16 items for the menu
                            </p>
                            <p className="text-gray-700 text-base">
                            Cost: Php 300.00 / month
                            </p>
                            </div>
                            <div className="grid content-center justify-self-end">
                                <button
                                    type="button"
                                    className="bg-blue-1 px-6 text-white font-medium py-2.5 text-xs uppercase 
                                        rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
                                        active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >SUBSCRIBED</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
