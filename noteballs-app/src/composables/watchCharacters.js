import { watch } from "vue";

export const useWatchCharacters = (valueToWatch, charLimit = 100) => {
  // Watch characters
  watch(valueToWatch, (newVal) => {
    if (newVal.length >= charLimit) {
      alert(`You have reached the maximum limit of ${charLimit} characters!`);
    }
  });
}