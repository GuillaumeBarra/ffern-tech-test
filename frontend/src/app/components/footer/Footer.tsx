import Link from 'next/link';
import { companyLinks, productLinks, socialLinks } from './links';
import Image from 'next/image';

export const Footer = () => {
    return (
        <div className="flex flex-col w-full items-start pt-10 p-4 justify-center bg-sand text-ash">
            <div className="flex flex-col space-y-2">
                {productLinks.map((link, index) => (
                    <Link href="/" key={index}>{link}</Link>
                ))}
                </div>
            <div className="flex flex-col space-y-2 pt-4">
                {companyLinks.map((link, index) => (
                    <Link href="/" key={index}>{link}</Link>
                ))}
            </div>
            <div className="flex flex-row space-x-4 pt-4">
                {socialLinks.map((link, index) => (
                    <Link href="/" key={index}>
                        <Image src={link.icon} alt={link.name} width={24} height={24} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

