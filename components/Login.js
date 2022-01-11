import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    onLogin() {
        const { username, password } = this.state;
        (async () => {
            return fetch('https://uv.dev-dtelecoms.net/backend/web/api/token', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            })
                .then(async(response) => {
                    //console.log(response.id);
                    await AsyncStorage.setItem('username', response.id);
                    this.props.navigation.replace('Home');
                })
        })();
    }
    render() {
        return (
            <View style={styles.container}>
                {/*<Image style={styles.image} source={require("../assets/snack-icon.png")} />*/}

                <StatusBar style="auto" />
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Username"
                        placeholderTextColor="#E7A51F"
                        onChangeText={(username) => this.setState({username})}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Mot de passe"
                        placeholderTextColor="#E7A51F"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password})}
                    />
                </View>
                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={this.onLogin.bind(this)}>
                    <Text style={styles.loginText}>Connexion</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    /*image: {
      marginBottom: 40,
    },*/

    inputView: {
        backgroundColor: '#3E59A5',
        borderRadius: 5,
        width: '70%',
        height: 45,
        marginBottom: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },

    textInput: {
        height: 50,
        flex: 1,
    },

    loginBtn: {
        width: '40%',
        borderRadius: 5,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: '#E7A51F',
    },
    loginText: {
        color: '#112864',
    },
});
