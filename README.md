# JavaScript Project Mode ## Learning Goals

- Design and architect features across a frontend
- Communicate and collaborate in a technical environment
- Integrate JavaScript and an external API
- Debug issues in small- to medium-sized projects
- Build and iterate on a project MVP

## Introduction

Welcome to JavaScript Project Mode!

You’ve worked so hard to get here and have learned a ton. Now it's time to bring it all together!

For this project, you're going build a Single Page Application (**SPA**).
Building this application will be challenging because it will integrate
everything you've learned up to this point. Your frontend will be
built with HTML, CSS, and JavaScript and will communicate with a
public API.


### Project Requirements

1. Your app must be a HTML/CSS/JS frontend that accesses data from a public API.
   All interactions between the client and the API should be handled
   asynchronously and use JSON as the communication format.

2. Your entire app must run on a single page. There should be NO redirects. In
   other words, your project will contain a single HTML file.

3. Some interactivity is required. This interactivity needs to incorporate at least 3 separate event listeners. This could be as simple as adding a "like"
   button or adding comments. These interactions do not need to persist after reloading the page.
   
### Stretch Goals

4. Set up a JSON server in your project to persist your app's interactivity.

## Strategy, Timeline, and Tips

### Planning

- Plan out your features
- Develop user stories
  - “As [ a user ], I want [ to perform this action ] so that [ I can accomplish this goal ].”
  - Features should not need you there to explain them to users
- Plan out the structure of your JSON requests

### Project Pitches

Before you start working on your project, you'll pitch your project idea to your
instructors for approval and feedback. 

For your project pitch, you should include:
- The basic story of your application
1. Song lyrics app that display and play the song

- The core features of your MVP
1. Users should see a list of lyrics. 
2. Users should be able to pick a specific set of lyrics to display in detail.

- The API data you'll be using and how you'll use it
https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search
GET=> https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime


- Challenges you expect to face
Not solid on code, especially after receive json data.

- How you are meeting the requirements of the project

Feel free to send this pitch to your instructor via slack asynchronously. 

### MVP ASAP

- Build a Minimum Viable Product (MVP) as quickly as possible.
  - Pick an API and explore it early on to ensure it will work for your need

### Instructor Guidance

You should strive to solve problems independently, but you also shouldn't waste
your time stuck on a problem. A good guideline for a small bug is the rule of
10s:

- 10 minutes debugging the code
- 10 minutes using Google and StackOverflow to try to find an answer
- 10 minutes asking your fellow students for help
- Asking an instructor

If you seek out instructor guidance on your design from the start, they might
help steer you into design and architectural decisions that will help you down
the road. That will also give the instructors context for what your app is
supposed to do, so you won't need to explain everything to them when asking for
help debugging.

### Guidelines for Staying Organized

**Write down** the decisions you make about your project. This will not only
help you think more clearly, it will also help you communicate your project to
instructors when asking for help. In addition to writing everything down, we
also recommend the following to help stay organized and on track:

- Describe/sketch your ideas (use diagrams!).

- Start by creating a frontend directory with the basic files you'll need
- Next, build enough code to get some API data to work with. Don't worry about
  building all of your async code yet, just get to the point where you can
  access one endpoint on an API, then start working on getting that data
  displayed.
- Then, continue to build additional async code and frontend features.
- Continue building features one by one.

Check in with your instructors to make sure your scope and timeline are
manageable.

