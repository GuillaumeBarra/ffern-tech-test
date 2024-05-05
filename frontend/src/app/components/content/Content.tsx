'use client'
import { useState, useEffect } from 'react';
import { LoadingBar } from './loader/LoadingBar';
import { Card } from './card/Card';
import { GetFfernFriendResponse } from '@/api/fetchFfernFriend';
import { UpdateFfernFriendsRequest } from '@/actions/postFfernFriend';

interface ContentProps {
  ffernFriend: GetFfernFriendResponse | null;
  submitData: (friendId: string, values: UpdateFfernFriendsRequest) => void;
}

export const Content = ({ ffernFriend, submitData }: ContentProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <LoadingBar />;
  }

  if (!ffernFriend) {
    return <div>Failed to load content, please try again!</div>;
  }

  return <Card ffernFriend={ffernFriend} submitData={submitData} />;
};
