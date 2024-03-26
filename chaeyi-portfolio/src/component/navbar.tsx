import Link from 'next/link';

interface NavbarProps {
  activeMenu: string;
}

export default function Navbar({ activeMenu }: NavbarProps) {
  const categories = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/aboutme' },
    { name: 'Skill', path: '/skill' },
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
