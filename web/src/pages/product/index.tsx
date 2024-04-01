import { FaMinus, FaPlus, FaXTwitter } from 'react-icons/fa6';
import { FaFacebook, FaPinterest } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'wouter';
import { useState } from 'react';

import { AccordionItem } from '~/components/accordion-item';
import { Accordion } from '@szhsin/react-accordion';
import { Product } from '~/components/product-card';
import { Spinner } from '~/components/spinner';
import { Header } from '~/components/header';
import { getProduct } from '~/api';
import { Footer } from '~/components/footer';

export const ProductPage = () => {
	const { id } = useParams();

	const [itemCount, setItemCount] = useState<number>(1);

	const { data: product } = useQuery<Product>({
		queryKey: ['getProduct', id],
		queryFn: () => getProduct(id),
	});

	const decrementItemCount = () => {
		if (itemCount > 1) {
			setItemCount(itemCount - 1);
		}
	};

	return (
		<div>
			<Header />
			<div className='max-w-screen-xl h-full mx-auto py-10'>
				{product ? (
					<div className='flex flex-row gap-10 justify-between'>
						<div className='flex-[0_0_55%] width-2/5 width-2/5 mx-auto'>
							<img
								src={`http://tomasburian.com/dev/cdn/mclaren/600x600/${product.img}`}
							/>
						</div>

						<div className='flex-[0_0_50%] basis-2/5 width-2/5 mx-auto'>
							<h1 className='text-4xl font-medium'>{product.name}</h1>
							<h2 className='text-lg mt-1 mb-10 text-gray-700'>
								${product.cost}
							</h2>
							<div className='flex mb-10'>
								<div className='flex max-w-[100px] mr-6 border-2 w-full relative'>
									<span
										className='absolute h-[20px] min-w-[20px] top-2/4 translate-y-[-50%] left-[10px] cursor-pointer flex justify-center items-center'
										onClick={decrementItemCount}
									>
										<FaMinus />
									</span>
									<span className='w-full h-[40px] leading-[40px] text-center text-lg'>
										{itemCount}
									</span>
									<span
										className='absolute h-[20px] min-w-[20px] top-2/4 translate-y-[-50%] right-[10px] cursor-pointer flex justify-center items-center'
										onClick={() => setItemCount(itemCount + 1)}
									>
										<FaPlus />
									</span>
								</div>

								<button className='font-bold flex-1 bg-orange-400 min-w-[initial] h-11 px-4 text-white'>
									ADD TO BASKET
								</button>
							</div>
							<div>
								{product.desc.split('\n').map((text) => (
									<p className='my-4'>{text}</p>
								))}
							</div>
							<div className='mb-6 mt-10'>
								<Accordion
									transition
									transitionTimeout={200}
									className='border-t-[1px]'
								>
									<AccordionItem header='DELIVERY'>
										<p className='mb-4'>
											Complimentary shipping to EU orders over $200
										</p>
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
											{product.details.split('\n').map((detail) => (
												<li className='py-1'>{detail}</li>
											))}
										</ul>
									</AccordionItem>

									<AccordionItem header='SHARE'>
										<div className='flex gap-10'>
											<FaFacebook className='text-orange-500' size={22} />
											<FaXTwitter className='text-orange-500' size={22} />
											<FaPinterest className='text-orange-500' size={22} />
										</div>
									</AccordionItem>
								</Accordion>

								<div>
									<p className='my-4'>
										The McLaren Collection is sold and distributed by Dowlis
										Inspired Branding Ltd.
									</p>
									<p className='my-4'>Need help with your order? Contact us</p>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div>
						<Spinner />
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
};
