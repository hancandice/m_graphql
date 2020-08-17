export const people = [
  { id: "1", name: "Candice", age: 27, gender: "female", height: 165 },
  { id: "2", name: "Camille", age: 27, gender: "male", height: 185 },
  { id: "3", name: "Amy", age: 35, gender: "female", height: 160 },
  { id: "4", name: "Benjamin", age: 33, gender: "male", height: 191 },
  { id: "5", name: "Hugo", age: 30, gender: "male", height: 188 },
  { id: "6", name: "Axel", age: 30, gender: "male", height: 188 },
  { id: "7", name: "Remi", age: 29, gender: "male", height: 176 },
  { id: "8", name: "Jordano", age: 28, gender: "male", height: 158 },
];

export const getById = (id) => {
  const filteredPerson = people.filter((person) => person.id === String(id));
  return filteredPerson[0];
};
