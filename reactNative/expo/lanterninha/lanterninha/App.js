import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Torch from 'react-native-torch'
import RNShake from 'react-native-shake'
//import imagex from './assets/lampap.png'

const App = () => {
  const [toggle, setToggle] = useState(false)

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle)  

  useEffect(()=>{   
    //liga o flash do celular.
    //Alert.alert('Atualizou o componente' + toggle)
    Torch.switchState(toggle)
    //console.log('Trocou o estado do Flash')
  }, [toggle])

  useEffect(() => {
    //quando a função desmontar os componentes.
    const subscription = RNShake.addListener(() =>{
     setToggle(oldToggle => !oldToggle) 
    })
    return () => subscription.remove()
  }, [])
  
  return (
  <View style = {toggle ? style.containerLight : style.container}>
    <TouchableOpacity onPress = {handleChangeToggle}>
      <Image
        style = {toggle ? style.lightiningOn : style.lightiningOff} 
        source = {
          toggle 
          ? require('./assets/lampac.png')
          : require('./assets/lampap.png')
        }
      />
      <Image
        style = {style.dioLogo} 
        source = {
          toggle 
          ? require('./assets/logo.png')
          : require('./assets/diome-white.png')
        }
        />
    </TouchableOpacity>
  </View>
  )
}

export default App

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  containerLight : {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  lightiningOn:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightiningOff:{
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor:'white',
    width: 150,
    height: 150,
  },
  dioLogo:{
    resizeMode: 'contain',
    alignItems: 'center',
    width: 250,
    height: 250,
  },
})