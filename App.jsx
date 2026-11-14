import { styles } from './src/styles/style.js';
import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import HpBar from './src/components/healthbar.jsx';
import BotBar from './src/components/creditbar.jsx';

//app
function App() {
    return (
        <SafeAreaView style={styles.mainBody}>
            <HpBar style={{flex: 1, top: 0, width: 1,}}/>
            <ScrollView>
                <Text>The World's Best *not* Osint scraper!</Text>
                <Text>By your seal</Text>
            </ScrollView>
            <BotBar style={{flex: 1, bottom: 0, width: 1}} />
        </SafeAreaView>
    )
}
export default App