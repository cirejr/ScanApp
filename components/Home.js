import * as React from 'react';
import {StatusBar} from "expo-status-bar";
import {StyleSheet, View, SafeAreaView, ScrollView, TouchableOpacity, Text, Button} from 'react-native';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { NavigationContainer } from '@react-navigation/native';
import Scan from './Scan'

function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                hello username,
                merci de cliquer sur le boutton ci dessous pour scanner <SimpleLineIcons                                name='arrow-down-circle' size = {24} style ={{marginTop : 20}} />
            </Text>
            <Button
                containerStyle={styles.button}
                onPress={() => navigation.navigate('Scan')}
                title={"Scanner"}
            />
        </View>
    );
}

export default Home

const styles = StyleSheet.create({

    container: {
        flex : 1,
        alignItems : 'center',
        padding : 10
    },
    text : {
        paddingTop : 40,
        height : 150,
        fontSize : 24,
        textAlign : 'center'
    },
    button : {
        flex : 1,
        justifyContent : 'center',
        width :'100%',
        marginTop : 40
    }

})