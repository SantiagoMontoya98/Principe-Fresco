const getProductos = async(url) => {
  const response = await fetch(url);
  const data = await response.json();
  data.forEach((e, i) => {
    const { name, size, price, description, image } = e;
    const card = document.querySelector('.card');
    const cards = document.createElement('DIV');
    cards.classList.add('cards');
    //console.log(i);
      const cardInfo =`<img class="card-img-top" src="${image[1]}" alt="Card image cap">
      <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${description}</p>
          <a href="productos.html" class="btn btn-primary">Go somewhere</a>
        </div>`;
        let detalleProducto = {name, size, price, description, image};
        detalleProducto = JSON.stringify(detalleProducto);
        let fragment = document.createDocumentFragment();
        cards.innerHTML = cardInfo;
        fragment.appendChild(cards);
        //console.log(cards)
        card.appendChild(fragment);
        let btnComprar = document.querySelectorAll('.btn')[i];
        btnComprar.addEventListener('click', e => {
          window.location.replace('./index.html');
          localStorage.clear();
          let local = localStorage.setItem(`canasta ${0}`, detalleProducto)
        })
        //let prueba = localStorage.getItem('canasta 1');
        //console.log(detalleProducto);

    })
}

export default getProductos;