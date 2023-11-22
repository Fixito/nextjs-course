import Link from 'next/link.js';

export default function page() {
  return (
    <div>
      <h1 className='text-7xl'>About</h1>
      <Link href='/' className='text-2xl'>
        Page d&apos;accueil
      </Link>
    </div>
  );
}
