export const getRandomArrayElement = (arr: any[]) => {
  const randomInt = Math.floor(Math.random() * arr.length)
  return arr[randomInt];
}
