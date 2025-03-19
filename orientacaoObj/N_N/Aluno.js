export default class Aluno {
  constructor(nome, matricula) {
    this.nome = nome;
    this.matricula = matricula;
    this.cursos = []; // Cursos em que o aluno está matriculado
  }

  matricular(curso) {
    this.cursos.push(curso);
    curso.adicionarAluno(this); // Associar a instância do aluno ao curso
  }

  listarCursos() {
    return this.cursos.map((curso) => curso.nome);
  }
}
