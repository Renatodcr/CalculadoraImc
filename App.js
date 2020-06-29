import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';

export default function App() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [valorImc, setValorImc] = useState('');
    const [estadoImc, setEstadoImc] = useState('');
     
    useEffect(() => {
        setPeso(parseFloat(0));
        setAltura(parseFloat(0));
        setValorImc(parseFloat(0));
        setEstadoImc('---');    
    }, []); 
    
    function handleSubmit() {
        let s = parseFloat(peso / (altura * altura)).toFixed(1);
        let r = '';

        if(s < 18.5){
            r = 'Magreza';   
        } else if(s < 25){
            r = 'Normal';  
        } else if(s < 30){
            r = 'Sobrepeso';  
        } else if(s < 40){
            r = 'Obesidade';  
        } else{
            r = 'Obesidade Grave';
        }

        setValorImc(s);
        setEstadoImc(r);  
        
  }
  
  function zerar(){
      setPeso(parseFloat(0));
      setAltura(parseFloat(0));
      setValorImc(parseFloat(0));
      setEstadoImc('---');  
  }

  return (
    <ScrollView>
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
      
            <View style={styles.campoResultado}>
              <Text style={styles.resultado}>{valorImc}</Text>
              <Text style={styles.resultadoImc}>{estadoImc}</Text>
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
            
        </KeyboardAvoidingView>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    form: {
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

    input:{
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
        backgroundColor: '#197bde',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 30,
    },

    zerar: {
        height: 62,
        backgroundColor: '#444',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22,
    },
    campoResultado: {
      width: 200,
      height: 200,
      borderRadius: 100,
      borderWidth: 9,
      borderColor: '#34e034',
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },

    resultado:{
        fontSize: 40,
        color: '#34e034',
    },

    resultadoImc: {
        marginTop: 8,
        fontSize: 16,
        color: '#34e034',
    },

});
