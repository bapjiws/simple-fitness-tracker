This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). As its data endpoint, it's running [Strapi CMS](https://strapi.io/) with a Graphql interface (we're running a [contanerised](https://github.com/strapi/strapi-docker) version of Strapi on an EC2 instance on AWS). UI-wise, the app is relying on the components from [Material UI](material-ui.com).

The app is currently deployed to [Heroku](https://your-weight-slippery-slope.herokuapp.com/), but since the EC2 instance is running on HTTP and Heroku is running on HTTPS, your browser will most likely block the mixed content :) 

## How to run this thing locally, then

To start in dev mode, run 
```js
npm run start
```

To start the production build, run
```js
npm run build
npx serve -s build
```

## Known bugs
- When clicking on measurements in the table to update them, it is possible to change the date to that of another already existing measurement and thus run into an error when trying to save (updating the measurement with its orignal date or a new date that doesn't clash works as expected, however).
- When the measurements' table content overflows, the header srolls with the rest of the table instead of staying put (oops).
