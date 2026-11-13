import { styles } from './src/styles/style.js';
import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import HpBar from './src/components/healthbar.jsx';
import BotBar from './src/components/creditbar.jsx';

//app
function App() {
    return (
        <SafeAreaView style={styles.mainBody}>
            <HpBar />
            <ScrollView>
                <Text>The World's Best *not* Osint scraper!</Text>
                <Text>By your seal</Text>
            </ScrollView>
            <BotBar />
        </SafeAreaView>
    )
}
export default App