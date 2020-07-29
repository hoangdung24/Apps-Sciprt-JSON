function testDoGet() {
    url = 'https://script.google.com/macros/s/AKfycbyAAgutSyG9oGFbML0PWX-tn3dwva69Q3CLnVuM/exec';

    fetch(url)
        .then(resultJSON => resultJSON.json())
        .then(result => document.querySelector('#app').textContent = result[0].data[0]['Tên Khách Hàng']);

}


document.querySelector('#btn-1').addEventListener('click', testDoGet);

document.querySelector('#btn-2').addEventListener('click', testDoGet);