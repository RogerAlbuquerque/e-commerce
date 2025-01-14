import './style.css';
import React from 'react';
import HomeDropdownMenu from '../DropdownMenus/Home';
import ShopDropdownMenu from '../DropdownMenus/Shop';
import BlogDropdownMenu from '../DropdownMenus/Blog';
import ElementsDropdownMenu from '../DropdownMenus/Elements';
import ProductDropdownMenu from '../DropdownMenus/Product';
import PagesDropdownMenu from '../DropdownMenus/Pages';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import Link from 'next/link';

export default function navigationBar() {
	return (
		<nav className='flex flex-col items-center text-stone-700 font-medium max-md:hidden'>
			<div id='containerNavigation' className='customContainer relative flex items-center justify-between z-10'>
				<article className='flex items-center'>
					<article className='group'>
						<Link href='#' className='flex items-center py-1 pl-2 group-hover:bg-amber-400 group-hover:text-white cursor-pointer transition'>
							<RxHamburgerMenu className='text-2xl group-hover:hidden' />
							<IoClose className='hidden text-2xl group-hover:block' />
							<p className='p-4 lg:pr-16  text-sm'>Browse Categories</p>
							<IoIosArrowDown className='text-xs mt-1 mr-4' />
						</Link>

						<section className='bg-white text-stone-500 absolute w-56 font-normal hidden flex-col group-hover:flex'>
							<Link href='#' className='browseCategories'>Eletronics</Link>
							<Link href='#' className='browseCategories'>Gift Ideas</Link>
							<Link href='#' className='browseCategories'>Beds</Link>
							<Link href='#' className='browseCategories'>Lighting</Link>
							<Link href='#' className='browseCategories'>Sofas & Sleeper sofas</Link>
							<Link href='#' className='browseCategories'>Storage</Link>
							<Link href='#' className='browseCategories'>Armchairs & Chaises</Link>
							<Link href='#' className='browseCategories'>Decorations</Link>
							<Link href='#' className='browseCategories'>Kitchens and Cabinets</Link>
							<Link href='#' className='browseCategories'>Coffee & Tables</Link>
							<Link href='#' className='browseCategories'>Outdoor & Furniture</Link>
						</section>
					</article>

					<div id="line" className='border-l border-stone-300 h-4 max-2lg:hidden'></div>

					<article id='fixedHeader' className='flex items-center'>
						<section className='flex items-center h-16 '>
							<ul className='flex gap-2 h-full items-center text-base ' style={{ transition: '0.2s', cursor: 'pointer' }}>

								<li className=' group flex items-center hover:border-b-2 border-b-amber-400 h-full'>
									<Link href='#' className='showNavigationSubmenu px-6 h-full '>
										Home <IoIosArrowDown className='text-xs mt-1' />
									</Link>
									<div className='dropdownMenus' >
										<HomeDropdownMenu />
									</div>
								</li>

								<li className='group liContent'>
									<Link href='#' className='showNavigationSubmenu'>
										Shop <IoIosArrowDown className='text-xs mt-1' />
									</Link>
									<div className='dropdownMenus' >
										<ShopDropdownMenu />
									</div>
								</li>

								<li className='group liContent'>
									<Link href='#' className='showNavigationSubmenu'>
										Product <IoIosArrowDown className='text-xs mt-1' />
									</Link>
									<div className=' dropdownMenus' >
										<ProductDropdownMenu />
									</div>
								</li>

								<li className='group liContent'>
									<Link href='#' className='showNavigationSubmenu'>
										Pages <IoIosArrowDown className='text-xs mt-1' />
									</Link>
									<div className='dropdownMenus' >
										<PagesDropdownMenu />
									</div>
								</li>

								<li className='group liContent'>
									<Link href='#' className='showNavigationSubmenu'>
										Blog <IoIosArrowDown className='text-xs mt-1' />
									</Link>
									<div className=' dropdownMenus' >
										<BlogDropdownMenu />
									</div>
								</li>

								<li className='group liContent pr-0'>
									<Link href='#' className='showNavigationSubmenu '>
										Elements <IoIosArrowDown className='text-xs mt-1' />
									</Link>
									<div className=' dropdownMenus' >
										<ElementsDropdownMenu />
									</div>
								</li>
							</ul>
						</section>
						<div id="line" className='border-l border-stone-300 h-4 ml-4 max-2lg:hidden'></div>
					</article>
				</article>

				<section className='flex text-sm'>
					<span className='pr-2'><HiOutlineLightBulb className='text-xl max-1lg:hidden' /> </span>
					<span className='pr-1'>Clearance</span> Up to 30% <span className='max-sb:hidden pl-1'>Off</span> <span className='sb:hidden pl-1'>...</span></section>
			</div>
			<div id='lineBelowNavMenus' style={{ width: '100%', backgroundColor: 'rgb(168, 167, 167,0.3)', height: '1px' }}></div>
		</nav>
	);

}