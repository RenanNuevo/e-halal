import React from 'react';

const AccordionLayout = ({ title, children, index, activeIndex, setActiveIndex, component }) => {
	const handleSetIndex = (index) => (activeIndex !== index) ? setActiveIndex(index) : setActiveIndex(false);

	return (
		<>
			<details onClick={() => handleSetIndex(index)}  class="w-full bg-white cursor-pointer mb-2">
				<summary class="w-full bg-zinc-200 text-dark text-lg flex justify-between px-10 py-2">
					<p>{title}</p>
					{component}
				</summary>
				<div>
					{children}
				</div>
			</details>
		</>
	);
};

export default AccordionLayout;
