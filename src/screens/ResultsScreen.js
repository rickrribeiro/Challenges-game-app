import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function ResultsScreen({ players, onResetGame }) {
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
  const winner = sortedPlayers[0];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Game Over!</Text>
      </View>

      <View style={styles.winnerContainer}>
        <Text style={styles.winnerLabel}>🏆 Winner 🏆</Text>
        <Text style={styles.winnerName}>{winner.name}</Text>
        <Text style={styles.winnerScore}>{winner.score} points</Text>
      </View>

      <ScrollView style={styles.resultsContainer}>
        <Text style={styles.resultsTitle}>Final Scores</Text>
        {sortedPlayers.map((player, index) => (
          <View key={player.id} style={styles.resultCard}>
            <View style={styles.resultLeft}>
              <Text style={styles.resultRank}>#{index + 1}</Text>
              <Text style={styles.resultName}>{player.name}</Text>
            </View>
            <Text style={[
              styles.resultScore,
              player.score < 0 && styles.negativeScore
            ]}>
              {player.score} pts
            </Text>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.playAgainButton} onPress={onResetGame}>
        <Text style={styles.playAgainText}>Play Again</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 30,
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
  winnerContainer: {
    backgroundColor: '#FFD700',
    padding: 30,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#FFA000',
  },
  winnerLabel: {
    fontSize: 24,
    marginBottom: 10,
  },
  winnerName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  winnerScore: {
    fontSize: 24,
    color: '#666',
    fontWeight: '600',
  },
  resultsContainer: {
    flex: 1,
    padding: 20,
  },
  resultsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  resultCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  resultLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultRank: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2196F3',
    marginRight: 15,
    width: 40,
  },
  resultName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  resultScore: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  negativeScore: {
    color: '#F44336',
  },
  playAgainButton: {
    backgroundColor: '#2196F3',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  playAgainText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
