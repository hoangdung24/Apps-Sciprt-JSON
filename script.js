function testDoGet() {
    let url = 'https://script.google.com/macros/s/AKfycbyAAgutSyG9oGFbML0PWX-tn3dwva69Q3CLnVuM/exec';

    fetch(url)
        .then(resultJSON => resultJSON.json())
        .then(result => {
            // result[0].data[0]['Tên Khách Hàng']
            document.querySelector('#app').textContent = result[0].status;
        });

}

function testDoPost() {
    let url = 'https://script.google.com/macros/s/AKfycbyAAgutSyG9oGFbML0PWX-tn3dwva69Q3CLnVuM/exec';
    let data = {
        'Tên Khách Hàng' : 'Lê Minh Hoàng Dũng',
        'Số Điện Thoại' : '0778639310',
        'Địa Chỉ' : '544/12 Lạc Long Quân, Phường 5, Quận 11, TP.HCM'
    };

    fetch(url, {
        method : 'POST',
        mode : 'no-cors',
        cache : 'no-cache',
        headers : {
            'Content-Type' : 'application/json'
        },
        redirect : 'follow',
        body : JSON.stringify(data)
    })
    .then(resultJSON => resultJSON.json())
    .then(result => {
        console.log(result);
        document.querySelector('#app').textContent = result.status;
    });

}



document.querySelector('#btn-1').addEventListener('click', testDoGet);

document.querySelector('#btn-2').addEventListener('click', testDoPost);