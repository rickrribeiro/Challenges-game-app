import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default function SetupScreen({ onStartGame }) {
  const [playerCount, setPlayerCount] = useState('2');
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy');

  const handleStartGame = () => {
    const count = parseInt(playerCount) || 2;
    if (count < 2 || count > 10) {
      alert('Please enter a number between 2 and 10');
      return;
    }
    onStartGame(count, selectedDifficulty);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Challenges Game</Text>
      <Text style={styles.subtitle}>Setup Your Game</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Number of Players (2-10)</Text>
        <TextInput
          style={styles.input}
          value={playerCount}
          onChangeText={setPlayerCount}
          keyboardType="number-pad"
          placeholder="Enter number of players"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Select Difficulty</Text>
        <View style={styles.difficultyContainer}>
          <TouchableOpacity
            style={[
              styles.difficultyButton,
              selectedDifficulty === 'easy' && styles.selectedButton,
              { backgroundColor: '#4CAF50' }
            ]}
            onPress={() => setSelectedDifficulty('easy')}
          >
            <Text style={[
              styles.difficultyText,
              selectedDifficulty === 'easy' && styles.selectedText
            ]}>
              Easy
            </Text>
            <Text style={styles.pointsText}>10 pts</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.difficultyButton,
              selectedDifficulty === 'medium' && styles.selectedButton,
              { backgroundColor: '#FF9800' }
            ]}
            onPress={() => setSelectedDifficulty('medium')}
          >
            <Text style={[
              styles.difficultyText,
              selectedDifficulty === 'medium' && styles.selectedText
            ]}>
              Medium
            </Text>
            <Text style={styles.pointsText}>20 pts</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.difficultyButton,
              selectedDifficulty === 'hard' && styles.selectedButton,
              { backgroundColor: '#F44336' }
            ]}
            onPress={() => setSelectedDifficulty('hard')}
          >
            <Text style={[
              styles.difficultyText,
              selectedDifficulty === 'hard' && styles.selectedText
            ]}>
              Hard
            </Text>
            <Text style={styles.pointsText}>30 pts</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.startButton} onPress={handleStartGame}>
        <Text style={styles.startButtonText}>Start Game</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 40,
    color: '#666',
  },
  section: {
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  difficultyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  difficultyButton: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    opacity: 0.7,
  },
  selectedButton: {
    opacity: 1,
    borderWidth: 3,
    borderColor: '#333',
  },
  difficultyText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  selectedText: {
    fontSize: 18,
  },
  pointsText: {
    color: 'white',
    fontSize: 14,
  },
  startButton: {
    backgroundColor: '#2196F3',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  startButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
