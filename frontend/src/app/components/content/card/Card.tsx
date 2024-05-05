import Image from "next/image";
import { CardForm } from "../../form/Form";
import { GetFfernFriendResponse } from "@/api/fetchFfernFriend";
import { UpdateFfernFriendsRequest } from "@/actions/postFfernFriend";

interface CardProps {
    ffernFriend: GetFfernFriendResponse;
    submitData: (friendId: string, values: UpdateFfernFriendsRequest) => void;
  }

export const Card = ({ ffernFriend, submitData }: CardProps) => {
    return (
        <div className="flex w-[90%] bg-sandLight rounded-lg p-4 z-10 flex-col space-y-4 shadow-md -mt-20 -mb-5">
            <Image className='rounded-full flex w-1/2 self-center my-2' src="/images/card-image.png" alt="Card Video" width={300} height={300} />
            <div className='flex w-1/2'>Dear {ffernFriend.firstName},</div>
            <div>We are delighted to invite you to join Ffern Friends, our new community of like minded creators and artists.</div>
            <div>Here’s how it works:</div>
            <ul className='list-square pl-4 space-y-4'>
                <li>You’ll skip the waiting list and be added straight to the Ffern ledger</li>
                <li>As a ledger member, you’ll receive a made-to-order bottle of natural eau de parfum each season</li>
                <li>Your bottle will arrive one week ahead of its launch, just before the solstices and equinoxes</li>
                <li>You’ll also be given a unique link to our waiting list, if you decide to share Ffern within your community</li>
            </ul>
            <div>If this sounds like something you may be interested in, we’d love it if you could fill out your details below, and we’ll send you our latest fragrance.</div>
            <div>Sincerely,</div>
            <div>Salma & the Ffern team</div>
            <CardForm ffernFriend={ffernFriend} submitData={submitData} />
            <Image className='pt-4' src="/ffern-dark.svg" alt="Ffern" width={50} height={17} />
        </div>
    );
};