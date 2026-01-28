# 🧠 React Memory Game

A classic card matching game built with React. The objective is to find all pairs of matching cards in the fewest number of turns.

[🃏 **Live Demo**](https://memory-game-mgame.netlify.app/)

<h2> Gif </h2>![Memory game GIF](https://github.com/user-attachments/assets/efc230b9-f23e-4f4c-905e-f08cfc2e657b)

![Game Screenshot](./screenshot.gif)
## 🎮 How to Play

1.  Click on a card to flip it over.
2.  Select a second card to try and find a match.
3.  **Match:** If the images match, the cards stay flipped.
4.  **No Match:** If they don't match, they flip back after a short delay.
5.  The game ends when all pairs are found. Try to beat your best score (lowest turns)!

## ✨ Features

* **Card Shuffling:** Randomizes card positions at the start of every new game.
* **Turn Counter:** Tracks the number of moves the user has made.
* **Matching Logic:** Automatically detects matches and keeps pairs visible.
* **Auto-Reset:** Automatically flips cards back if no match is found after a delay.
* **Interactive UI:** Smooth card flip animations using CSS.

## 🛠 Built With

* **React** (Hooks: `useState`, `useEffect`)
* **JavaScript** (ES6+)
* **CSS3** (Grid Layout & Animations)
* **HTML5**

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
