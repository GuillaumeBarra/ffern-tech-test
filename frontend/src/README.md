# Ffern frontend task

## Context

This solution implements the design given as well as linking it to the given endpoints to get existing data and upload the filled out form.

## Design

The design provided focused on the mobile view, I therefore decided to do the same, and did not deal with responsiveness for the sake of time.

I used the shadcn/ui components in order to save some time dealing with functionality. I picked this “library” since it is extremely extendable, both in terms of styles and functionality.

The font used in the Figma design also seems to be a paid font. I managed to find a free version but could not get it to apply, upon inspecting the file I believe the free version I downloaded is just incorrect.

The rounded image used in the design is also a video, I wasn’t sure what the expected behaviour was and just implemented it as an image.

## Data

I implemented functions on the server side to handle data fetching and uploading:

- `fetchFfernFriend` in the `api` folder deals with the fetching
- `postFfernFriend` in the `actions` folder deals with posting the new data

## Main challenge:

### Floating label behaviour in the input

I considered using the MUI library for this but it is incredibly painful to work with for the styling, I decided it would be a fun challenge to implement myself.

The way it works now is by placing the given label inside the input, before applying some size and position changes with a quick transition when the input is focused. This also takes into account whether there is text inside the input so that it doesn’t overlap the input when it is out of focus.

## Extending the work

### Better error handling in the form

The design did not cover what would happen in case of an error, I built out a structure for error handling, and will currently show a small error message if an error occurs when submitting the form.

Ideally I would have liked to implement some kind of toast showing up, and a more useful error message depending on what happened.

### Responsiveness

Perhaps the biggest issue with the current implementation is the lack of responsiveness, I decided to focus on features as I thought it was more interesting for this task, but that means that the implementation, although functional on all screen sizes, will look best on mobile.