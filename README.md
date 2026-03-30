# Chatbot Project (React + Vite)

A simple chatbot UI built with React and Vite.
It lets users send messages and get instant bot replies using the `supersimpledev` chatbot package.

## Features

- Chat conversation UI with user and bot message bubbles
- Enter key or **Send** button to submit messages
- Auto-scroll to the newest message
- Unique IDs for each message using `crypto.randomUUID()`
- Avatar images for user and robot messages

## Tech Stack

- React 19
- Vite 6
- ESLint 9
- `supersimpledev` (chatbot response provider)

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint on the project

## Project Structure

```text
chatbot-project/
├── public/
├── src/
│   ├── assets/
│   │   ├── robot.png
│   │   └── user.png
│   ├── components/
│   │   ├── ChatInput.jsx
│   │   ├── ChatInput.css
│   │   ├── ChatMessage.jsx
│   │   ├── ChatMessage.css
│   │   ├── ChatMessages.jsx
│   │   └── ChatMessages.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## How It Works

1. `App.jsx` stores chat state (`chatMessages`) and passes it to child components.
2. `ChatInput.jsx` reads user input, appends a user message, and requests a bot response via `Chatbot.getResponse(inputText)`.
3. `ChatMessages.jsx` renders all messages and auto-scrolls when new messages arrive.
4. `ChatMessage.jsx` handles per-message UI (alignment, avatar, bubble style) based on sender type.

## Notes

- Bot replies are generated locally through the `supersimpledev` package API used in the app.
- Messages are stored in component state only (no backend/database persistence).

## Possible Improvements

- Prevent sending empty messages
- Add loading/typing indicator for bot responses
- Persist chat history (local storage or backend)
- Add tests for component behavior
