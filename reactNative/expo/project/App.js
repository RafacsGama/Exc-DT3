/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
import React from "react";
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from "react-native";

const colorGitHub = '#010409'
const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/96843711?v=4'
const colorFontGitHub = '#C9D1D9'
const colorDarkFontGithub = '#4F565E'
const urlMyGit = 'https://github.com/RafacsGama'
const myInsta ='https://www.instagram.com/bilitomaster/'
const App = () =>{
    const handlePressGoTo = async () =>{
      console.log('Verificando link')
      const res = await Linking.canOpenURL(urlMyGit)
      if(res){
        console.log('Link aprovado')
        console.log('Abrindo o link...')
        await Linking.openURL(urlMyGit)
    }
  }
  const handlePressGoTo2 = async () =>{
    console.log('Verificando link')
    const res = await Linking.canOpenURL(myInsta)
    if(res){
      console.log('Link aprovado')
      console.log('Abrindo o link...')
      await Linking.openURL(myInsta)
  }
}
  return (
    <SafeAreaView style={ style.container}>
      <StatusBar backgroundColor={colorGitHub} barStyle = "light-content" />
        <View style={style.content}>
          <Image 
          accessibilityLabel="Rafael Sorrindo." 
          style={style.avatar} 
          source={{uri:imageProfileGitHub}}/>
          <Text
          accessibilityLabel="Nome Rafael Gama"
          style={[style.defaultText, style.nome]}>Rafael Gama</Text>
          <Text
          accessibilityLabel="Nickname RafacsGama"
          style={[style.defaultText, style.nickname]}>RafacsGama</Text>
          <Text 
          accessibilityLabel="Desenvolvedor de Software e instrutor de programa de aprendizagem."
          style={[style.defaultText, style.descricao]}>Desenvolvedor de Softwares e 
            Instrutor de Programa de Aprendizagem</Text>
          <Pressable onPress={handlePressGoTo}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>Abra no Github</Text>
          </View>
          </Pressable>
          <Pressable onPress={handlePressGoTo2}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>Abra no Instagram</Text>
          </View>
          </Pressable>
        </View>       
    </SafeAreaView>
  )
}
export default App

const style = StyleSheet.create({
  container:{
      backgroundColor: colorGitHub,
      flex:1, //expandir para a tela inteira.
      justifyContent: 'center',
      alignContent: 'center'           
  },
  content: {
    alignItems: 'center',
    padding: 40,
  },
  avatar:{
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText:{
    color: colorFontGitHub,
  },
  nome:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  nickname:{
    fontSize: 20,
    fontStyle:'italic',
    color: colorDarkFontGithub,
  },
  descricao:{
    fontStyle:'normal',
    fontWeight: 'bold',
    fontSize: 20,
  },
  button:{
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 20,
    padding: 20,
  },
  textButton:{
    fontStyle:'italic',
    fontWeight: 'bold',
    fontSize: 20,    
  }
})

