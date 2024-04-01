import { FaPlus } from 'react-icons/fa6';
import { AccordionItem as Item } from '@szhsin/react-accordion';

export const AccordionItem = ({ header, ...rest }) => (
	<Item
		{...rest}
		header={({ state: { isEnter } }) => (
			<div className='w-full flex justify-between'>
				{header}
				<FaPlus />
			</div>
		)}
		className='border-b'
		buttonProps={{
			className: ({ isEnter }) =>
				`flex w-full p-4 text-left hover:bg-slate-100 ${
					isEnter && 'bg-slate-200'
				}`,
		}}
		contentProps={{
			className: 'transition-height duration-200 ease-out',
		}}
		panelProps={{ className: 'p-4' }}
	/>
);
