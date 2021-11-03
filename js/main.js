import getAsides from "./asideImagenes.js";
import getProductos from "./productos.js";

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/workshop-principe/upload';
const CLOUDINARY_UPLOAD = 'iv5uqdn6';
const d = document;
const url = "http://localhost:4000/productos";

d.addEventListener("DOMContentLoaded", () => {

  getAsides(url);
  getProductos(url);

})
