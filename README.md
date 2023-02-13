# Where To Next?
React.js Frontend


Where To Next? is a travel planning app that allows a user to create a trip and add places they want to visit while they are on that trip. 
 Within the trip show page -or rather where you can see the details of the trip and the places you want to go - there is a search bar that accesses a third-party API called <a href="https://serpapi.com/"> SerpApi </a> which scrapes Google results based on your search query and location input. 

# Technology used:
- <a href="https://github.com/robynspaulding/where_to_next_react_frontend">React.js frontend - This Repo!</a>
- <a href="https://github.com/robynspaulding/where_to_next_api">Ruby on Rails backend </a>
- <a href="https://www.npmjs.com/package/react-datetime-picker">React DateTime Picker</a>


## Installation

```bash
git clone https://github.com/robynspaulding/where_to_next_react_frontend.git
npm install
```

## Usage

```bash
npm run dev
```

You'll need to have the backend code <a href="https://github.com/robynspaulding/where_to_next_api">Where To Next Rails backend API </a> running on http://localhost:3000.

You can view the app on http://localhost:5173.

## Future Plans

- I’m still working on is the the time zone of my dateTime Picker - first it was rendering at eight hours behind my local time. I was able to get to a point where it is rendering Eastern Time and will display that so users at least know the timezone it is in, but I’m hoping to find a solution that will allow for the timezone to be local to the user or perhaps the location of the trip. 

- Styling to have a more polished and professional look. 

