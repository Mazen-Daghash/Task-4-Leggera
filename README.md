#  Login Clone-UI

functional backend, built with React, Node.js, Express, and Tailwind CSS.

## Features

- Responsive Spotify-like login UI
- Secure authentication flow
- Remember me functionality
- Password visibility toggle
- Error handling

## Technologies Used

- React
- Node.js
- Express
- Tailwind CSS
- React Icons


### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mazen-Daghash/Task-4-Leggera.git
   cd Task-4-Leggera/spotify-clone
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Install backend dependencies:
   ```bash
   cd server
   npm install
   cd ..
   ```

### Running the Application

#### Option 1: Run Frontend and Backend Separately

1. Start the backend server:
   ```bash
   cd server
   node server.js
   # Keep this terminal running
   ```

2. In a new terminal, start the frontend:
   ```bash
   npm start
   # or
   yarn start
   ```

#### Option 2: Run Both Together

1. Install `concurrently` (if not already installed):
   ```bash
   npm install -g concurrently
   ```

2. Start both frontend and backend with one command:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Test Credentials

Use the following credentials to test the login functionality:

- **Email:** test@example.com
- **Password:** password123
