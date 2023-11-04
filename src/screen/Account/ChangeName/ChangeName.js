import { View, Text, Image } from 'react-native'
import React from 'react'
import { Button, IconButton, TextInput } from 'react-native-paper'
import { globalStyles } from '../../../../styles';
import { userController } from '../../../api/users';
import { useAuth } from '../../../hooks/useAuth';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Toast from 'react-native-root-toast';
import { useNavigation } from '@react-navigation/native';
import { styles } from './ChangeName.styles';

export default function ChangeName() {

  const { user, upDateUser } = useAuth();
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      Firstname: user.Firstname || '',
      Lastname: user.Lastname || ''
    },
    validationSchema: Yup.object({
      Firstname: Yup.string().required(true),
      Lastname: Yup.string().required(true)
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        await userController.updateUser(user.id, formData)
        upDateUser('Firstname', formData.Firstname)
        upDateUser('Lastname', formData.Lastname)
        navigation.goBack();
        Toast.show('Datos actualizados con exito.', {
          position: Toast.positions.CENTER
        })
      } catch (error) {
        // console.log(error)
        Toast.show('Datos incorrectos.', {
          position: Toast.positions.CENTER
        })
      }
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          label="Nombre(s)"
          style={globalStyles.form.input}
          autoCapitalize='none'
          onChangeText={(text) => formik.setFieldValue('Firstname', text)}
          value={formik.values.Firstname}
          error={formik.errors.Firstname}
        />
        <TextInput
          label="Apellidos"
          style={globalStyles.form.input}
          autoCapitalize='none'
          onChangeText={(text) => formik.setFieldValue('Lastname', text)}
          value={formik.values.Lastname}
          error={formik.errors.Lastname}
        />
        <Button
          mode="contained"
          style={globalStyles.form.buttonSubmit}
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
        >
          Guardar
        </Button>
      </View>
    </View>
  )
}