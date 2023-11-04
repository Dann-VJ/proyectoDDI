import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { List } from 'react-native-paper';
import { map } from 'lodash';
import { accountMenu } from '../../components/Menu/menu.data';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
  const navigation = useNavigation();

  return (
    <List.Section>

      <List.Subheader style={styles.title}>Menú</List.Subheader>
      {map(accountMenu, (menu) => (
        <List.Item
          key={menu.title}
          title={menu.title}
          description={menu.description}
          titleStyle={styles.title}
          descriptionStyle={styles.description}
          left={(props) => <List.Icon {...props} icon={menu.leftIcon} color='#79B547' />}
          onPress={() => navigation.navigate(menu.screen)}
        />
      ))}

    </List.Section>
  )
}

const styles = StyleSheet.create({
  subheader: {
    fontWeight: 'bold',
    fontSize: 20,
    color: "#79B547",
  },
  title: {
    color: "#fff",
    fontWeight: 'bold',
  },
  description: {
    color: "#fff",
  },
  listItem: {
    color: "#fff",
  }
})
