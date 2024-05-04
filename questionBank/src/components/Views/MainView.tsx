import React from "react";
import { ColorValue, SafeAreaView, StyleSheet, View, ViewComponent, ViewProps, ViewStyle } from "react-native";

interface Props{
  header?:ViewComponent
  containerStyle?:ViewStyle
  bodyStyle?:ViewStyle
}
export const MainView=(props:Props)=>{
  const {header,containerStyle,bodyStyle} = props;
  return(
    <SafeAreaView style={[styles.container,containerStyle]}>
      {header&&( <View style={styles.header}>
        {header}
      </View>)}
      <View style={[styles.body,bodyStyle]}>
        {props?.children}
      </View>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  body:{flex:1,padding:8},
  header:{height:140},
  container:{flex:1}
})
