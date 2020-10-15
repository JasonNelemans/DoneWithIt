# Done With It

♻️ Get rid of the stuff you are done with.

A React Native app, in development.
Please read [How to use](#How-to-use) to render project on local machine.

## Table of contents

• [Technologies used](#Technologies-used)\
• [Future features](#Future-features)\
• [Goal of project](#Goal-of-project)\
∙ [How to use](#How-to-use)

## Technologies used

React Native.

Third party libraries: Formik and Yup.

## Future features

The future features of this project will include but not limited to:

- MyListings screen, to show listings published by user dynamically.\
- Send messages dynamically to other users.
- Publish to store.

## Goal of project

Goal of this project is to deeply come to understand React Native and related technologies, best practices and complex code structures.

More specifically, this project taught me how to:

- Use the essential tools for React Native development
- Properly structure React Native projects
- Run and debug React Native apps
- Understand and troubleshoot common errors
- Work with the core components and APIs
- Build layouts with Flexbox
- Build reusable components
- Apply beautiful styles to components
- Get input from the user
- Build forms with Formik
- Implement data validation with Yup
- Publish apps to Expo
- Apply React Native best practices
- Write clean code like a pro

## How to use

Clone the [server repo](https://github.com/JasonNelemans/DoneWithIt-server) and change the IP address to your own in config/development.json (Change 555.555.5.5 to your own IP). \
\
Clone this project and fill in your machine's IP address in app/api/client.js at const yourIP\
\
This way the React Native project and the server can communicate on your local machine.\
\
Please take note that push notifications will only work on an actual mobile device. Emulators are unable to store pushTokens and give pushnotifications.
