import { UpdateFfernFriendsRequest } from "@/actions/postFfernFriend";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type ConfirmButtonProps = {
  text: string;
  isLoading: boolean;
};

export const ConfirmButton = ({ text, isLoading }: ConfirmButtonProps) => {
  return (
    <Button type="submit" className="flex flex-row justify-between bg-terracotta text-white w-full h-14 cursor:pointer">
      {isLoading ? 'Sending...' : text}
      <Image src="/chevron-right.svg" alt="chevron-right" width={16} height={16} />
    </Button>
  );
};