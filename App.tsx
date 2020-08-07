import { StatusBar } from 'expo-status-bar';
import React, { useState, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Picker from './components/ModalPicker'

interface IFruit {
  value: number;
  label: string;
}

export default function App() {
  const [selectedFruit, setSelectedFruit] = useState()
  const fruits: IFruit[] = [
    {value: 0, label: 'apple'},
    {value: 1, label: 'orange'},
    {value: 2, label: 'banana'},
    {value: 3, label: 'strawberry'},
    {value: 4, label: 'water melon'},
    {value: 5, label: 'pear'}
  ]

  const selectedFruitLabel = useMemo(() => {
    const index = fruits.findIndex(fruit => fruit.value === selectedFruit);

    if (index >= 0){
      return fruits[index].label;
    }
    
  },[selectedFruit, fruits])

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Picker 
          inputStyle={styles.picker} 
          onChange={setSelectedFruit} 
          pickerValues={fruits} 
          title="Select a fruit" 
          placeholder="Which fruit?" 
        />
      </View>

        <Text style={styles.footerText} >
          {`You have been selected: ${selectedFruitLabel || ''}`}
        </Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257e5',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  pickerContainer: {
    padding: 40,
    width: '100%'
  },
  picker: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
    width: '100%'
  },
  footerText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
