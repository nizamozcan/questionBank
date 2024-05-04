import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { navigate } from "../helper/NavigationHelpers.tsx";

export const HomeScreen = () => {

  return(
    <SafeAreaView style={{height:300}}>
      <Text onPress={()=>navigate('questions')}>Basla</Text>
  </SafeAreaView>
  );

};

