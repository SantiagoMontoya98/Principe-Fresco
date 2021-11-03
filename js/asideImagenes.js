const getAsides = async(url) => {
    const response = await fetch(url);
    const data = await response.json();

    data.forEach((e, i) => {
        let detallesProducto = localStorage.getItem(`canasta ${i}`);
        detallesProducto = JSON.parse(detallesProducto);
        const $menuImg = document.querySelectorAll('.menu li')[i];
        const $img = document.querySelectorAll('.slider li')[i];
        if (detallesProducto) {
            const { name, size, price, description, image } = detallesProducto;
            
            //console.log(image);            
            image.forEach((elemento, indice) => {
                $menuImg.innerHTML += `<a href="#slide${i}"><img class="asideImg" src="${elemento}"></a>`;
                $img.innerHTML += `<img class="img" src="${elemento}"></a>`;
                //console.log(elemento);
            })
        }
    })
}

export default getAsides;