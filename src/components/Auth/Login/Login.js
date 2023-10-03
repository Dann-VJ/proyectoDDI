import { View, Text } from 'react-native'
import React from 'react'
import { TextInput, Button } from 'react-native-paper';
import { styles } from './Login.styles';
import { globalStyles } from '../../../../styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authApi } from '../../../api/Auth';
import { useAuth } from '../../../hooks/useAuth'
import Toast from 'react-native-root-toast';
import { userController } from '../../../api/users';

export default function Login(props) {
  const { cambioAuth } = props
  const useAuthData = useAuth();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',

    },
    validationSchema: Yup.object({
      email: Yup.string().email(true).required(true),
      password: Yup.string().required(true).min(8, true),
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        const { email, password } = formData;
        const response = await authApi.login(email, password);
        console.log("response", response.jwt)
        const user = userController.getMe();
        console.log("user", user)     
      } catch (error) {
        Toast.show("Error al iniciar sesión", {
          position: Toast.positions.CENTER,
        });
      }
    }

  });

  

  return (
    <View>
      <TextInput
        label="Correo electronico"
        style={globalStyles.form.input}
        autoCapitalize='none'
        onChangeText={(text) => formik.setFieldValue("email", text)}
        value={formik.values.email}
        error={formik.errors.email}
      />
      <TextInput
        label="Contraseña"
        style={globalStyles.form.input}
        secureTextEntry
        onChangeText={(text) => formik.setFieldValue("password", text)}
        value={formik.values.password}
        error={formik.errors.password}
      />
      <Button
        mode="contained"
        style={globalStyles.form.buttonSubmit}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      >
        Iniciar sesión
      </Button>
      <Button
        mode="text"
        style={globalStyles.form.buttonText}
        onPress={cambioAuth}
      >
        Crear cuenta
      </Button>
    </View>
  )
}