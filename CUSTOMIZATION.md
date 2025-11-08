# Customization Guide

## Adding Your Own Challenges

You can easily add custom challenges by editing the `src/data/challenges.js` file.

### Challenge Format

Each challenge has three properties:
```javascript
{
  id: 1,                                    // Unique identifier
  text: "Your challenge description here",  // What the player must do
  points: 10                                // Points value (10, 20, or 30)
}
```

### Adding Challenges

1. Open `src/data/challenges.js`
2. Find the difficulty level you want to add to (easy, medium, or hard)
3. Add a new object to the array:

```javascript
export const challenges = {
  easy: [
    // ... existing challenges
    { id: 11, text: "Your new easy challenge", points: 10 },
  ],
  medium: [
    // ... existing challenges
    { id: 21, text: "Your new medium challenge", points: 20 },
  ],
  hard: [
    // ... existing challenges
    { id: 31, text: "Your new hard challenge", points: 30 },
  ],
};
```

### Challenge Ideas by Category

**Physical Challenges:**
- "Do 10 squats"
- "Touch your toes 5 times"
- "Walk backwards across the room"
- "Do a cartwheel or attempt one"

**Creative Challenges:**
- "Draw a picture with your eyes closed"
- "Make up a short rap about pizza"
- "Invent a new handshake"
- "Create a dance move and name it"

**Mental Challenges:**
- "Name 5 capital cities"
- "Count from 1 to 20 in another language"
- "Spell a word backwards"
- "Solve a simple math problem in your head"

**Social Challenges:**
- "Compliment each player"
- "Share an embarrassing story"
- "Tell everyone your favorite memory"
- "Make everyone laugh"

## Customizing Points

To change point values:
1. Open `src/data/challenges.js`
2. Modify the `points` property for each challenge
3. Update the UI in `src/screens/SetupScreen.js` if you change the difficulty point values

## Customizing Appearance

### Colors
Colors are defined in each screen's StyleSheet. Main colors used:
- Primary Blue: `#2196F3`
- Success Green: `#4CAF50`
- Warning Orange: `#FF9800`
- Danger Red: `#F44336`
- Background: `#f5f5f5`

### Fonts
Font sizes are defined in the styles. Main sizes:
- Title: 36px
- Heading: 24px
- Body: 18px
- Button: 20px

## Customizing Player Count

To change the min/max players:
1. Open `src/screens/SetupScreen.js`
2. Find the `handleStartGame` function
3. Modify the validation: `if (count < 2 || count > 10)`
4. Update the label text accordingly

## Adding New Features

### Timer for Challenges
Add a countdown timer for time-based challenges:
1. Use React Native's `Timer` or a library like `react-native-countdown-component`
2. Pass a `timeLimit` property with each challenge
3. Add timer UI to `ChallengeCard.js`
4. Auto-fail when time runs out

### Player Names
Allow custom player names:
1. Modify `SetupScreen.js` to include name inputs
2. Pass names to the `startGame` function
3. Use custom names instead of "Player 1", "Player 2", etc.

### Sound Effects
Add sounds for success/failure:
1. Install `expo-av`: `npm install expo-av`
2. Import audio files
3. Play sounds in `handleSuccess` and `handleFailure` in `GameScreen.js`

### Persistent Scores
Save game history:
1. Use `@react-native-async-storage/async-storage`
2. Save results when game ends
3. Add a history screen to view past games
