export const capturarDatosPOST = () => {


  const d = document;

  const $form = d.forms[0];
  const $nombre = $form.nombre.value;
  const $precio = $form.precio.value;
  const $descripcion = $form.descripcion.value;  
  const $talla = [];
  const $imagen = [];

  if($form.S.checked) $talla.push($form.S.value);

  if($form.M.checked) $talla.push($form.M.value);

  if($form.L.checked) $talla.push($form.L.value);

  if($form.XL.checked) $talla.push($form.XL.value);

  if($form.XXL.checked) $talla.push($form.XXL.value);

  if($form.url1.value !== "") $imagen.push($form.url1.value);

  if($form.url2.value !== "") $imagen.push($form.url2.value);

  if($form.url3.value !== "") $imagen.push($form.url3.value);

  const producto = {

    name: $nombre,
    size: $talla,
    price: $precio,
    description: $descripcion,
    image: $imagen

  }

  return producto;

}

export const capturarDatosGET = async (url) => {

  let peticion = await fetch(url),
    data = await peticion.json();

  const d = document;
  const $form = d.forms[0];
  const $nombre = $form.nombre.value;

  let producto = data.find(product => product.name.toLowerCase() === $nombre.toLowerCase());

  let {id, name, size, price, description, image} = producto;

  size.forEach(el => {

    if(el === "S") $form.S.checked = true;

    if(el === "M") $form.M.checked = true;

    if(el === "L") $form.L.checked = true;

    if(el === "XL") $form.XL.checked = true;

    if(el === "XXL") $form.XXL.checked = true;

  })

  $form.nombre.value = name;
  $form.precio.value = price;
  $form.descripcion.value = description;
  $form.url1.value = image[0];
  $form.url2.value = image[1];
  $form.url3.value = image[2];

  return id;
}