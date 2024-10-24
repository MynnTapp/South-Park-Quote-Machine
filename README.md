# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# South Park Quote Machine

## Project Overview
The **South Park Quote Machine** is a React-based web application that fetches random quotes from the South Park TV show using an external API. Users can display a new random quote and its corresponding character by clicking a button. Additionally, users can share the quote on Twitter using the provided Twitter share link.

## Features
- Fetches a random South Park quote from an API.
- Displays the quote and the character who said it.
- Allows users to generate a new quote with a button click.
- Provides an option to tweet the current quote.

## Screenshot
![Screenshot of the Quote Machine] (![Screenshot (56)](![Screenshot (56)](https://github.com/user-attachments/assets/9140caa6-7548-467b-b52a-147dfd138170)
)
)

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **CSS**: For styling the application.
- **Fetch API**: To retrieve quotes from an external API.
- **Vite**: A fast development server and build tool for modern web applications.

## Installation and Setup
To get a local copy of the project up and running, follow these steps:

### Prerequisites
Make sure you have the following installed on your system:
- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/MynnTapp/south-park-quote-machine.git
   cd south-park-quote-machine
   ```
   
2. install the dependencies:
   ```bash
   npm install
   ```
   or if you are using yarn:
   ```bash
   yarn install
   ```
3. start the development server:
   ```bash
   npm run dev
   ```
   or with yarn
   ```bash
   yarn dev
   ```

### Usage

Once the application is running:

Click the "Change Quote" button to get a new South Park quote.
Click the Twitter logo to share the quote on Twitter.

### Project Structure
```bash
/src
  ├── /components            # Main component for the quote machine
  └── QuoteMachine.css
  └── QuoteMachine.jsx 
  ├── App.jsx                 # Main app component
  ├── main.jsx                # Entry point
          # CSS styles for the Quote Machine
```


          



