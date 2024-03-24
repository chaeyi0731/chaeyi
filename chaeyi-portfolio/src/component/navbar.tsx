import Link from 'next/link';

interface NavbarProps {
  activeMenu: string;
}

export default function Navbar({ activeMenu }: NavbarProps) {
  const categories = [
    { name: 'About Me', path: '/aboutme' },
    { name: 'Stack', path: '/stack' },
    { name: 'Project', path: '/project' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="navbar">
      {categories.map((category) => (
        <Link key={category.path} href={category.path} passHref>
          <span className={activeMenu === category.name ? 'active' : ''}>{category.name}</span>
        </Link>
      ))}
    </div>
  );
}