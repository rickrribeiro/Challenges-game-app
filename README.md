# Challenges Game App

A React Native mobile game where N players take turns completing challenges to earn points.

## Description

This is a fun party game app where:
- Multiple players (2-10) can participate
- Each player takes turns receiving a challenge card
- Players choose difficulty level at the start: **Easy**, **Medium**, or **Hard**
- Successfully completing a challenge earns points (+10, +20, or +30)
- Failing a challenge loses points (-10, -20, or -30)
- The player with the highest score at the end wins!

## Features

- 🎮 Support for 2-10 players
- 🎯 Three difficulty levels (Easy, Medium, Hard)
- 📊 Real-time score tracking
- 🏆 Winner announcement and final rankings
- 🎨 Clean, intuitive UI
- 📱 Responsive design for mobile devices

## Game Modes

### Easy Challenges (10 points)
Simple, fun challenges like:
- Say something nice about another player
- Do 5 jumping jacks
- Sing a song
- Tell a joke

### Medium Challenges (20 points)
More challenging tasks like:
- Do 10 push-ups
- Name 10 countries in 20 seconds
- Hold a plank for 30 seconds
- Speak for 30 seconds without saying "um"

### Hard Challenges (30 points)
Difficult challenges like:
- Do 20 push-ups without stopping
- Name 20 animals in 30 seconds
- Hold a wall sit for 1 minute
- Do 30 jumping jacks then 10 burpees

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- Expo Go app (for testing on physical device)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/rickrribeiro/Challenges-game-app.git
cd Challenges-game-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your device:
   - Scan the QR code with Expo Go app (Android) or Camera app (iOS)
   - Or press `a` for Android emulator
   - Or press `i` for iOS simulator

## Project Structure

```
Challenges-game-app/
├── src/
│   ├── components/
│   │   └── ChallengeCard.js    # Challenge display component
│   ├── screens/
│   │   ├── SetupScreen.js      # Game setup (players & difficulty)
│   │   ├── GameScreen.js       # Main gameplay screen
│   │   └── ResultsScreen.js    # Final scores and winner
│   └── data/
│       └── challenges.js       # Challenge data and logic
├── App.js                      # Main app component
├── app.json                    # Expo configuration
├── package.json                # Dependencies
└── babel.config.js             # Babel configuration
```

## How to Play

1. **Setup**: Enter the number of players (2-10) and select difficulty
2. **Play**: Each player takes turns:
   - Read the challenge card
   - Attempt the challenge
   - Mark as Success (earn points) or Failed (lose points)
3. **End Game**: Click "End Game" when you want to finish
4. **Results**: View final scores and the winner!

## Technologies Used

- **React Native** - Mobile app framework
- **Expo** - Development platform
- **JavaScript** - Programming language

## Future Enhancements

- [ ] Custom challenge creation
- [ ] Timer for time-based challenges
- [ ] Player profiles and avatars
- [ ] Sound effects and animations
- [ ] Multiplayer over network
- [ ] Challenge categories
- [ ] Persistent game history

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## License

This project is open source and available under the ISC License.
