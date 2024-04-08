import { Accordion } from '@szhsin/react-accordion';
import { FaFacebook, FaPinterest } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { type FC } from 'react';

import { AccordionItem } from '~/components/accordion-item';

export const ProductAccordion: FC<{ details: string }> = ({ details }) => (
	<Accordion transition transitionTimeout={200} className='border-t-[1px]'>
		<AccordionItem header='DELIVERY'>
			<p className='mb-4'>Complimentary shipping to EU orders over $200</p>
			<div className='flex flex-col gap-2'>
				<div className='flex justify-between'>
					<span>EU (including VAT)</span>
					<span>$5</span>
				</div>
				<div className='flex justify-between'>
					<span>UK</span>
					<span>$10</span>
				</div>
				<div className='flex justify-between'>
					<span>US & Canada</span>
					<span>$15</span>
				</div>
				<div className='flex justify-between'>
					<span>Rest of the World</span>
					<span>$20</span>
				</div>
			</div>
		</AccordionItem>

		<AccordionItem header='PRODUCT DETAILS'>
			<ul className='list-disc pl-4'>
				{details.split('\n').map((detail) => (
					<li className='py-1' key={detail}>
						{detail}
					</li>
				))}
			</ul>
		</AccordionItem>

		<AccordionItem header='SHARE'>
			<div className='flex gap-10'>
				<FaFacebook className='text-orange-500 cursor-pointer' size={22} />
				<FaXTwitter className='text-orange-500 cursor-pointer' size={22} />
				<FaPinterest className='text-orange-500 cursor-pointer' size={22} />
			</div>
		</AccordionItem>
	</Accordion>
);
