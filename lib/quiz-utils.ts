import { Question, Etymology } from "./quiz-types";

/**
 * 語源参考書に基づいた本格的な語源データ
 * 英語の語彙の約6〜7割を占めると言われるラテン語・ギリシャ語の語根を網羅しています。
 */



/**
 * 接頭辞IDからクイズデータをロードする
 */
export const loadPrefixQuestions = async (prefixId: string): Promise<Question[]> => {
  try {
    // Map of prefix IDs to their file names and export names
    const prefixMap: Record<string, { fileName: string; exportName: string }> = {
      'ad': { fileName: '1ad.ts', exportName: 'AD_QUIZ_QUESTIONS' },
      'con': { fileName: '2con.ts', exportName: 'CON_QUIZ_QUESTIONS' },
      'de': { fileName: '3de.ts', exportName: 'DE_QUIZ_QUESTIONS' },
      'ex': { fileName: '4ex.ts', exportName: 'EX_QUIZ_QUESTIONS' },
      'in': { fileName: '5in.ts', exportName: 'IN_QUIZ_QUESTIONS' },
      'per': { fileName: '6per.ts', exportName: 'PER_QUIZ_QUESTIONS' },
      'pre': { fileName: '7pre.ts', exportName: 'PRE_QUIZ_QUESTIONS' },
      'pro': { fileName: '8pro.ts', exportName: 'PRO_QUIZ_QUESTIONS' },
      're': { fileName: '9re.ts', exportName: 'RE_QUIZ_QUESTIONS' },
      'sub': { fileName: '10sub.ts', exportName: 'SUB_QUIZ_QUESTIONS' },
    };

    const prefixInfo = prefixMap[prefixId];
    if (!prefixInfo) {
      console.warn(`Unknown prefix ID: ${prefixId}`);
      return [];
    }

    // Dynamically import the module
    const module = await import(`@/src/data/expolor/prefixes/${prefixInfo.fileName}`);
    const questions = module[prefixInfo.exportName];
    return questions || [];
  } catch (error) {
    console.error(`Failed to load prefix questions for ${prefixId}:`, error);
    return [];
  }
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
