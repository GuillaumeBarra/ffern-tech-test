import Image from "next/image";

export const Header = () => {
return (
    <div className="h-48 w-full bg-cover bg-no-repeat bg-[url('/images/header.png')] bg-right-bottom">
        <div className="flex items-center justify-between">
            <Image src="/ffern.svg" width={120} height={40} alt="Ffern Logo" className="p-4" />
            <Image src="/burger-menu.svg" height={60} width={60} alt="Menu" className="p-4" />
        </div>
    </div>
);
}