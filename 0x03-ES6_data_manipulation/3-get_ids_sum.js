export default function (students) {
  return students.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
