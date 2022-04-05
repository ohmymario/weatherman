# Weatherman

A Weather App using React with a simple interface only showing relevant information. The application was intended to be light and minimal with the only visual aspect that changes is the background animations.

**Link to project:** https://weatherman-demo.netlify.app/

![desktop view of weatherman](https://drive.google.com/uc?export=view&id=1PMk3SP9KmdC22WZNfRsDN7XBEufA4gME)

## How It's Made:

**Tech used:** React, Nivo, OpenWeather API, Styled-Components, JavaScript

I was looking to build a quick glance weather app similar to what Google has on their search engine. This was before knowing Gatsby which might have been a better pick for a single page app. I wanted to just build something with what I knew and figure things out along the way.

The OpenWeather API was nice to work with even though actually searching with it only using a form sometimes yielded incorrect results. The data was mildly parsed and then sent to each separate component for further processing. There was a lot of data that came back from one query so I didn't want to deal with all of that in each component over and over again.

The search box is custom and something I enjoy the look of. When clicked it "opens up", otherwise it tucks itself back in till interacted with again. It might not be bulletproof but I created it myself even though I could have relied on some already made code.

What took a bulk of my time to implement was the graph from nivo. I used the line chart component from here. Getting the graph working took several small functions from the raw data returned from the OpenWeather API. Another thing I ran across while testing some locations is maintaining a graph even if some data just isn't there.

## Optimizations

I had some ideas I wanted to implement given the time. First would have been a dark mode. I've been seeing them popup on several websites. Maybe even tie it to the system time and change the website dynamically.

I also wanted to work on better displaying the location a user searched. When searching for "San Francisco", the API brought back the country (US) rather than perhaps the state. I could have added another API to take care of this but was worried about bogging down search speed.

## Lessons Learned:

Working with any API and getting data back is just the beginning. Molding that data into what you need takes a lot of trial and error. So many small functions to just get one piece working.

Another thing I had to consider was that sometimes an API won't have the data you want. So error handling is a must. Might not be perfect but getting as many use cases patched up really makes the experience a whole lot nicer for the user.

I'm excited to revisit this site in the future and see what more I could add or even revamp the whole look to something more exciting! 😀

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Coffee Roasters:** https://github.com/ohmymario/coffee-roasters

**Pizza Site:** https://github.com/ohmymario/pizza-site

**Huddle Landing Page:** https://github.com/ohmymario/huddle-landing-page


