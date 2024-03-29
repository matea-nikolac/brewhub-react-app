# BrewHub React App
<img width="1437" alt="Screenshot 2023-11-21 at 15 20 55" src="https://github.com/matea-nikolac/brewhub-react-app/assets/62067357/501275cb-83af-402b-a36e-da41ee4f9378">

<img width="1430" alt="Screenshot 2023-11-29 at 10 43 24" src="https://github.com/matea-nikolac/brewhub-react-app/assets/62067357/3d6c7658-b572-45d9-b14f-7a9ccbb5cf13">

## Description
This React app is my project for creating a BrewHub platform, where users can explore and discover various types of brews. The app is built with React and utilizes external APIs to showcase details about different brews.

## Deployment link
https://main--illustrious-naiad-be01ed.netlify.app/

## Technologies Used
* CSS
* HTML
* React
* JavaScript
* JSX
* Axios
* Bootstrap
  
## Brief Requirements
* Consume a public API
* Have several components
* The app can have a router - with several "pages"

## Planning
Before commencing the coding process, a wireframe was designed to outline the essential pages and features of BrewHub. The wireframe includes:

* Home Page: The homepage features a navigation bar with links for "Home," "Explore Brews," and "About." It provides users with easy navigation and access to the main sections of the app.
* Explore Brews Page: Users can explore a variety of brews, including details such as type, flavor profile, and origin. The page allows filtering based on brew type and search functionality.
* Specific Brew Page: Clicking on a specific brew redirects users to a dedicated page showcasing detailed information, including ingredients, brewing process, and user reviews.
  
<img width="944" alt="Screenshot 2023-11-21 at 15 54 22" src="https://github.com/matea-nikolac/brewhub-react-app/assets/62067357/6e6de0ba-dd17-41b1-b5da-cb70a8318e47">

## Build Process
The project started with setting up the router configuration in the App component. The `BrowserRouter` component from React Router was used to handle the routing functionality. Different routes were defined for the home page, explore brews page, specific brew page, error page, loading page, and a page not found component.

### Router configuration

<img width="764" alt="Screenshot 2023-11-21 at 15 35 19" src="https://github.com/matea-nikolac/brewhub-react-app/assets/62067357/e9e254a1-07b3-4ac8-ae69-63f4ecd9a039">

### Initial Data Fetching

The `HotCoffeeIndex.js` and `IcedCoffeeIndex.js` components utilize the `useEffect` hook to make an initial API request to fetch data about hot coffees. The retrieved data is then sorted alphabetically by title before being displayed to the user.

<img width="757" alt="Screenshot 2023-11-21 at 15 37 24" src="https://github.com/matea-nikolac/brewhub-react-app/assets/62067357/a5493e88-f714-40ca-aa2c-aa872836cd8b">

### Search Functionality
The component features a search bar that allows users to dynamically filter the displayed coffees based on their search queries. The `handleChange` function is triggered on input change, updating the query state and triggering a re-render with the filtered results.

<img width="647" alt="Screenshot 2023-11-21 at 15 38 27" src="https://github.com/matea-nikolac/brewhub-react-app/assets/62067357/dbc41f4b-a26f-4543-bc52-048b0d7a4778">

### Coffee Cards
Each coffee is presented as a card with an associated image, title, and a link to view more details. The images are dynamically loaded based on the coffee's ID, providing a visually appealing representation.

<img width="771" alt="Screenshot 2023-11-21 at 15 57 16" src="https://github.com/matea-nikolac/brewhub-react-app/assets/62067357/351538c4-c131-4405-a4f2-23ec74884be1">
