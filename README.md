# TravelAI

TravelAI is a full-stack travel planning app that turns a natural-language prompt into a trip plan using the Groq API and a lightweight React frontend.

Example prompts include:
- "Plan a 5-day trip to Kyoto with food and culture highlights"
- "Create a weekend itinerary for Lisbon with budget-friendly activities"
- "Suggest a romantic 3-day getaway in Bali"

## Features

- AI-powered trip generation using Groq's Llama model
- React + Vite frontend for entering travel prompts
- Express backend API for handling trip requests
- JSON response format for generated trip content
- Production-ready static frontend serving from the backend

## Tech Stack

- Frontend: React, Vite
- Backend: Node.js, Express
- AI: Groq SDK
- Environment management: dotenv

## Project Structure

```text
travelAI/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── prompts/
│   ├── routes/
│   ├── services/
│   ├── .env.example (optional, not included)
│   └── server.js
├── frontend/
│   ├── src/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── package.json
├── README.md
└── .gitignore
```

## Prerequisites

- Node.js 18+
- npm
- A Groq API key

## Environment Setup

Create a `.env` file inside the `backend` folder:

```env
GROQ_API_KEY=your_groq_api_key_here
PORT=5000
```

## Installation

From the project root, install dependencies for both apps:

```bash
cd backend
npm install

cd ../frontend
npm install
```

## Run in Development

Start the backend API:

```bash
cd backend
npm start
```

In a separate terminal, start the frontend:

```bash
cd frontend
npm run dev
```

The frontend will usually run on:
- http://localhost:5173

The backend API endpoint is:
- POST http://localhost:5000/api/trip/plan

Example request body:

```json
{
  "prompt": "Plan a 4-day trip to Tokyo for a first-time visitor"
}
```

## Production Build

Build the frontend for production:

```bash
cd frontend
npm run build
```

Then start the backend from the project root:

```bash
cd backend
node server.js
```

The backend serves the built frontend from `frontend/dist`, so the app can be accessed via the backend server on:
- http://localhost:5000

## Root Scripts

The root `package.json` includes utility scripts:

```bash
npm run build
npm run start
```

`npm run build` installs frontend dependencies and builds the Vite app. `npm run start` launches the backend server.

## Notes

- The backend uses the Groq endpoint configured in `backend/config/groqClient.js`.
- The trip generation logic lives in `backend/services/groqService.js` and the prompt template is in `backend/prompts/tripPrompt.js`.
- The frontend calls the API using `POST /api/trip/plan` from `frontend/src/services/api.js`.

## License

This project is for educational/demo purposes unless otherwise specified.
