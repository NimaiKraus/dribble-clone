import { NavLinks } from '@/costants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import AuthProviders from './AuthProviders';

const Navbar = () => {
    const session = {};
    return (
        <nav className='flexBetween navbar'>
            <div className="flex-1 flexStart gap-10">
                <Link href={'/'}>
                    <Image
                        alt='Flexibble'
                        src={'/logo.svg'}
                        width={113}
                        height={43}
                    />
                </Link>

                <ul className='hidden xl:flex text-small gap-7'>
                    {NavLinks.map((navLink) => (
                        <Link className='hover:scale-110 hover:font-[550] transition' href={navLink.href} key={navLink.key}>
                            {navLink.text}
                        </Link>
                    ))}
                </ul>
            </div>

            <div className="flexCenter gap-4">
                {session
                ? (
                    <>
                        <p>Profile picture</p>
                        <Link href={'create-project'}>
                            create project
                        </Link>
                    </>
                ) : (
                    <AuthProviders />
                )}
            </div>

        </nav>
    )
}

export default Navbar;
