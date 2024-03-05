console.log('budget');

// J'attrape les éléments
const budget = document.querySelector("#budget");
const type = document.querySelector("#depense");
const montant = document.querySelector("#montant");

const budgetBas = document.querySelector(".budgetBas");
const depenseBas = document.querySelector(".depenseBas");
const balanceBas = document.querySelector(".balanceBas");

budget.addEventListener("input", updateBudget);
function updateBudget() {
  const value = budget.value;
  budgetBas.textContent = value;
}

const button = document.querySelector(".add-btn");
const expensesList = document.querySelector(".expenses-list");

// Écouter l'événement "keydown" sur les champs d'entrée
budget.addEventListener("keydown", validerChamp);
type.addEventListener("keydown", validerChamp);
montant.addEventListener("keydown", validerChamp);

// Fonction pour valider le champ en appuyant sur la touche "Entrée"
function validerChamp(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      button.click();
    }
  }

let totalBudget = 0;
let totalDepenses = 0;

button.addEventListener("click", function() {
  afficherDepense();
  listerDepenses();
});

function afficherDepense() {
  const typeValue = type.value;
  const montantValue = parseInt(montant.value);

  // Vérifier si les champs ne sont pas vides
  if (typeValue === "" || isNaN(montantValue) || montantValue <= 0) {
    return;
  }

  // Ajouter la dépense individuelle à la liste
  const expenseItem = document.createElement("div");
  expenseItem.classList.add("expenses-item");
  expenseItem.innerHTML = `<span>${typeValue} ${montantValue}€</span>`;
  expensesList.appendChild(expenseItem);

  // Mettre à jour le total des dépenses
  totalDepenses += montantValue;
  depenseBas.textContent = totalDepenses;

  // Réinitialiser les champs
  type.value = "";
  montant.value = "";

  // Calculer la balance
  const budgetValue = parseInt(budget.value);
  totalBudget = isNaN(budgetValue) ? 0 : budgetValue;
  const balance = totalBudget - totalDepenses;
  balanceBas.textContent = balance;

  // Vérifier si la balance est négative
  balanceBas.classList.toggle("negative-balance", balance < 0);
}

function listerDepenses() {
  // Code pour lister toutes les dépenses
  const expenses = expensesList.querySelectorAll(".expenses-item");
  expenses.forEach(function(expense) {
    console.log(expense.textContent);
  });
}

    // Effacer les données
    const gomme = document.querySelector(".fa-eraser");
    gomme.addEventListener("click",effacer);

    function effacer() {
        const inputs = document.querySelectorAll("input");
        const spans = document.querySelectorAll(".budgetBas, .depenseBas, .balanceBas");
        budget.value = "";
        type.value = "";
        montant.value = "";
      
        // Effacer la liste des dépenses
        const expensesList = document.querySelector(".expenses-list");
        expensesList.innerHTML = "";
        // Effacer les valeurs des champs d'entrée
        inputs.forEach((input) => {
          input.value = "";
        });
      
        // Effacer les valeurs affichées dans les spans
        spans.forEach((span) => {
          span.textContent = "0";
        });
      }

      window.addEventListener('DOMContentLoaded', () => {
        const budgetInput = document.querySelector("#budget");
        const typeInput = document.querySelector("#depense");
        const montantInput = document.querySelector("#montant");
      
        // Réinitialisation des champs à vide
        budgetInput.value = '';
        typeInput.value = '';
        montantInput.value = '';
      });
      