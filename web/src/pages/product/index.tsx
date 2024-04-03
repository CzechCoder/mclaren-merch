import { FaMinus, FaPlus } from 'react-icons/fa6';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'wouter';
import { type FC, useState } from 'react';

import { type Product } from '~/types/products';
import { Spinner } from '~/components/spinner';
import { Header } from '~/components/header';
import { Footer } from '~/components/footer';
import { getProduct } from '~/api';
import { ProductAccordion } from '~/components/accordion';

export const ProductPage: FC = () => {
	const { product_slug, variant_slug } = useParams();

	const [itemCount, setItemCount] = useState<number>(1);

	const { data: product } = useQuery<Product>({
		queryKey: ['getProduct', product_slug],
		queryFn: () => getProduct(product_slug),
	});

	const decrementItemCount = () => {
		if (itemCount > 1) {
			setItemCount(itemCount - 1);
		}
	};

	const colorSet = new Set<string>();

	const sizeSet = new Set<string>();

	if (product) {
		for (const variant of product.variants) {
			colorSet.add(variant.data.color);
			sizeSet.add(variant.data.size);
		}
	}

	const colors: string[] = Array.from(colorSet);
	const sizes: string[] = Array.from(sizeSet);

	const imgLink = variant_slug
		? product?.variants.find((variant) => variant.slug === variant_slug).img
		: product?.variants[0].img;

	const sizeLinks = [];
	const colorLinks = [];

	if (product) {
		const variant =
			product.variants.find((v) => v.slug == variant_slug) ??
			product.variants[0];

		for (const size of sizes) {
			const sizeVariant = product.variants.find(
				(v) => v.data.color === variant.data.color && v.data.size === size,
			);

			const link = sizeVariant
				? `/products/${product.slug}/${sizeVariant.slug}`
				: '';

			const activeSize = variant.data.size === size;

			sizeLinks.push(
				<Link
					className={`flex items-center cursor-pointer text-black px-4 border-2 border-gray-300 h-[40px] ${sizeVariant ? '' : 'pointer-events-none text-gray-300'} ${activeSize ? 'border-gray-500' : ''}`}
					href={link}
					key={size}
				>
					{size}
				</Link>,
			);
		}

		for (const color of colors) {
			let colorVariant = product.variants.find(
				(v) => v.data.size === variant.data.size && v.data.color === color,
			);

			let closestVariant;
			if (!colorVariant) {
				closestVariant = product.variants.find((v) => v.data.color === color);
			}

			const link = colorVariant
				? `/products/${product.slug}/${colorVariant.slug}`
				: `/products/${product.slug}/${closestVariant.slug}`;

			const activeColor = variant.data.color === color;

			colorLinks.push(
				<Link href={link} key={color}>
					<span
						className={`cursor-pointer h-[30px] w-[30px] rounded-full border-2 border-white ${activeColor ? 'shadow-[0_0_0_2px_black]' : ''}`}
						style={{ background: color }}
					/>
				</Link>,
			);
		}
	}

	return (
		<div>
			<Header />
			<div className='max-w-screen-xl h-full mx-auto py-4 sm:py-10 px-3 sm:px-0'>
				{product ? (
					<div className='flex flex-col sm:flex-row gap-10 justify-between'>
						<div className='flex-[0_0_55%] width-2/5 width-2/5 mx-auto'>
							<img src={imgLink} />
						</div>

						<div className='flex-[0_0_50%] basis-2/5 width-2/5 mx-auto'>
							<h1 className='text-2xl sm:text-4xl font-medium'>
								{product.name}
							</h1>
							<h2 className='text-lg mt-1 mb-10 text-gray-700'>
								${product.cost}
							</h2>
							{product.apparel && (
								<div className='mb-10'>
									<p className='text-gray-500 mb-4'>COLOR</p>
									<div className='flex flex-row gap-4'>{colorLinks}</div>
									<p className='text-gray-500 my-4'>SIZE</p>
									<div className='flex gap-2'>{sizeLinks}</div>
								</div>
							)}
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
								{product.description.split('\n').map((text) => (
									<p className='my-4' key={text}>
										{text}
									</p>
								))}
							</div>
							<div className='mb-6 mt-10'>
								<ProductAccordion details={product.details} />
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
