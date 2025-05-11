console.log("Agenda Web");
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const input = document.querySelector("#nom");
  if (input.value.trim() === "") {
    alert("El camp no pot estar buit");
    return;
  }
  // Lògica per afegir el contacte
});

