import React, { useState } from 'react';
import { Text, Clickable, SafeAreaView, View } from 'react-native';
import { intcon } from './src/components/internetconcheck.jsx';

function hpBar() {
    return (
        <SafeAreaView>
            <internetConnection />
            <Text>Status is {status}</Text>
            <Text style={{flex:1, textAlign: 'right',}}>シ</Text>
        </SafeAreaView>
    )
};
export default hpBar