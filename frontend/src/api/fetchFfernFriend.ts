'server only';
import { z } from 'zod';

const GetFfernFriendResponse = z.object({
  id: z.string(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  addressLineOne: z.string().optional(),
  addressLineTwo: z.string().optional(),
  city: z.string().optional(),
  postcode: z.string().optional(),
  stateOrCounty: z.string().optional(),
  country: z.enum(['US', 'NL', 'GB']).optional(),
  subscribedAt: z.number().optional(),
  createdAt: z.number(),
  updatedAt: z.number().optional(),
});

export type GetFfernFriendResponse = z.infer<typeof GetFfernFriendResponse>;

export const fetchFfernFriend = async (
  ffernFriendId: string
): Promise<GetFfernFriendResponse | null> => {
  try {
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    const response = await fetch(
      `https://ffern-custodian.vercel.app/api/ffern-friends/${ffernFriendId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${username}:${password}`
          ).toString('base64')}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch Ffern friend data: ${response.statusText}`
      );
    }

    const responseData = await response.json();
    const parsedData = GetFfernFriendResponse.parse(responseData);
    return parsedData;
  } catch (error) {
    console.error('Error fetching Ffern friend data:', error);
    return null;
  }
};

export default fetchFfernFriend;
