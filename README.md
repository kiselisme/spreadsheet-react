# spreadsheet-react
React project for managing tables using Vite as the development server and JSON Server as the backend. It allows you to select tables with various functionalities.




**Getting Started**

• Prerequisites
Make sure you have Node.js installed on your computer before setting up the project.




__Installation__

1.Clone the repository or downloadthe project files:

git clone https://github.com/kiselisme/spreadsheet-react.git

cd tables-react

2.Install project dependencies:
npm install


__Running the Project__

• To run the project, we use the Vite development server and JSON Server to serve the backend data. You can start both of them simultaneously using the following command:
npm start

This will launch the frontend development server at localhost:3000 and the JSON Server at localhost:3001. The frontend will automatically reload whenever you make changes to the code.

__Development and Building__

• To run the Vite development server:
npm run client

• To run the JSON Server:
npm run db

• To lint the code with ESLint:
npm run lint

• To preview a production build locally:
npm run preview


__Project Structure__

The project is organized as follows:

• src: Contains the main source code for the React components and application logic.

• public: Contains the static assets like HTML and CSS files.

• db.json: Holds the backend data for JSON Server.



__Dependencies__

• json-server: A simple JSON-based backend server for prototyping and mocking.
• react: A JavaScript library for building user interfaces.
• react-dom: Provides DOM-specific methods that can be used at the top level of the application.
• react-select: A flexible and customizable replacement for the native <select> element.

