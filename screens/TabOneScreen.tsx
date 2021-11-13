import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../config/colors';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
      <LinearGradient colors={['#8400ff', '#2d067c', '#020024']} style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <TouchableOpacity>
        <Image 
          source={require('../assets/images/themeLogo2.png')}
          style={{
            width: 120,
            height: 120,
          }}
        />
        </TouchableOpacity>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Dark Theme</Text>
      </LinearGradient>
  );
}

