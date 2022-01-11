import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Constants from 'expo-constants';

export default class Scan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            scanned: false,
            hasPermission: ''
        };
    }
    async componentDidMount() {
        await this.getPermissionsAsync();
    }

    getPermissionsAsync = async() => {
        const {
            status
        } = await Permissions.getAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === 'granted'
        });
    };

    onScan() {
        const { nom } = this.state;
        (async () => {
            return fetch('https://uv.dev-dtelecoms.net/backend/web/api/checkpoint', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nom: username,
                }),
            })
                .then(async(response) => {
                const getId = await AsyncStorage.getItem('username');
                console.log(getId);
            })
        })();
    }
    render() {
        const {
            hasCameraPermission,
            scanned
        } = this.state;

        if (hasCameraPermission === null) {
            return <Text > Requesting
                for camera permission < /Text>;
        }
        if (hasCameraPermission === false) {
            return <Text > No access to camera < /Text>;
        }
        return (

            <View style={styles.container}>
                <BarCodeScanner onBarCodeScanned = {
                    scanned ? undefined : this.handleBarCodeScanned}
                                style={StyleSheet.absoluteFillObject}
                />
                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={this.onScan.bind(this)}>
                    <Text style={styles.loginText}>envoyer les informations </Text>
                </TouchableOpacity>
            </View>
        );
    }

    handleBarCodeScanned = ({
                                type,
                                data
                            }) => {
        this.setState({
            scanned: true
        });
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        padding : 10,
    },

    /*image: {
      marginBottom: 40,
    },*/
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




