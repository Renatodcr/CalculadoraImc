import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native';

export default function App() {
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [valorImc, setValorImc] = useState();
    const [estadoImc, setEstadoImc] = useState('');
    const [cor, setCor] = useState('#ccc');

    useEffect(() => {
        setPeso(parseFloat(0));
        setAltura(parseFloat(0));
        setValorImc(parseFloat(0));
        setEstadoImc('---');
    }, []);

    function handleSubmit() {
        let s = parseFloat(peso / (altura * altura)).toFixed(1);
        let r = '';
        let c = '';

        if (s < 18.5) {
            r = 'Magreza';
            c = '#f4d52b';
        } else if (s < 25) {
            r = 'Normal';
            c = '#34e034';
        } else if (s < 30) {
            r = 'Sobrepeso';
            c = '#f49f2b';
        } else if (s < 40) {
            r = 'Obesidade';
            c = '#e34528';
        } else {
            r = 'Obesidade Grave';
            c = '#881368';
        }

        setValorImc(s);
        setEstadoImc(r);
        setCor(c);

    }

    function zerar() {
        setPeso(parseFloat(0));
        setAltura(parseFloat(0));
        setValorImc(parseFloat(0));
        setEstadoImc('---');
        setCor('#34e034');
    }

    return (
        <>
            <StatusBar barStyle="default" />
            <View style={{
                width: '100%',
                height: 80,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',  
                    color: '#310946',                  
                }}>
                    Calcular IMC
                    </Text>
            </View>
            <View style={styles.container}>
                <ScrollView>
                    <View style={{
                        flex: 1,
                        width: 200,
                        height: 200,
                        borderRadius: 100,
                        borderWidth: 9,
                        borderColor: cor,
                        padding: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        paddingHorizontal: 30,
                        marginTop: 10,                        
                    }}>
                        <Text style={{
                            fontSize: 40,
                            color: cor,
                        }}>
                            {valorImc}
                        </Text>
                        <Text style={{
                            marginTop: 8,
                            fontSize: 16,
                            color: cor,
                        }}>
                            {estadoImc}
                        </Text>
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.label}>Seu Peso</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="00.0 kg"
                            placeholderTextColor="#999"
                            keyboardType="numeric"
                            value={peso}
                            onChangeText={setPeso}
                        />

                        <Text style={styles.label}>Sua Altura</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="0.00 m"
                            keyboardType="numeric"
                            placeholderTextColor="#999"
                            value={altura}
                            onChangeText={setAltura}
                        />

                        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                            <Text style={styles.buttonText}>Calcular</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={zerar} style={styles.zerar}>
                            <Text style={styles.buttonText}>Zerar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    form: {
        flex: 1,
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 20,
    },

    label: {
        marginTop: 15,
        fontWeight: 'bold',
        color: '#aaa',
        marginBottom: 6,
        fontSize: 17,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        textAlign: 'center',
        fontSize: 26,
        color: '#444',
        height: 44,
        marginBottom: 10,
        borderRadius: 3,
    },

    button: {
        height: 62,
        backgroundColor: '#310946',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 30,
        elevation: 6,
    },

    zerar: {
        height: 62,
        backgroundColor: '#444',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 30,
        elevation: 6,
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22,
    }

});
