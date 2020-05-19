import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';

import AdviceScreenContent from './AdviceScreenContent';

export function AdviceScreen() {
  return (
    <View>
      <View>
        <Text style={styles.title}>Advices</Text>
      </View>
      <AdviceScreenContent />
    </View>
  );
}

var styles = StyleSheet.create({
  title: {
    fontSize: 40,
    margin: 20,
    textAlign: 'right',
  },
});
