function testDoGet() {
    url = 'https://script.google.com/macros/s/AKfycbzWeixK8iukP7LNaokKZkCV2UsN7fLJQv_6nvL20Eud0Cu3N4w/exec';

    fetch(url)
        .then(resultJSON => resultJSON.json())
        .then(result => document.querySelector('#app').textContent = result[0].status);

}

function helloWorld() {
    var element = document.createElement('h3');
    element.textContent = 'Hello world';
    document.querySelector('#app').appendChild(element);
}

document.querySelector('#btn').addEventListener('click', helloWorld);

document.querySelector('#btn').addEventListener('click', testDoGet);