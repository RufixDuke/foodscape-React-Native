import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ErrorMessage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                *Passwords must be at least 6 characters
            </Text>
            <Text style={styles.text}>
                *It should be a mix of letters, numbers and symbols
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: "#828282",
        fontSize: 11,
    },
    container: {
        marginBottom: 10,
    },
});

export default ErrorMessage;
