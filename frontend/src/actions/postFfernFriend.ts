'server only';
import { z } from 'zod';

const UpdateFfernFriendsRequest = z.object({
  firstName: z.string(),
  lastName: z.string(),
  addressLineOne: z.string(),
  addressLineTwo: z.string().optional(),
  city: z.string(),
  postcode: z.string(),
  stateOrCounty: z.string(),
  country: z.enum(['US', 'NL', 'GB']),
});

export type UpdateFfernFriendsRequest = z.infer<
  typeof UpdateFfernFriendsRequest
>;

export const postFfernFriend = async (
  ffernFriendId: string,
  data: UpdateFfernFriendsRequest
): Promise<void> => {
  try {
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    console.log('username and password', username, password);
    const response = await fetch(
      `https://ffern-custodian.vercel.app/api/ffern-friends/${ffernFriendId}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${username}:${password}`
          ).toString('base64')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to update Ffern friend data: ${response.statusText}`
      );
    }
  } catch (error) {
    console.error('Error updating Ffern friend data:', error);
    throw error;
  }
};

export default postFfernFriend;
