import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <Link href="/question2">
      <div className="test">
        Ergebnis
      </div>
    </Link>
    
  );
}
