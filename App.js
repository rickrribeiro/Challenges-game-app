import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SetupScreen from './src/screens/SetupScreen';
import GameScreen from './src/screens/GameScreen';
import ResultsScreen from './src/screens/ResultsScreen';

export default function App() {
  const [gameState, setGameState] = useState('setup'); // setup, playing, results
  const [players, setPlayers] = useState([]);
  const [difficulty, setDifficulty] = useState('easy');

  const startGame = (playerCount, selectedDifficulty) => {
    const newPlayers = Array.from({ length: playerCount }, (_, i) => ({
      id: i + 1,
      name: `Player ${i + 1}`,
      score: 0,
    }));
    setPlayers(newPlayers);
    setDifficulty(selectedDifficulty);
    setGameState('playing');
  };

  const endGame = () => {
    setGameState('results');
  };

  const resetGame = () => {
    setPlayers([]);
    setDifficulty('easy');
    setGameState('setup');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {gameState === 'setup' && (
        <SetupScreen onStartGame={startGame} />
      )}
      {gameState === 'playing' && (
        <GameScreen 
          players={players}
          setPlayers={setPlayers}
          difficulty={difficulty}
          onEndGame={endGame}
        />
      )}
      {gameState === 'results' && (
        <ResultsScreen 
          players={players}
          onResetGame={resetGame}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
