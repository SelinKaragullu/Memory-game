# 🧠 React Memory Game

A classic card matching game built with React. The objective is to find all pairs of matching cards with the highest score and fewest moves.

[🃏 **Live Demo**](https://memory-game-mgame.netlify.app/)

GIF
![Memory game GIF](https://github.com/user-attachments/assets/d4ee05fc-1abf-4538-9644-cee86dfc0568)

## 🎮 How to Play

1.  **Start:** The game begins with a grid of face-down cards.
2.  **Flip:** Click on a card to reveal its value.
3.  **Match:** Select a second card.
    * If they match, you gain points and the cards stay open.
    * If they don't match, they flip back over.
4.  **Win:** The game ends when all pairs are found. A congratulatory message will appear with your total moves!

## ✨ Features

* **Score & Move Tracking:** Real-time dashboard showing current score and total moves made.
* **Win Message:** A dynamic modal component that appears upon game completion displaying the final move count.
* **Reset Functionality:** A "New Game" button to instantly reset the board and scores.
* **Component-Based UI:** Modular architecture separating the header, card grid, and game logic.
* **Interactive Card Flip:** Smooth CSS transitions triggered by React state changes.

## 🛠 Built With

* **React** (Functional Components)
    * `useState`: To manage game state (cards, flips, score, moves).
    * `useEffect`: To handle matching logic and timeouts.
* **JSX**: Modular components (`Card`, `GameHeader`, `WinMessage`).
* **CSS3**: For card styling and 3D flip animations (via dynamic classes).
* **JavaScript (ES6+)**: Logic for shuffling and comparing values.

## 🧠 Challenges & Learnings

Building this project reinforced several key React concepts:

* **Component Decomposition:** I learned how to break down the UI into reusable functional components like `Card.jsx` for individual items and `GameHeader.jsx` for the dashboard.
* **Props & Event Handling:** practiced passing data (like `score` and `moves`) down to child components and passing functions (like `onReset` or `onClick`) back up to the parent.
* **Conditional Rendering:** Used ternary operators to dynamically assign CSS classes (e.g., `` `card ${card.isFlipped ? "flipped" : ""}` ``) to control the visual state of the cards.
* **Game State Logic:** Managed complex state updates to track which cards are currently selected, matched, or need to be reset.

## 💻 Installation

To run this project locally:

```bash
# 1. Clone the repository
git clone [https://github.com/YOUR_USERNAME/memory-game.git](https://github.com/YOUR_USERNAME/memory-game.git)

# 2. Navigate to the project directory
cd memory-game

# 3. Install dependencies
npm install

# 4. Start the application
npm start
