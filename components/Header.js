import Image from 'next/image';
import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="relative w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4 overflow-hidden">
        <Image
          src="/mktoho.webp"
          alt="mktoho"
          className="absolute top-0 left-0 w-full aspect-square"
          width={48}
          height={48}
        />
      </div>
      <p className="text-2xl dark:text-white text-center">
        <Link href="/" legacyBehavior>
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
