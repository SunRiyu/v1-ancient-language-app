import { Question, Etymology } from "./quiz-types";
import { AD_QUIZ_QUESTIONS } from "@/src/data/expolor/prefixes/1ad";
import { CON_QUIZ_QUESTIONS } from "@/src/data/expolor/prefixes/2con";
import { DE_QUIZ_QUESTIONS } from "@/src/data/expolor/prefixes/3de";
import { EX_QUIZ_QUESTIONS } from "@/src/data/expolor/prefixes/4ex";
import { IN_QUIZ_QUESTIONS } from "@/src/data/expolor/prefixes/5in";
import { PER_QUIZ_QUESTIONS } from "@/src/data/expolor/prefixes/6per";
import { PRE_QUIZ_QUESTIONS } from "@/src/data/expolor/prefixes/7pre";
import { PRO_QUIZ_QUESTIONS } from "@/src/data/expolor/prefixes/8pro";
import { RE_QUIZ_QUESTIONS } from "@/src/data/expolor/prefixes/9re";
import { SUB_QUIZ_QUESTIONS } from "@/src/data/expolor/prefixes/10sub";

/**
 * 語源参考書に基づいた本格的な語源データ
 * 英語の語彙の約6〜7割を占めると言われるラテン語・ギリシャ語の語根を網羅しています。
 */

const PREFIX_QUESTIONS_MAP: Record<string, Question[]> = {
  ad: AD_QUIZ_QUESTIONS,
  con: CON_QUIZ_QUESTIONS,
  de: DE_QUIZ_QUESTIONS,
  ex: EX_QUIZ_QUESTIONS,
  in: IN_QUIZ_QUESTIONS,
  per: PER_QUIZ_QUESTIONS,
  pre: PRE_QUIZ_QUESTIONS,
  pro: PRO_QUIZ_QUESTIONS,
  re: RE_QUIZ_QUESTIONS,
  sub: SUB_QUIZ_QUESTIONS,
};

/**
 * 接頭辞IDからクイズデータをロードする
 */
export const loadPrefixQuestions = (prefixId: string): Question[] => {
  const questions = PREFIX_QUESTIONS_MAP[prefixId];
  if (!questions) {
    console.warn(`Unknown prefix ID: ${prefixId}`);
    return [];
  }
  return questions;
};

/**
 * ユーティリティ関数（必要に応じて他のページから呼び出されます）
 */
export const getEtymologyById = (id: string) => {
  return ETIMOLOGY_DATA.find((e) => e.id === id);
};

export const getQuestionsByCategory = (category: string) => {
  return QUIZ_QUESTIONS.filter((q) => q.category === category);
};

export const calculateScore = (answers: { isCorrect: boolean }[]) => {
  const score = answers.filter(a => a.isCorrect).length;
  return { score };
};

export const checkPassCriteria = (answers: { isCorrect: boolean }[]) => {
  if (answers.length === 0) return false;
  const score = answers.filter(a => a.isCorrect).length;
  const rate = score / answers.length;
  return rate >= 0.8; // 80%以上で合格とする場合
};

export const generateQuestions = (params: any, type: string): Question[] => {
  // QUIZ_QUESTIONS からランダムに取得したり、カテゴリで絞り込んだりする処理
  return QUIZ_QUESTIONS; 
};
