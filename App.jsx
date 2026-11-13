import { styles } from './src/styles/style.js';
import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
//app
function App() {
    return (
        <SafeAreaView style={styles.mainBody}>
            <hpBar />
            <ScrollView>
                <Text>The World's Best *not* Osint scraper!</Text>
                <Text>By your seal</Text>
            </ScrollView>
            <botBar />
        </SafeAreaView>
    )
}
export default App