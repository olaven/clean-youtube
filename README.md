# clean-youtube 

## 🕐 📖 🕑    >   🕐 🗑 🕑 

In many cases, __learning something new__ is essentially a question of what youtube video to watch first. __Youtube__ is, however, not a platform particlary well suited for the kind of attention and focusing that learning requires; it feeds on __short attention span__ and __non-productive__ behavioural patterns. 

__This app__ is supposed to be a small step in the right direction. For me and hopefully for you too. 

## Basic Features
* Search for a video 
* Watch _the video_ (nothing else!)

## Get The App Running 

__Let's get__ the client running on your computer! I am assuming familiarity with working in the command line 💻 
* Clone this [repository](https://help.github.com/articles/cloning-a-repository/)
* Have [Yarn](https://yarnpkg.com/en/docs/install) and [Node](https://nodejs.org/en/) installed 
* Navigate to the repository and run the following: 
    * ```yarn install ```
    * ```yarn start ```

__The browser__ should now open. However, if you try to search something, the console will display an error. This is because no key has ben assigned to verify your requests to the [Youtube API](https://developers.google.com/youtube/v3/getting-started). To get a key, do the following: 
* Follow the Setup-guide on _the bottom half_ of [this](https://developers.google.com/api-client-library/javascript/start/start-js) page 
* When you have your key, go back to the project folder on your computer.
* Create a file called .env.local 
* add ```REACT_APP_YOUTUBE_API_KEY=*The key you just got*```
* make sure that ".env.local" is listed in the ".gitignore"-file. This makes git ignore the file and the key stays on your computer. 

__If you__ refresh the app, search should work 🐶 If you run into any trouble, contact me and I will do my best to help you out 👍

__It is__ also possible to build an electron-app to run locally on your machine by running ```yarn electron-pack ```. My understanding of this is limited right now, your build should appear in the /dist-directory. Thanks to @Kitze for [this helpful guide](https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3)!



## More Info 
This app is build [ReactJS](https://reactjs.org/), as my first project with this technology. Therefore, it will probably not be perfect at first attempt. If you want to make it better, just create a pull request, critisize, comment, contribute to conversations and everything else. All help and feedback is both welcomed and encouraged 🐶 