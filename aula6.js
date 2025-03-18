const person = {
  name: "Augusto",
  lastName: "Burle",
  age: 79,
  netWorth: 1_000_000,
  car: {
    brand: "Volkswagen",
    model: "gol",
    year: 2002,
  },
};

// const { name, lastName, age } = person;
// const { brand, model, year } = person.car;

// const fullName = `${name} ${lastName}`;

// const presentationString = `esse é o ${name} ${lastName} de ${age} anos de idade, motorista do carro ${brand} ${model} ${year} `;
// console.log(presentationString);

function printUserInfo({ name, lastName, age, netWorth }) {
  const presentationString = `esse é o ${name} ${lastName}, ${age} anos de idade, dono do patrimônio de ${netWorth} reais`;
  console.log(presentationString);
}

printUserInfo(person);

const grades = [8, 9, 4, 6];

// const [
//   firstBimesterGrade,
//   secondBimesterGrade,
//   thirdBimesterGrade,
//   fourBimesterGrade,
// ] = grades;

const [firstBimesterGrade, secondBimesterGrade, ...banana] = grades;

console.log(
  `as notas do primeiro bimestre do sujeito levararam a média de ${firstBimesterGrade}`
);

console.log(banana);
