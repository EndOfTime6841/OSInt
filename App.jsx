import { styles } from './src/styles/style.js';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import HpBar from './src/components/healthbar.jsx';
import BotBar from './src/components/creditbar.jsx';

//app
function App() {
    return (
        <SafeAreaProvider>
        	<SafeAreaView style={styles.mainBody}>
            	<HpBar style={{flex: 1, top: 0, width: 1,}}/>
            	<ScrollView>
              	    <Text>The World's Best *not* Osint scraper!</Text>
                	<Text>By your seal</Text>
            		</ScrollView>
            	<BotBar style={{flex: 1, bottom: 0, width: 1,}} />
        	</SafeAreaView>
        </SafeAreaProvider>
    )
}
export default App