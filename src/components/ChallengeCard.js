import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ChallengeCard({ challenge, onSuccess, onFailure }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.pointsBadge}>
          <Text style={styles.pointsText}>{challenge.points} pts</Text>
        </View>
        <Text style={styles.challengeText}>{challenge.text}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.successButton]}
          onPress={onSuccess}
        >
          <Text style={styles.buttonText}>✓ Success</Text>
          <Text style={styles.buttonSubtext}>+{challenge.points} pts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.failureButton]}
          onPress={onFailure}
        >
          <Text style={styles.buttonText}>✗ Failed</Text>
          <Text style={styles.buttonSubtext}>-{challenge.points} pts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    width: '100%',
    minHeight: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    marginBottom: 30,
    borderWidth: 3,
    borderColor: '#2196F3',
  },
  pointsBadge: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#2196F3',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  pointsText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  challengeText: {
    fontSize: 22,
    textAlign: 'center',
    color: '#333',
    lineHeight: 32,
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  successButton: {
    backgroundColor: '#4CAF50',
  },
  failureButton: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonSubtext: {
    color: 'white',
    fontSize: 14,
    opacity: 0.9,
  },
});
