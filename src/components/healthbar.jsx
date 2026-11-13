import React, { useState } from 'react';
import { Text, Clickable, SafeAreaView, View } from 'react-native';
import { intcon } from './src/components/internetconcheck.jsx';

function hpBar() {
    return (
        <SafeAreaView>
            <internetConnection style={{flex: 1, textAlign: 'left'}} />
            <Text style={{flex: 1, textAlign:'center',}}>Status is {status}</Text>
            <Text style={{flex:1, textAlign: 'right',}}>シ</Text>
        </SafeAreaView>
    )
};
export default hpBar