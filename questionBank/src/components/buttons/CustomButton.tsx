import { TouchableOpacity,Image, StyleSheet, ViewStyle, TextStyle, ImageRequireSource } from "react-native";
import CustomText from "../text/CustomText.tsx";


export const CustomButton = (
  {buttonStyle,textStyle,text,onPress,leftImage,rightImage}: {buttonStyle?:ViewStyle,textStyle?:TextStyle,text?:string,onPress:()=>void
    leftImage?:ImageRequireSource,rightImage?:ImageRequireSource},
) => {
  return (
    <TouchableOpacity style={[styles.container,buttonStyle]} onPress={onPress}>
      {leftImage&&<Image source={leftImage} style={styles.image}/>}
        <CustomText style={styles.text}>{text}</CustomText>
      {rightImage&&<Image source={rightImage} style={styles.image}/>}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#03A9F1",
    width: "100%",
    height: 56,
    borderRadius: 10,
    justifyContent:'center',alignSelf:'center'
  },
  text:{
    textAlign:'center',
    fontWeight:'bold',
  },
  image:{marginHorizontal:4}
});
