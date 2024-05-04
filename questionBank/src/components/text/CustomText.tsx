import { Text, StyleSheet, TextStyle } from "react-native";
import { memo } from "react";

interface Props{
  style?:TextStyle
  children?:any,

}
 const CustomText = (props:Props)=>{
  return(
    <Text  style={[styles.txtStil,props?.style]}>{props?.children}</Text>
  )
}
export default memo(CustomText);
const styles=StyleSheet.create({
  txtStil:{fontSize:16,color:'white'},
})
