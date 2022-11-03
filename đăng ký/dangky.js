const buttonSearch = document.querySelector('.header__search-icon');
const inputSearch = document.querySelector('.search-input');

function handleSearch(e) {
    if (inputSearch.value.length <= 0) {
        e.preventDefault();
    }
    else {
        window.location.href = "../tìm kiếm/timkiem.html";
    }

}
buttonSearch.addEventListener("click", handleSearch);
buttonSearch.addEventListener("click", Search);


inputSearch.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        handleSearch(e);
        Search(e);
    }
})

function opencard() {
    location.href = "../đơn hàng/donhang.html";
  }


function Search() {
    var h1Elements = document.querySelectorAll('h1');
    var result_h1 = '';

    for (var i = 0; i < h1Elements.length; ++i) {
        if (h1Elements[i].innerText.toUpperCase().includes(inputSearch.value.toUpperCase())) {
            result_h1 += `<h1>${h1Elements[i].innerText}</h1>`
        }
    }

    var h2Elements = document.querySelectorAll('h2');

    for (var i = 0; i < h2Elements.length; ++i) {
        if (h2Elements[i].innerText.toUpperCase().includes(inputSearch.value.toUpperCase())) {
            result_h1 += `<h2>${h2Elements[i].innerText}</h2>`
        }
    }


    var h3Elements = document.querySelectorAll('h3');


    for (var i = 0; i < h3Elements.length; ++i) {
        if (h3Elements[i].innerText.toUpperCase().includes(inputSearch.value.toUpperCase())) {
            result_h1 += `<h3>${h3Elements[i].innerText}</h3>`
        }
    }

    var liElements = document.querySelectorAll('li');


    for (var i = 0; i < liElements.length; ++i) {
        if (liElements[i].innerText.toUpperCase().includes(inputSearch.value.toUpperCase())) {
            result_h1 += `<li>${liElements[i].innerText}</li>`
        }
    }

    var pElements = document.querySelectorAll('p');


    for (var i = 0; i < pElements.length; ++i) {
        if (pElements[i].innerText.toUpperCase().includes(inputSearch.value.toUpperCase())) {
            result_h1 += `<p>${pElements[i].innerText}</p>`
        }
    }



    console.log(result_h1);

    window.sessionStorage.setItem('search', result_h1);
}

function frmValidate() {
    var frm = document.forms['regfr'];

    //mail
    var mail = frm.mail;
    var emailReg  = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    //mật khẩu
    var mk = frm.psw;
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    //nhập lại mk
    var pre_mk = frm.pre_psw;

    //mail đúng
    //Email chỉ chấp nhận
    /*ký tự HOA
    ký tự thường
    chữ số
    ký tự đặc biệt =_.
    một ký tự @, theo sau là các ký tự
    kết thúc bằng dấu . và tối thiểu 2 ký tự, tối đa 4 ký tự
    */
    if (!emailReg .test(mail.value)) {
        alert("Hãy nhập đúng định dạng Mail!");
        mail.focus();
        return false;
    }
    //kiểm tra mk
    /*
    Mật khẩu phải chứa ít nhất
    1 ký tự HOA
    1 ký tự thường
    1 chữ số
    1 ký tự đặc biệt
    độ dài tối thiểu 8 ký tự
    */
    if (strongRegex.test(mk.value) == false) {
        alert("Mk có 8 ký tự gồm in HOA, thường, và số!");
        mk.focus();
        return false;
    }
    //Nhập lại Mật khẩu: 
    //kiểm tra đúng với trường mật khẩu đã nhập trước đó
    if (mk.value != pre_mk.value) {
        alert("Nhập lại mk không trùng khớp");
        pre_mk.focus();
        return false;
    }

    var user = 
    {
        email: mail.value,
        password: mk.value
    }

    var json = JSON.stringify(user);
    localStorage.setItem('dangky', json);
    alert("Đăng ký thành công!");
}

