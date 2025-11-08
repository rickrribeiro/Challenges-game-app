import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { getRandomChallenge } from '../data/challenges';
import ChallengeCard from '../components/ChallengeCard';

export default function GameScreen({ players, setPlayers, difficulty, onEndGame }) {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [currentChallenge, setCurrentChallenge] = useState(getRandomChallenge(difficulty));
  const [roundNumber, setRoundNumber] = useState(1);

  const currentPlayer = players[currentPlayerIndex];

  const handleSuccess = () => {
    const updatedPlayers = [...players];
    updatedPlayers[currentPlayerIndex].score += currentChallenge.points;
    setPlayers(updatedPlayers);
    nextTurn();
  };

  const handleFailure = () => {
    const updatedPlayers = [...players];
    updatedPlayers[currentPlayerIndex].score -= currentChallenge.points;
    setPlayers(updatedPlayers);
    nextTurn();
  };

  const nextTurn = () => {
    const nextPlayerIndex = (currentPlayerIndex + 1) % players.length;
    
    if (nextPlayerIndex === 0) {
      // Completed a full round
      setRoundNumber(roundNumber + 1);
    }
    
    setCurrentPlayerIndex(nextPlayerIndex);
    setCurrentChallenge(getRandomChallenge(difficulty));
  };

  const handleEndGame = () => {
    Alert.alert(
      'End Game',
      'Are you sure you want to end the game?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'End Game', onPress: onEndGame }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInfo}>
          <Text style={styles.roundText}>Round {roundNumber}</Text>
          <Text style={styles.difficultyBadge}>{difficulty.toUpperCase()}</Text>
        </View>
        <TouchableOpacity style={styles.endButton} onPress={handleEndGame}>
          <Text style={styles.endButtonText}>End Game</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.playersContainer}>
        <Text style={styles.playersTitle}>Players</Text>
        {players.map((player, index) => (
          <View
            key={player.id}
            style={[
              styles.playerCard,
              index === currentPlayerIndex && styles.activePlayerCard
            ]}
          >
            <Text style={styles.playerName}>
              {player.name}
              {index === currentPlayerIndex && ' 👈'}
            </Text>
            <Text style={[
              styles.playerScore,
              player.score < 0 && styles.negativeScore
            ]}>
              {player.score} pts
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.challengeContainer}>
        <Text style={styles.currentPlayerText}>
          {currentPlayer.name}'s Turn
        </Text>
        <ChallengeCard
          challenge={currentChallenge}
          onSuccess={handleSuccess}
          onFailure={handleFailure}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#2196F3',
  },
  headerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  roundText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 15,
  },
  difficultyBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  endButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
  endButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  playersContainer: {
    maxHeight: 200,
    padding: 15,
  },
  playersTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  playerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  activePlayerCard: {
    borderColor: '#2196F3',
    backgroundColor: '#E3F2FD',
  },
  playerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  playerScore: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  negativeScore: {
    color: '#F44336',
  },
  challengeContainer: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  currentPlayerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
});
