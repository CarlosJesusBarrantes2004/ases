const bcrypt = require("bcrypt");

async function generateHash() {
  const password = "123456"; // <--- LA CONTRASEÑA QUE QUIERES USAR PARA EL ADMIN
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Contraseña original:", password);
  console.log("Contraseña hasheada (COPIA ESTO):", hashedPassword);
}

generateHash();
