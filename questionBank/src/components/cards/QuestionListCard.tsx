import {  StyleSheet, TouchableOpacity, View,Alert } from "react-native";
import { IQuestionList } from "../../interfaces/IQuestionList.ts";
import { Check } from "../Check.tsx";
import { useState } from "react";
import CustomText from "../text/CustomText.tsx";
import { ImageAndButton } from "../image/ImageAndButton.tsx";

export const QuestionListCard = ({ item, page }: { item: IQuestionList, page: number }) => {
  const [refresh, setRefresh] = useState(0);
  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => {
    setFontSize((x) => x + 1);
  };
  const reduceFontSize = () => {
    setFontSize((x) => x - 1);

  };

  return (
    <View style={styles.container}>
      <View style={styles.textSettings}>
        <CustomText style={styles.questionNumber}>Soru: {page + 1}</CustomText>
        <View style={styles.iconSettings}>
          <ImageAndButton  imageSource={require("../../assets/icons/colors.png")} />
          <ImageAndButton onPress={() => increaseFontSize()} imageSource={require("../../assets/icons/plus.png")} />
          <ImageAndButton onPress={() => reduceFontSize()} imageSource={require("../../assets/icons/minus.png")} />
        </View>
      </View>

      <CustomText style={{ fontSize: fontSize }}>"{item?.questionDescription}"</CustomText>
      <CustomText style={[styles.questionTitle, { fontSize: fontSize }]}>{item?.question}</CustomText>
      {item.answer.map((answerItem, index) => {
        return (
          <TouchableOpacity
            style={answerItem?.check ? [styles.answerButton, { backgroundColor: "#3C79B0" }] : styles.answerButton}
            onPress={() => {
              item.answer.map((answerItem2, index) => {
                answerItem2.check = false;
              });
              answerItem.check = true;

              setRefresh((x) => x + 1);
            }}>
            <Check selection={answerItem?.check} />
            <CustomText>{String.fromCharCode(97 + index).toUpperCase()}.)
              {Object.values(answerItem)[0]}</CustomText>
          </TouchableOpacity>

        );
      })}

    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
  answerButton: {
    backgroundColor: "#346796",
    height: 78, borderRadius: 10, margin: 8, padding: 8,
    flexDirection: "row", alignItems: "center"
  },
  questionTitle: { fontWeight: "bold", marginTop: 24 },
  questionNumber:
    {
      backgroundColor: "#284F74",
      textAlign: "center",
      fontSize: 12,
      width: 59,
      height: 28,
      padding: 6,
      borderRadius: 5,
      margin: 8
    },
  textSettings: { flexDirection: "row",marginBottom:8},
  iconSettings:{ flexDirection: "row", alignSelf: "center", justifyContent: "flex-end", flex: 1 }
});
