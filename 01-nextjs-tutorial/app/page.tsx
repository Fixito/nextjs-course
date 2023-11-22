import Link from 'next/link';

export default function page() {
  return (
    <div>
      <h1 className='text-7xl'>Accueil</h1>
      <Link href='/about' className='text-2xl'>
        Page à propos
      </Link>
    </div>
  );
}
