import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {changeIcon, resetIcon} from 'react-native-change-icon';

const App = () => {
  const changeAppIcon = async (iconName: string) => {
    if (iconName === 'reset') {
      await resetIcon();
      return;
    }
    await changeIcon(iconName);
  };

  const ChangeIconButton = ({
    iconName,
    text,
  }: {
    iconName: string;
    text: string;
  }) => {
    return (
      <TouchableOpacity
        onPress={() => changeAppIcon(iconName)}
        style={styles.btn}>
        <Text>Change to {text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.main}>
      <ChangeIconButton iconName="30" text="30 Ağustos" />
      <ChangeIconButton iconName="10" text="10 Kasım" />
      <ChangeIconButton iconName="reset" text="29 Ekim" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 10,
  },
});
