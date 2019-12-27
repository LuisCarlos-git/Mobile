import React from 'react';
import { 
    View, 
    Text, 
    Image, 
    StyleSheet,
    TextInput,
    TouchableOpacity, 
} from 'react-native';

import logo from '../assets/aircnc.png'


export default function Login(){
    return(
        <View style={styles.container}>
            <Image source={logo} />
            

            <View style={styles.form}>
                <Text style={styles.label}>SEU E-MAIL *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder= 'digite seu email'
                    placeholderTextColor= '#333'
                    keyboardType= 'email-address'
                    autoCapitalize= 'none'
                    autoCorrect={false}
                />

                <Text style={styles.label}>TECNOLOGIAS *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder= 'Tecnologias do seu interesse'
                    placeholderTextColor= '#333'
                    autoCapitalize= 'words'
                    autoCorrect={false}
                />   

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Encontrar spots</Text>
                </TouchableOpacity>             
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    label: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#222',
        marginBottom: 8,
        marginTop: 10,
    },


    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 20,
    },

    input: {
        fontSize: 20,
        borderWidth: 2,
        borderColor: '#aaa',
        paddingHorizontal: 30,
        borderRadius: 10,
        marginBottom: 20,
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#555',
        borderRadius: 10,
        marginTop: 20,
        height: 50,
        backgroundColor: '#fff'
    },

    textButton: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
    }
});