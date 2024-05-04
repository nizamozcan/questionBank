import { FlatList, Text, StyleSheet, TouchableOpacity, View, Button, Image } from "react-native";
import { MainView } from "../components/Views/MainView.tsx";
import { LogoAndTitle } from "../components/header/LogoAndTitle.tsx";
import { useCallback, useEffect, useRef, useState } from "react";
import { IQuestionList } from "../interfaces/IQuestionList.ts";
import CustomText from "../components/text/CustomText.tsx";
import { QuestionListCard } from "../components/cards/QuestionListCard.tsx";
import { ProgressBar } from "@roseline124/react-native-progress-bar";
import OptionsMenu from "react-native-options-menu";
import { AnswerKey } from "../components/cards/AnswerKey.tsx";
import { BlurView } from "@react-native-community/blur";
import { navigate } from "../helper/NavigationHelpers.tsx";
import { CustomButton } from "../components/buttons/CustomButton.tsx";
import { url } from "../config/Contants.ts";
import { getQuestions } from "../actions/QuestionActions.tsx";

export const QuestionsListScreen = () => {
  const [question, setQuestion] = useState(null);
  const [selectionQuestion, setSelectionQuestion] = useState([]);
  const [selectQuestionPage, setselectQuestionPage] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const modalizeRef = useRef(null);

  const totalQuestions = question?.length;
  const getQuestion = async () => {
  const data=  await getQuestions()
    setQuestion(data);
    setSelectionQuestion([data[selectQuestionPage]]);
  };
  const nextQuestion = async (page: "next" | "before") => {
    switch (page) {
      case"next":
        setselectQuestionPage((x) => x + 1);
        if (currentQuestion < totalQuestions) {
          setCurrentQuestion(currentQuestion + 1);
        }
        break;
      case "before" :
        setselectQuestionPage((x) => x - 1);
        if (currentQuestion < totalQuestions) {
          setCurrentQuestion(currentQuestion + -1);
        }
        break;
    }

  };


  const progress = currentQuestion / totalQuestions;

  function Header() {
    return (
      <View style={styles.headerContainer}>
        <LogoAndTitle title={"Temel Kavramlar"} />
        <View style={styles.title}>
          <CustomText>Temel Kavramlar Seviye Belirleme Sınavı</CustomText>
          <CustomText style={styles.pageTitle}>{selectQuestionPage + 1} / {question?.length}</CustomText>
        </View>
        <ProgressBar
          progress={progress}
          width="100%"
          height={10}
          borderWidth={0}
          color={"#FFD873"}
          unfilledColor="#eee"
          indeterminate={true}
          textProps={{
            fontSize: 13,
            fontWeight: "bold",
            color: "yellow",
            textAlign: "middle"
          }}
        />
      </View>
    );
  }

  useEffect(() => {
    getQuestion();
  }, []);
  useEffect(() => {
    if (question != null) setSelectionQuestion([question[selectQuestionPage]]);
  }, [selectQuestionPage]);

  const renderItem = useCallback(({ item }: { item: IQuestionList }) => (
    <QuestionListCard item={item} page={selectQuestionPage} />
  ), [selectQuestionPage]);

  return (
    <MainView header={Header()} containerStyle={{ backgroundColor: "#1A3855" }}>
      <AnswerKey modalizeRef={modalizeRef} data={question} />
      <FlatList
        data={selectionQuestion}
        renderItem={(item) => renderItem(item)}
        showsVerticalScrollIndicator={false}
      />
      <View style={selectQuestionPage==0?[styles.pageChangeButton,{justifyContent:'flex-end'}]:styles.pageChangeButton}>
        <BlurView
          style={styles.absolute}
          blurType={"dark"}
          blurAmount={1}
          reducedTransparencyFallbackColor="white"
        />
        {selectQuestionPage != 0 && (
          <CustomButton
            buttonStyle={styles.nextQuestionButton}
            onPress={() => nextQuestion("before")}
            text={"Önceki Soru"}
            leftImage={require("../assets/icons/left-arrow.png")} />
        )}
        {selectQuestionPage + 1 != question?.length ?
          <CustomButton
            buttonStyle={styles.nextQuestionButton}
            onPress={() => nextQuestion("next")}
            text={"Sonraki Soru"}
            rightImage={require("../assets/icons/right-arrow.png")} /> :
          <View style={{ alignSelf: "center" }}>
            <OptionsMenu
              customButton={
                <View style={styles.finishTestButton}>
                  <CustomText style={styles.nextButtonText}>Testi Bitir</CustomText>
                </View>
              }
              destructiveIndex={1}
              options={["Cevap Anahtarı", "Testi Bitir", "Cancel"]}
              actions={[() => modalizeRef.current?.open(), () => navigate("result", question), () => console.log("")]} />
          </View>
        }

      </View>

    </MainView>
  );
};
const styles = StyleSheet.create({
  nextQuestionButton:{width: 140,height:44, flexDirection: "row", alignItems: "center" },
  headerContainer: { height: 140, backgroundColor: "#305B83", padding: 8 },
  title: {
    width: "100%",
    height: 20,
    flexDirection: "row" ,
  },
  pageTitle: { flex: 1, textAlign: "right", color: "#FDD368" },
  pageChangeButton: {
    height: 74,
    width: "105%",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16
  },
  finishTestButton: {
    backgroundColor: "#1ABC9C",
    width: 140,
    height: 44,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  nextButtonText: { fontWeight: "700", marginHorizontal: 4 },
  leftRightIcon: { height: 14, width: 14 }
});

