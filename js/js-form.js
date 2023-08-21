document.getElementById('main-form').addEventListener("submit", checkForm);

function checkForm(event){
    // let name = document.getElementById('name').value;
    event.preventDefault();
    let el = document.getElementById('main-form');
    let name = el.name.value;
    let pass = el.pass.value;
    let repass = el.repass.value;
    let state = el.state.value;
    let failure = "";

    if (name == "" || pass == "" || state == "" || repass == "")
        failure = "Заполните все поля!";
    else if(name.length <= 1 || name.length > 50)
        failure = "Введите корректное имя!";
    else if(pass != repass)
        failure = "Пароли должны совпадать";
    else if(pass.split('&').length > 1)
        failure = "Неккоретный пароль. Нельзя использовать &!";

    if(failure != ""){
        document.getElementById("error").innerHTML = failure;
    } else {
        alert("Все данные заполнены корректно!");
        window.location = "../examples/js-example.html";
    }

    return false;
}

// setInterval(timer_reg, 1000);
let counter = 0;
let timer = document.getElementById('main-timer');

// function timer_reg(){
//     counter++;
//     timer.innerHTML = counter + " секунд(ы) прошло";
// }

setInterval(function(){
    counter++;
    timer.innerHTML = counter + " секунд(ы) прошло(и)";
}, 1000)

setTimeout(function() {
    console.log("Прошло 5 секунд.");
}, 5000)