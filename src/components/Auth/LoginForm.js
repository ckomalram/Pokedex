import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, Keyboard } from 'react-native'

import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginForm() {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false ,
        onSubmit: (data) => console.log('Formulario enviado...' , data)
    })

    return (
        <View  >
            <Text style={styles.title}>INICIAR SESIÓN</Text>
            <TextInput style={styles.input}
                placeholder="Nombre de usuario"
                autoCapitalize='none'
                value={formik.values.username}
                onChangeText={(text)=> formik.setFieldValue('username', text)}
            />
            <TextInput style={styles.input}
                placeholder="Contraseña"
                autoCapitalize='none'
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={(text)=> formik.setFieldValue('password', text)}
            />

            <Button
                title='INGRESAR'
                onPress={formik.handleSubmit}
            />

            <Text style={styles.error}>
                {formik.errors.username}
            </Text>
            
            <Text style={styles.error}>
                {formik.errors.password}
            </Text>

        </View>
    )
}

function initialValues() {

    return {
        username: '',
        password: ''
    };
}

function validationSchema() {
    return {
        username: Yup.string().required('El usuario es obligatorio'),
        password: Yup.string().required('La contraseña es obligatoria')
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 15
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    error:{
        textAlign: 'center',
        color: "red",
        marginTop: 10
    }

})