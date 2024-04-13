# Frontend Technical Test

The purpose of this technical test is to assess your ability as a frontend developer. 

Finishing is not required — see where you get to with the time that you have.

## The Remit

Ffern is launching an influencer programme called "Ffern Friends". Ffern friends are sent links that invite them to join the waiting list. The page the link directs to allows Ffern Friends to join the ledger without joining the waiting list. To add a Ffern Friend to the ledger, we need to collect their shipping information. 

You are building the page the Ffern Friends link directs to.

### Design Requirements

[The deisgn file prepared by our deisgner is here.](https://www.figma.com/file/GXvrhMOyMYUw8vT92aq7PX/Tech-Test-for-Ffern-Frontend-Dev?type=design&node-id=0%3A1&mode=design&t=OO1avfvkYfGPisWq-1)

- Implement the designs on the file prepared by the deisgner.
- Focus on mobile. If you have time, make it desktop friendly.
- Implement hover, active, and focus states for the relevant components.
- If you have time, add some thoughtful animations. 
- Wow us with your css jazz. 

### Technical Requirements

- Fork this respository and create a fresh project using either Gatsby or Next. 
- Typescript is not essential, but strongly preferred.
- If using typescript, use Zod to type any data structures that cannot be statically typed.
- Use React Query for data fetching and requests, if you feel comfortable doing so.
- Use tailwind to style React components, if you feel comfortable doing so.
- Gracefully handle errors related to data fetching and form submission.
- The implementation should only use features supported by iOS 15.4 and above.
- Currently, there is only one Ffern Friend. The id is siobhan-1234.
- Host the site on Vercel.

#### API

All endpoints use Basic Authentication.  

The credentials required to authorise access are:  

Username: ffern-tech-test  
Password: iloveauthentication  

The endpoints are:  

Request type: GET  
Base Url: https://ffern-custodian.vercel.app  
Endpoint: /ffern-friends/[ffern-friend-id]  

Response body:  

``` typescript
type GetFfernFriendResponse = {
  firstName: string;
  lastName: string;
  addressLineOne: string;
  addressLineTwo?: string;
  city: string;
  postcode: string;
  stateOrCounty: string;
  country: "US" | "NL" | "GB";
  profileImageUrl: string;
  subscribedAt: number; // UNIX timestamp 
}
```

Request type: POST  
Base Url: https://ffern-custodian.vercel.app  
Endpoint: /ffern-friends/[ffern-friend-id]  

Expected request body:

``` typescript
type UpdateFfernFriendsRequest = {
  firstName: string;
  lastName: string;
  addressLineOne: string;
  addressLineTwo?: string;
  city: string;
  postcode: string;
  stateOrCounty: string;
  country: "US" | "NL" | "GB"; 
}
```

Responses:

200

``` typescript
type UpdateFfernFriendsSuccessResponse = {
  firstName: string;
  lastName: string;
  addressLineOne: string;
  addressLineTwo?: string;
  city: string;
  postcode: string;
  stateOrCounty: string;
  country: "US" | "NL" | "GB";
  createdAt: number; // UNIX timestamp
  updatedAt: number; // UNIX timestamp 
  subscribedAt: number; // UNIX timestamp 
}
```

40X/50X

``` typescript
type UpdateFfernFriendsErrorResponse = {
  error: string;
  message: string;
}
```

Be warned! The developers who implemented the endpoint were a shady lot. It is a little... buggy. Make sure to validate responses before consuming them in your application.


## Final Remarks

Don't worry if you don't get through everything. And have fun! This is an opportunity to show off your frontend skills. We want a flavor of what you can do.

After you are done, send us the hosted URL, and a link to the repository. Niall and Owen need access (niallpaterson & beadlespouse on github.)

We will then go through the code with you.

If you have any questions, reach out to either Owen (owen@ffern.co) or Niall (niall@ffern.co).


 


