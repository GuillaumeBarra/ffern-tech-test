import { Button } from "@/components/ui/button"
import Image from "next/image"

export const LockedButton = ({text}: {text: string}) => {
    return (
        <Button disabled={true} className="flex flex-row justify-between bg-ashLight text-ash w-full h-14 cursor:pointer">
                {text}
                <Image src="/padlock.svg" alt="chevron-right" width={16} height={16} />
        </Button>
    )
}

