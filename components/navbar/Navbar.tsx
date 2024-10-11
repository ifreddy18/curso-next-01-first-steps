import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import { ActiveLink } from '../active-link/ActiveLink'

const navItems = [
	{ path: '/about', text: 'About' },
	{ path: '/pricing', text: 'Pricing' },
	{ path: '/contact', text: 'Contact' },
]

export const Navbar = () => {
	return (
		<nav className="m-2 flex rounded bg-blue-800 bg-opacity-30 p-2">
			<Link href={''} className="flex items-center">
				<HomeIcon size={16} className="mr-2" />
				<span>Home</span>
			</Link>

			<div className="flex flex-1 justify-end">
				{
					/*
          <Link className="mr-2" href="/about">
					  About
          </Link>
          */

					navItems.map((navItem) => (
						<ActiveLink key={navItem.path} {...navItem} />
					))
				}
			</div>
		</nav>
	)
}
