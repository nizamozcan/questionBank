import { url } from "../config/Contants.ts";

export const getQuestions=async()=>{
  const response = await fetch(`${url}questionJson/main/json/quizJson.json`);
  const data = await response.json();
  return data
}
