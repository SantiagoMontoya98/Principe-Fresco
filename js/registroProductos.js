import { addProduct, deleteProduct } from "./peticiones.js";
import { capturarDatosPOST, capturarDatosGET} from "./datos.js";

const d = document;
const $form = d.forms[0];
const $btnBuscar = d.getElementById("buscar");
const $btnEliminar = d.getElementById("eliminar");
const $btnCar = d.getElementById("addCar");

const url = "http://localhost:4000/productos";

let idProducto;

$form.addEventListener("submit", e => {

  e.preventDefault();

  const {name,size,price,description,image} = capturarDatosPOST();

  const producto = {
    name,
    size,
    price,
    description,
    image
  }

  addProduct(url,producto);

})

$btnBuscar.addEventListener("click", async () => {


  idProducto = await capturarDatosGET(url);

})

$btnEliminar.addEventListener("click", () => deleteProduct(url,idProducto)); 