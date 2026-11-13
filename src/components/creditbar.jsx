import { Text, SafeAreaView, View, Clickable, Link, StyleSheet} from 'react-native';
import React, { useState } from 'react';
//app func
function BotBar() {
    const localstyling = StyleSheet.create({
        bgCol: {
            backgroundColor: 'black',
            outlineStyle: 'solid',
            outlineColor: 'blue',
        }
    });
    return (
        <SafeAreaView style={localstyling.bgCol}>
        </SafeAreaView>
    );
};
export default botBar
