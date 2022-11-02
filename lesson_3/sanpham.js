const buttonSearch = document.querySelector('.header__search-icon');
const inputSearch = document.querySelector('.search-input');

function handleSearch(e) {
    if (inputSearch.value.length <= 0) {
        e.preventDefault();
    }
    else {
        window.location.href = "../lesson_9/index.html";
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