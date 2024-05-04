
export interface IQuestionList {
  question?:string
  questionDescription?:string
  correctAnswer?:ICorrectAnswer
  answer?:IAnswer
}
export interface ICorrectAnswer{
  answerTitle?:string
  answerValue?:string
}
export interface IAnswer{
  A?:string
  B?:string
  C?:string
  D?:string
}
