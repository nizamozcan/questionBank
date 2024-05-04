import { View,StyleSheet } from "react-native";

export const Check=({selection}:{selection:boolean})=>{
  return(
    <View style={styles.container}>
      {selection&&<View style={{backgroundColor:'white',flex:1,borderRadius:24,margin:4}}></View>}
    </View>
  )
}
const styles=StyleSheet.create({
  container:{height:24,width:24,borderRadius:24,borderColor:'white',borderWidth:2,marginHorizontal:8}
})
