# Z-CV: The no-nonsense CV generator!
A simple CV generator which lets the user input their details, then preview their CV.
This project was created with React JS and MUI.

### [Live Demo](https://zl90.github.io/cv-builder)

## Screenshots
### Desktop View
![Desktop View](https://zl90.github.io/cv-builder/desktop-view.png)

### Mobile View
![Mobile View](https://zl90.github.io/cv-builder/mobile-view.png)

## Overview
I built this app to get familiar with the following concepts:
- Setting up a development environment for React projects
- React - building forms using Class Components
- React - maintaining and manipulating state
- Using [MUI](https://mui.com/), a Component library for React
- [Deploying](https://medium.com/@isharamalaviarachchi/how-to-deploy-your-react-app-into-github-pages-b2c96292b18e) React apps to Github Pages

### Tech used
- Javascript
- Webpack
- npm
- Prettier + ESLint
- ![MUI](https://mui.com/)
- ![React JS](https://reactjs.org/)
- ![uniqid](https://www.npmjs.com/package/uniqid) (Generating unique keys for lists of React Components)

## Lessons learned
- I quickly learned that rendering lists of React Components doesn't work without a safe method of generating unique keys. For this, I found a useful tool called ![uniqid](https://www.npmjs.com/package/uniqid).
- I learned the importance of carefully organising my code into React Components, instead of trying to build entire Components on one level of nesting. The latter approach made my code difficult to read, and actually caused a lot of errors when trying to render these bulky Components.
- Prop drilling makes React difficult to work with. I will be fixing this in the future by using the [Context API](https://reactjs.org/docs/context.html).
