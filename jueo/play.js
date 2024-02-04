function Character(wife, husband) {
  const Sonya = {
    name: "Sofia Tolstaya",
    companion: husband,
    origin: "Rusia"
  };

  const León = {
    name: "León Tolstoy",
    companion: wife,
    origin: "Rusia"
  };

  return {
    wife: Sonya,
    husband: León
  };
}

function playGame() {
  alert(`Preparado para el juego de preguntas de la pareja de escritores Rusos? Si es asi\n 
  Es necesario salvar la relación de León Tolstoi y Sofía Tolstaya.\n
  Ellos están profundamente enamorados de Rusia del siglo XIX.\n
  Eres el que decide el destino de su amor.\n
  1. Convence a Sofía para que se una a Leo en sus actividades literarias.\n
  2. Aconseje a León que apoye a Sofía en sus esfuerzos filantrópicos.\n
  3. Sepáralos y cambia el curso de la historia.\n`);

  let option = prompt(`¿Qué decisión tomarás?`, "1, 2, 3");
  let happy = option;
  let subOption;

  if (happy == 1) {
    alert(`Sofía decide apoyar a León en sus esfuerzos literarios.\n
          Se enfrentan a desafíos sociales. Cómo podemos ayudar?\n
          1.1 Se enfrentan a desafíos sociales. Cómo podemos ayudar?.\n
          1.2 León y Sofía establecen una alianza literaria.\n
          1.3 León deja de escribir para centrarse en la familia.\n`);

    subOption = prompt(`¿Que opción eligirias?`, "1, 2, o 3");
  }

  let alliance;

  if (happy == 2) {
    alert(`León decide apoyar a Sofía en sus esfuerzos filantrópicos.\n
    Se encuentran con desafíos de las normas sociales y surge un crítico.\n
   2.1 León responde con dureza al crítico..\n
   2.2 León intenta entablar un diálogo constructivo.\n
   2.3 León ignora las críticas y sigue apoyando a Sofía.\n`);

    alliance = prompt(`¿Qué decisión tomarás?`, "1, 2, 3");
  }

  if (happy == 2) {
    delete Character.wife.companion;
  }

  let conflict;

  if (happy == 3) {
    alert(`León y Sofía se distancian.\n
    Existe el peligro de que una disputa familiar afecte su legado.\n
   3.1 Sofía inicia acciones legales contra Leo.\n
   3.2 León emprende acciones legales contra Sofía.\n
   3.3 León y Sofía llegan a un acuerdo para preservar el legado de la familia.\n`);

    conflict = prompt(`¿Como los juzgarias?`, "1, 2, 3");
  }


  let subOption1;

  if (subOption == 1) {
    alert(`Sofía comienza su propia carrera como escritora.\n
    Surgen problemas familiares y Sofía anhela el poder que perdió.\n
          1.1 Sofía abandona a Leo y recupera el control de su carrera literaria.\n
          1.2 Leon se vuelve sospechoso y termina la vida de Sofía.\n
          1.3 Desesperada, Sofía se alía con los críticos y conspira contra Leo.\n`);

    subOption1 = prompt(`¿Qué decisión tomarás?`, "1, 2, o 3");
  }

  if (subOption == 1) {
    delete Character.wife.companion;
  }

  let subOption2;

  if (subOption == 2) {
    alert(`Leo y Sofía establecen una alianza literaria.\n
    Frente a la reacción social, Leon y Sofía deben tomar decisiones estratégicas.\n
   1.1 Ellos huyen a una ciudad mas simpatica.\n
   1.2 Conducen a sus seguidores a una manifestación pública.\n
   1.3 Ellos se dividen estratégicamente, planeando una revolución cultural.\n`);

    subOption2 = prompt(`¿Cual es la mejor decisión para ellos?`, "1, 2, o 3");
  }

  let adversary;

  if (subOption == 2) {
    delete Character.husband.origin;
  }

  if (conflict == 1) {
    delete Character.husband.origin;
  }

  switch (subOption, subOption2, conflict) {
    case 1:
      delete Character.husband.origin;
      break;

    case 1:
      alert("Ambos pierden la vida por intervención de locas.");
      break;

    case 1:
      alert("Ambos pierden la vida por intervención de locas.");
      break;

    case 2:
      alert("Sofía ha perdido la vida.");
      break;

    case 2:
      delete Character.wife;
      break;

    case 3:
      delete Character.wife;
      break;
  }
}

playGame();

let couple = Character({ name: "Sofia Tolstaya" }, { name: "Leon Tolstoy" });
console.log(couple);
