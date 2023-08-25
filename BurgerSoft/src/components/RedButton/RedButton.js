import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from "./RedButton.style"; 

export default function RedButton({ title, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.button_text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
