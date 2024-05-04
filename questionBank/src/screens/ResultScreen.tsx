import { MainView } from "../components/Views/MainView.tsx";
import { useEffect, useState } from "react";
import { testCalculation } from "../helper/TextResultHelper.tsx";
import CustomText from "../components/text/CustomText.tsx";
import { Image, View, StyleSheet } from "react-native";
import { CustomButton } from "../components/buttons/CustomButton.tsx";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ResultScreen = (props: any) => {
  const [response, setResponse] = useState({});
  useEffect(() => {
    asd();
  }, []);
  const asd = async () => {
    const data = testCalculation(props?.route?.params);
    setResponse(data);
    AsyncStorage.setItem("responseTest", JSON.stringify(data));
  };
  return (
    <MainView bodyStyle={styles.pageContainer}>
      <View style={styles.bodyContainer}>
        <CustomText style={styles.title}>Seviye Belirleme Sınav Sonucu</CustomText>
        <Image source={require("../assets/icons/Dopi.png")} style={styles.titleImage} />
        <CustomText style={[styles.title, { margin: 0 }]}>Tebrikler, sınavı başarıyla tamamladın!</CustomText>
        <CustomText style={styles.bodyText}>Dopi Yapay Zeka seviyeni "Temel Seviye" olarak {"\n"}belirlemiştir. Seviyeni
          istediğin zaman ünite {"\n"}
          içerisinden değiştirebilirsin.</CustomText>
        <View style={styles.responseContainer}>
          <View>
            <Image source={require("../assets/icons/net.png")} />
            <CustomText style={styles.responseText}>{response?.net} Net</CustomText>
          </View>
          <View>
            <Image source={require("../assets/icons/true.png")} />
            <CustomText style={styles.responseText}>{response?.correctCount} Doğru</CustomText>
          </View>
          <View>
            <Image source={require("../assets/icons/false.png")} />
            <CustomText style={styles.responseText}>{response?.falseCount} Yanlış</CustomText>
          </View>
          <View>
            <Image source={require("../assets/icons/null.png")} />
            <CustomText style={styles.responseText}>{response?.nullCount} Boş</CustomText>
          </View>
        </View>
      </View>
      <CustomButton onPress={() => console.log("")} text={"üniteye Başla"} buttonStyle={styles.startButton} />
    </MainView>
  );
};
const styles = StyleSheet.create({
  responseText: {
    textAlign: "center",
    fontWeight: "700",
    marginVertical: 4
  },
  responseImage: {
    height: 56,
    width: 56
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
    margin: 36,
    alignSelf: "center"
  },
  responseContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 301,
    alignSelf: "center",
    marginBottom: 36
  },
  startButton: {
    position: "absolute",
    bottom: 10,
    left: 10
  },
  titleImage: {
    alignSelf: "center"
  },
  pageContainer: {
    backgroundColor: "#305B83"
  },
  bodyContainer: {
    flex: 0.8,
    justifyContent: "space-around"
  },
  bodyText: {
    fontSize: 14,
    alignSelf: "center"
  }
});
