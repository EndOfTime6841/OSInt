import { styles } from './src/styles/style.js';
import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
//app
function App() {
    return (
        <SafeAreaView style={styles.mainBody}>
            <scrollview
            <Text>The World's Best *not* Osint scraper!</Text>
            <Text>By your seal</Text>
            <botBar />
        </SafeAreaView>
    )
}
export default App