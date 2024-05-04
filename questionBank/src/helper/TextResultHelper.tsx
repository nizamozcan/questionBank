import { IQuestionList } from "../interfaces/IQuestionList.ts";

export const testCalculation = (data:IQuestionList ) => {
  let correctCount = 0;
  let nullCount=0;
  let falseCount=0;
  data.forEach(question => {
    // Her bir sorunun cevaplarını kontrol et
    const userAnswer = question.answer.find(ans => ans.check === true);
    let keys;
    if(userAnswer) {
      keys= Object.keys(userAnswer);
      const selectedAnswer = userAnswer[keys[0]];
     if(selectedAnswer ==question.correctAnswer[0].answerValue) correctCount++;
     else falseCount++;

    }else{
    nullCount++;
    }
  });
  return testResults(correctCount, nullCount, falseCount)
};
const testResults=(correctCount:number,nullCount:number,falseCount:number)=>{
  const net=correctCount!=0?correctCount/falseCount:0
  const number = net.toString().slice(0,4)
  const response=
    {
      correctCount:correctCount,
      nullCount:nullCount,
      net:number,
      falseCount:falseCount
    }
    return response

}

