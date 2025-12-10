🛍️ Amazonia - E-commerce Portal
A fully functional Amazon-style e-commerce clone featuring user authentication, product catalog with search and filtering, shopping cart management, and a responsive UI.

Features
Product Catalog: Display a list of products with details like title, price, and rating.

Search & Filtering: Users can search products and filter them by category.

Shopping Cart: Add, update, and remove items from a persistent shopping cart.

User Authentication: Basic Login and Signup pages for user management.

Responsive Design: Utilizes Tailwind CSS for a clean, mobile-friendly interface.

React Development: Built using React and TypeScript for a scalable, type-safe application.

⚙️ Project Structure
The core application is a React project bootstrapped with Vite, using TypeScript.

public/index.html: The main HTML file which loads the React application and includes external dependencies (React, React-DOM, etc.) via an importmap.

src/index.tsx: The main entry point for the React application, mounting the App component to the DOM.

src/App.tsx: Sets up the application's routing using react-router-dom and context providers for Authentication and Cart functionality. It also handles the conditional rendering of the Navbar.

src/types.ts: Defines core TypeScript interfaces for the application's data models, including Product, CartItem, and User, as well as a Category enum.

package.json: Lists project dependencies (react, react-dom, lucide-react, react-router-dom) and development dependencies (typescript, vite, @vitejs/plugin-react).

🛠️ Technology Stack
Framework: React v19

Language: TypeScript

Bundler/Dev Server: Vite

Styling: Tailwind CSS (loaded via CDN)

Routing: React Router DOM (v7)

Icons: Lucide React

🚀 Getting Started
To run this project locally, ensure you have Node.js and npm or yarn installed.

Clone the repository:

Bash

git clone [your-repo-link]
cd amazonia-e-commerce-portal
Install dependencies:

Bash

npm install
# or
yarn install
Setup Environment Variables: Create a file named .env in the root directory and add your API keys. (Note: The provided .env.local contains a placeholder for a Gemini API Key, which you may need for advanced features).

Code snippet

# .env
VITE_GEMINI_API_KEY=YOUR_ACTUAL_API_KEY
Run the development server:

Bash

npm run dev
# or
yarn dev
The application will typically be available at http://localhost:5173.

📦 Build for Production
To create a production-ready build:

Bash

npm run build
# or
yarn build