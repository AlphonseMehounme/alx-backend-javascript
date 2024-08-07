export default function returnHowManyArguments(...args) {
  let num = 0;
  /* eslint-disable-next-line no-unused-vars */
  for (const arg of args) {
    num++;
  }
  return num;
}
