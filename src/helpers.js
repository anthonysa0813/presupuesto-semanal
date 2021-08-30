export const watchingBudget = (presupuesto, restante) => {
  let clases;
  if (presupuesto / 4 > restante) {
    clases = "alert alert-danger";
  } else if (presupuesto / 2 > restante) {
    clases = "alert alert-warning";
  } else {
    clases = "alert alert-success";
  }
  return clases;
};
