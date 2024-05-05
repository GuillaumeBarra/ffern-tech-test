import fetchFfernFriend, { GetFfernFriendResponse } from "@/api/fetchFfernFriend";
import { Content } from "./components/content/Content";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import postFfernFriend, { UpdateFfernFriendsRequest } from "@/actions/postFfernFriend";

export default async function Home() {
  const ffernFriend: GetFfernFriendResponse | null = await fetchFfernFriend('siobhan-1234');

  const submitData = async (friendId: string, values: UpdateFfernFriendsRequest) => {
    'use server'
    await postFfernFriend(friendId, values)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Content ffernFriend={ffernFriend} submitData={submitData}/>
      <Footer />
    </main>
  );
}
