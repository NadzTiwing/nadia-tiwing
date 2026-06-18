export interface NavLink {
	href: string;
	label: string;
}

export const navLinks: NavLink[] = [
	{ href: '/', label: 'About' },
	{ href: '/resume', label: 'Resume' },
	{ href: '/work-projects', label: 'Work' },
	{ href: '/fun-projects', label: 'Fun' },
	{ href: '/blogs', label: 'Blogs' }
];
