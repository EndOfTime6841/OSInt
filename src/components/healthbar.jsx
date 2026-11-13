import React, { useState } from 'react';
import { Text, Clickable, SafeAreaView, View } from 'react-native';

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