class Student {
  constructor(
    name,
    age,
    modality,
    active,
    sessions,
    progress,
    personalTrainer
  ) {
    this.name = name;
    this.age = age;
    this.modality = modality;
    this.active = active;
    this.sessions = sessions;
    this.progress = progress;
    this.personalTrainer = personalTrainer || "Não possui";
  }

  useSession = function () {
    if (this.sessions > 0) {
      this.sessions -= 1; // Reduza 1
      console.log("Sessão utilizada: " + `Sessões restantes ${this.sessions}`);
    } else {
      console.log("Não há mais sessões restantes. Renove o seu plano!");
    }
  };
}

const student1 = new Student(
  "Carlos Silva",
  28,
  "Musculação",
  true,
  12,
  ["Treino A", "Treino B", "Treino C"],
  { name: "João Santos", experience: "10 anos" }
);

// console.log(student1);
// student1.useSession();
// console.log(student1.sessions);
// student1.useSession();
// student1.useSession();
// student1.useSession();
// student1.useSession();
// student1.useSession();

const student2 = new Student("MarinaCarvalho", 30, "Pilates", true, 10, [
  "Pilates Solo",
]);

console.log(student1);
console.log(student2);
