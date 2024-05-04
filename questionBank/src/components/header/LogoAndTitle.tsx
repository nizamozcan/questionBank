import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { navigateGoBack } from "../../helper/NavigationHelpers.tsx";
import CustomText from "../text/CustomText.tsx";

interface LogoAndTitleProps {
  title?: string;
}

export const LogoAndTitle = (props: LogoAndTitleProps) => {
  const { title } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateGoBack()} style={styles.backButton}>
        <Image source={require("../../assets/icons/arrow-left.png")}
               style={styles.leftIcon} />
      </TouchableOpacity>
      <View style={styles.title}>
        <CustomText style={styles.titleText}>{title}</CustomText>
      </View>
      <View style={styles.menu}>
        <Image source={require("../../assets/icons/More.png")} />
      </View>
      {props.children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "row", backgroundColor: "#305B83",justifyContent:'space-around',alignItems:'center' },
  title: { alignItems: "center" ,width:'75%'},
  titleText: { textAlign: "center", fontSize: 24, color: "white" },
  backButton: {
    backgroundColor: "#7090B01A",
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  menu: {
    backgroundColor: "#7090B01A",
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  leftIcon: {}
});
