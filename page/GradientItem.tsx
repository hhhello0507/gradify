import React from 'react';
import {Alert, Button, Clipboard, StyleSheet, Text, ToastAndroid, TouchableOpacity, View} from "react-native";
import {Gradient} from "../type/Gradient.ts";
import LinearGradient from "react-native-linear-gradient";
import Spacer from "../component/Spacer.tsx";

interface GradientItemProps {
    gradient: Gradient
}

const GradientItem = ({gradient}: GradientItemProps) => {
    console.log(gradient);
    const copyToClipboard = async (text: string) => {
        Clipboard.setString(text);
        ToastAndroid.show("Copied to clipboard!", 3);
    };
    return (
        <View style={styles.container}>
            <LinearGradient style={styles.gradient} colors={[gradient.start_color, gradient.end_color]}/>
            <View style={styles.labelContainer}>
                <Text style={styles.gradientText}>{gradient.name}</Text>
                <Spacer/>
                <TouchableOpacity onPress={() => copyToClipboard(gradient.start_color)}>
                    <Text style={styles.gradientText}>{gradient.start_color}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => copyToClipboard(gradient.end_color)}>
                    <Text style={styles.gradientText}>{gradient.end_color}</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 8,
        gap: 4
    },
    gradient: {
        alignSelf: 'stretch',
        height: 200,
        borderRadius: 20
    },
    labelContainer: {
        flexDirection: 'row',
        gap: 4
    },
    gradientText: {
        fontSize: 18,
        marginLeft: 4,
    }
})

export default GradientItem;
