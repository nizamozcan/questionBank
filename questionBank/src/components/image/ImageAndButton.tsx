import { TouchableOpacity, Image, ImageRequireSource ,StyleSheet} from "react-native";

export const ImageAndButton=({onPress,imageSource}:{onPress?:()=>void,imageSource:ImageRequireSource})=>{
  return(
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={imageSource} />
    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
  container:{ marginHorizontal:2}
})
