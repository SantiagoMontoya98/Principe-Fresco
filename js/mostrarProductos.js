const d = document,
  ls = localStorage;

const $mostrarProductos = d.getElementById("productosguardados");
const $precio = d.querySelector(".precio");

const array = [JSON.parse(ls.getItem("canasta 0"))];

array.forEach((el,index) => {


  $mostrarProductos.innerHTML += `
    <tr>

      <td>
        ${index + 1}
      </td>

      <td>
        <img class="img-carrito" src="${el.image[0]}" alt="">
      </td>

      <td>
        ${el.price}
      </td>

    </tr>
  
  `

  $precio.textContent = el.price;


})

