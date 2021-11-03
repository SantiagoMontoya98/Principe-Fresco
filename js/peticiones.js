export const addProduct = async (url,objecto) => {

  //POST
  await fetch(url,{
    method: "POST",
    body: JSON.stringify(objecto),
    headers: {
      "Content-Type": "application/json; charset = UTF-8"
    }
  })

}

export const deleteProduct = async (url,id) => {

  //DELETE
  await fetch(`${url}/${id}`,{
    method: "DELETE"
  })

}