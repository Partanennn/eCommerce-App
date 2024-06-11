export const translateWordsToTranslationKey = (words: string[]) => {
  return words.map((word) =>
    word.replace("'", '').replace(' ', '-').toLowerCase()
  );
};
