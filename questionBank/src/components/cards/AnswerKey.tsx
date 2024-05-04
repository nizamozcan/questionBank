import { Modalize } from "react-native-modalize";
import { Image, StyleSheet, Text, View } from "react-native";
import CustomText from "../text/CustomText.tsx";
import { IQuestionList } from "../../interfaces/IQuestionList.ts";

export const AnswerKey = ({ modalizeRef, data }: { modalizeRef?: any, data?: [] }) => {

  function header() {
    return (
      <View style={styles.headerContainer}>
        <Image source={require("../../assets/icons/ders.png")} />
        <View style={styles.titleView}>
          <CustomText style={styles.title}>Temel Kavramlar</CustomText>
          <CustomText style={styles.questionCurrent}>{data?.length} soru</CustomText>
        </View>
      </View>
    );
  }

  const renderItem = ({ item, index }: { item: IQuestionList, index: number }) => {
    return (
      <View style={styles.answers}>
        <CustomText style={styles.whichQuestion}>{index + 1}. Soru</CustomText>
        {item?.answer.map((itemAnswer, indexAnswer) => {
          const trueAnswer = String.fromCharCode(97 + indexAnswer).toUpperCase() == item?.correctAnswer[0].answerTitle;
          return (
            <View style={trueAnswer ? [styles.answerStyle, { backgroundColor: "#359ECE" }] : styles.answerStyle}>
              <CustomText style={trueAnswer ? styles.trueAnswer : styles.nullAnswer}>{String.fromCharCode(97 + indexAnswer).toUpperCase()}</CustomText>
            </View>
          );
        })}
      </View>
    );
  };
  return (
    <Modalize
      snapPoint={750}
      modalStyle={styles.modal}
      ref={modalizeRef}
      flatListProps={{
        data: data,
        renderItem: renderItem,
        showsVerticalScrollIndicator: false,
        keyExtractor: (item) => item.index
      }}
      HeaderComponent={header()}
    >

    </Modalize>
  );
};
const styles = StyleSheet.create({
  answerStyle: {
    marginHorizontal: 16,
    height: 40,
    width: 40,
    borderRadius: 40,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#6C8EAE"
  },
  modal:{ backgroundColor: "#305B83", padding: 16 },
  headerContainer:{flexDirection:'row',marginBottom:8},
  titleView:{ marginHorizontal: 8, justifyContent: "center" },
  title:{ fontWeight: "600" },
  questionCurrent: { color: "#97BDE0" },
  answers:{
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    backgroundColor: "#285178",
    marginBottom: 4,
    borderRadius: 10,
    padding: 16
  },
  trueAnswer:{
    color: "white",
    fontWeight: "bold"
  },
  nullAnswer:{ color: "#97BDE0" },
  whichQuestion:{ color: "#97BDE0" }

});
