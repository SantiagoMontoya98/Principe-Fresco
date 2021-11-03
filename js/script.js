const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/workshop-principe/upload';
const CLOUDINARY_UPLOAD = 'iv5uqdn6';

const d = document,
  url = "http://localhost:4000/productos";

const getProducts = async (url) => {

  //GET
  let peticion = await fetch(url),
    data = await peticion.json();

  console.log(data);

  return data;

}

const addProduct = async (url,object) => {

  //POST
  await fetch(url,{
    method: "POST",
    body: JSON.stringify(object),
    headers: {
      "Content-Type": "application/json; charset = UTF-8"
    }
  })

}

const deleteProduct = async (url,id) => {

  //DELETE
  await fetch(`${url}/${id}`,{
    method: "DELETE"
  })

}

//getProducts(url);

