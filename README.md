# DOM-API-and-JS-Events-Project
NBA Player Stats Dashboard

This is a small front-end project that displays NBA player statistics in an interactive dashboard. It’s built using plain HTML, CSS, and JavaScript — no frameworks. The goal was to create something simple, fast, and clean that still shows how to work with data, events, and themes on the client side.

What it does
	•	Lets you search for players by name or team
	•	Lets you filter players by team using a dropdown
	•	Supports light and dark mode with your preference saved
	•	Displays player stats like points, rebounds, and assists in a responsive table

How it works

The player data is stored in a JavaScript array of objects. When the page loads, the script dynamically populates the table and team dropdown.
Search and filter actions update the table in real time.
The dark mode button toggles a CSS class and remembers your setting in localStorage.

Tech used
	•	HTML for structure
	•	CSS for styling and layout
	•	Vanilla JavaScript for logic and interactivity

Running it

You don’t need a server or build tools.
Just clone or download the repo and open index.html in your browser.

git clone https://github.com/your-username/nba-stats-dashboard.git
cd nba-stats-dashboard
open index.html

index.html     → markup
styles.css     → styling
script.js      → functionality
README.md      → this file
