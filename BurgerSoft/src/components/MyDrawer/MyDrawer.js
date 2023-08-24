import * as React from 'react';
import {  View, StyleSheet, Image, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';


export default function Content(props) {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Image
                    style={styles.resim}
                    source={require("../../assets/avatar.png")} />
                <Text>Kullanıcı Adı</Text>
            </View>
            <View style={styles.container2}>
                <DrawerContentScrollView>
                    <DrawerItem
                        style={styles.items}
                        label="Menü"
                        onPress={() => props.navigation.navigate("App")} />
                    <DrawerItem
                        style={styles.items}
                        label="Siparişlerim"
                        onPress={() => props.navigation.navigate("Order")} />
                    <DrawerItem
                        style={styles.items}
                        label="Adreslerim"
                        onPress={() => props.navigation.navigate("Address")} />
                    <DrawerItem
                        style={styles.items}
                        label="Çıkış yap"
                        onPress={() => props.navigation.navigate("Home")} />
                </DrawerContentScrollView>
            </View>
        </View>)
}



const styles = StyleSheet.create({
    container:{flex:1},
    container1: {
      flex: 1,
      backgroundColor: "#B7C0BB",
      justifyContent: "center",
      alignItems:"center"
    },
    text:{
      fontSize:15
    },
    container2: {
      flex: 3,
      backgroundColor: "#B7C0BB"
    },
    resim: {
      width: 100,
      height: 100,
      borderRadius: 50,
  
    },
    items:{
      backgroundColor:"white",
      marginBottom:50    
    },
  
  })