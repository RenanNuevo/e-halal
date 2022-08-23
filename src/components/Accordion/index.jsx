import React, { useState } from 'react';
import AccordionLayout from './AccordionLayout';
import Switch from '../Switch';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import ConfirmDialog from '../ConfirmDialog';
import './style.css'

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);
	const [confirmOpen, setConfirmOpen] = useState(false);
	const [selectedSettings, setSelectedSettings] = useState('');

	const handleSetConfirmOpen = (settings) => {
		setSelectedSettings(settings);
		setConfirmOpen(true)
	}

	return (
		<div className='flex flex-col justify-center items-center'>
			<ConfirmDialog
				title={selectedSettings}
				open={confirmOpen}
				onClose={() => setConfirmOpen(false)}
				onConfirm={() => console.log('test')}
			>
				Are you sure you want to enable the {selectedSettings}?
			</ConfirmDialog>
			<AccordionLayout 
				title="Default Estimated Time for Preparation"
				index={1}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
				component={<input className="text-center text-gray-800" value="00:45:00"/>}
			>
			</AccordionLayout>
			<AccordionLayout 
				title="Check-Out Feature"
				index={3}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
				component={<Switch onChangeHandler={()=>handleSetConfirmOpen('Check-Out Feature')}/>}
			>
				<p class="px-4 py-3 bg-green-50">
				Lorem ipsum... 
				</p>
			</AccordionLayout>
			<AccordionLayout 
				title="Delivery via Rider"
				index={2}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
				component={<Switch onChangeHandler={()=>handleSetConfirmOpen('Delivery via Rider')}/>}
			>
				<div class="px-4 py-1 bg-green-50 w-full">
					<div className="w-full bg-white cursor-pointer flex justify-between p-3">
					<p>Maximum Delivery Distance</p>
					
					<div className='flex w-64'>
						<input className='border border-gray mr-2 text-center w-2/5' type='number' value={15}/>
						<p className='italic text-gray-200 w-3/5'>in Kilometer</p>
					</div>

					</div>
				</div>
				<div class="px-4 py-1 bg-green-50 w-full">
					<div className="w-full bg-white cursor-pointer flex justify-between p-3">
					<p>Base distance cost (0km – 1km)</p>
					
					<div className='flex w-64'>
						<input className='border border-gray mr-2 text-center  w-2/5' type='number' value={100}/>
						<p className='italic text-gray-200 w-3/5'>in Php</p>
					</div>

					</div>
				</div>
				<div class="px-4 py-1 bg-green-50 w-full">
					<div className="w-full bg-white cursor-pointer flex justify-between p-3">
					<p>Succeeding distance cost (per 1km)</p>
					
					<div className='flex w-64'>
						<input className='border border-gray mr-2 text-center  w-2/5' type='number' value={50}/>
						<p className='italic text-gray-200 w-3/5'>in Php</p>
					</div>

					</div>
				</div>
				<div class="flex px-4 py-1 bg-green-50 w-full justify-end p-5">
				<button className='rounded-md text-white text-center px-2 py-1 w-24 m-1 p-2 bg-green-700'>SAVE</button>
				<button className='rounded-md text-white text-center px-2 py-1 m-1 p-2 bg-red-400' onClick={()=>setActiveIndex(0)}>CANCEL</button>
				</div>
			</AccordionLayout>
			<AccordionLayout 
				title="Discount using E-Wallet"
				index={1}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
				component={<input className="text-center text-gray-800" value="Php 3.00"/>}
			>
			</AccordionLayout>
			<AccordionLayout 
				title="Reservation Feature"
				index={2}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
				component={<Switch onChangeHandler={()=>handleSetConfirmOpen('Reservation Feature')}/>}
			>
				<div class="px-4 py-1 bg-green-50 w-full">
					<div className="w-full bg-white cursor-pointer flex justify-between p-3">
					<p>Free Reservation</p>
					<div className='flex w-64'>
						<div class="flex ">
						<AiOutlineMinus size={19} className='cursor-pointer bg-teal-800 text-white p-1'/>
							<div class="w-5">
							<input
								type='text'
								value={'00'}
								placeholder=''
								className='w-full text-center'
								onChange={e => console.log(e)} />
							</div>
						<AiOutlinePlus size={19} color={'white'} className='cursor-pointer bg-teal-800 text-white p-1'/>
						</div>
					</div>
					</div>
				</div>
				<div class="px-4 py-1 bg-green-50 w-full">
					<div className="w-full bg-white cursor-pointer flex justify-between p-3">
					<p>Downpayment Reservation</p>
					<div className='flex w-64'>
						<label>Cost:</label>
						<input className='border border-gray mr-2 text-center  w-2/5' type='number' value={'Php 0.00'}/>
						<div class="flex ">
						<AiOutlineMinus size={19} className='cursor-pointer bg-teal-800 text-white p-1'/>
							<div class="w-5">
							<input
								type='text'
								value={'10'}
								placeholder=''
								className='w-full text-center'
								onChange={e => console.log(e)} />
							</div>
						<AiOutlinePlus size={19} color={'white'} className='cursor-pointer bg-teal-800 text-white p-1'/>
						</div>
					</div>
					</div>
				</div>
				<div class="px-4 py-1 bg-green-50 w-full">
					<div className="w-full bg-white cursor-pointer flex justify-between p-3">
					<p>Paid Reservation</p>
					
					<div className='flex w-64'>
						<label>Cost:</label>
						<input className='border border-gray mr-2 text-center  w-2/5' type='number' value={'Php 0.00'}/>
						<div class="flex ">
						<AiOutlineMinus size={19} className='cursor-pointer bg-teal-800 text-white p-1'/>
							<div class="w-5">
							<input
								type='text'
								value={'01'}
								placeholder=''
								className='w-full text-center'
								onChange={e => console.log(e)} />
							</div>
						<AiOutlinePlus size={19} color={'white'} className='cursor-pointer bg-teal-800 text-white p-1'/>
						</div>
					</div>

					</div>
				</div>
				<div class="px-4 py-1 bg-green-50 w-full">
					<div className="w-full bg-white cursor-pointer flex justify-between p-3">
					<p>Select Dates</p>
					
					<div className='flex w-64'>
						<label>From:</label>
						<input className='border border-gray mr-2 text-center  w-2/5' type='number' value={50}/>
						<p className='italic text-gray-200 w-3/5'>in Php</p>
					</div>

					</div>
				</div>
				<div class="flex px-4 py-1 bg-green-50 w-full justify-end p-5">
				<button
					type="button"
					className='rounded-md text-white text-center px-2 py-1 w-24 m-1 p-2 bg-green-700 duration-150 ease-in-out transition' 
					onClick={() => setConfirmOpen(true)}>SAVES</button>
				<button className='rounded-md text-white text-center px-2 py-1 m-1 p-2 bg-red-400' onClick={()=>setActiveIndex(0)}>CANCEL</button>
				</div>
			</AccordionLayout>
			<AccordionLayout 
				title="Business Hours / Special Hours"
				index={1}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
				component={
				<div>
					<label>Day: </label>
					<select id="small" className="text-center text-gray-800 w-24">
						<option selected>Monday</option>
						<option value="1">Tuesday</option>
						<option value="2">Wednesday</option>
						<option value="3">Thursday</option>
						<option value="4">Friday</option>
						<option value="5">Saturday</option>
						<option value="6">Saturday</option>
					</select>
					<label>  to  </label>
					<select id="small" className="text-center text-gray-800 w-24 mr-2">
						<option selected>Friday</option>
						<option value="1">Monday</option>
						<option value="2">Tuesday</option>
						<option value="3">Wednesday</option>
						<option value="4">Thursday</option>
						<option value="5">Saturday</option>
						<option value="6">Sunday</option>
					</select>
					<label>Time: </label>
					<input className="text-center text-gray-800  w-24" value="08:00"/>
					<label>  to  </label>
					<input className="text-center text-gray-800  w-24" value="18:00"/>
				</div>
				}
			>
			</AccordionLayout>
		</div>
		
	);
};

export default Accordion;
