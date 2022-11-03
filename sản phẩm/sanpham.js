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

const listInput = document.querySelectorAll('input[type="number"]');
const listBtn = document.querySelectorAll('input[type="number"] + button');

const itemList = {
  sp001: {
    name: "Sữa Chua Vị Kiwi",
    price: 21000,
    photo: "../data/images/sanpham/kiwi.jpg",
  },
  sp002: {
    name: "Sữa Chua Vị Xoài",
    price: 22000,
    photo: "../data/images/sanpham/mango.jpg",
  },
  sp003: {
    name: "Sữa Chua Vị Dưa lưới",
    price: 23000,
    photo: "../data/images/sanpham/cantaloupe.jpg",
  },
  sp004: {
    name: "Sữa Chua Vị Mâm Xôi",
    price: 24000,
    photo: "../data/images/sanpham/blackberry.jpg",
  },
  sp005: {
    name: "Sữa Chua Vị Dâu Tây",
    price: 25000,
    photo: "../data/images/sanpham/strawberry.jpg",
  },
  sp006: {
    name: "Sữa Chua Vị Việt Quất",
    price: 26000,
    photo: "../data/images/sanpham/blueberry.jpg",
  },
  sp007: {
    name: "Sữa Chua Vị Bưởi",
    price: 27000,
    photo: "../data/images/sanpham/grapes.jpg",
  },
  sp008: {
    name: "Sữa Chua Vị Táo Xanh",
    price: 28000,
    photo: "../data/images/sanpham/green-apple.jpg",
  },
  sp009: {
    name: "Sữa Chua Vị Dứa",
    price: 29000,
    photo: "../data/images/sanpham/pineapple.jpg",
  },
};

//lay tat ca cac key tu cua obj luu vao mang
const listKey = Object.keys(itemList);

const setItemLocal = (i, total) => {
  if (total > 100) {
    alert("Số lượng đặt tối đa 100 sản phẩm, Vui lòng chọn lại!!");
    window.localStorage.setItem(listKey[i], 100);
  } else {
    alert("Bạn đã đặt hàng thành công");
    window.localStorage.setItem(listKey[i], total);
  }
};

const handleClick = (i) => {
  if (+listInput[i].value) {
    if (typeof window.localStorage[listKey[i]] === "undefined") {
      setItemLocal(i, +listInput[i].value);
      listInput[i].value = "0";
    } else {
      const number = +listInput[i].value;
      const current = +window.localStorage.getItem(listKey[i]);
      const total = number + current;
      listInput[i].value = "0";
      setItemLocal(i, total);
    }
  } else {
    alert("Vui lòng thêm sản phẩm");
  }
};

[...listBtn].forEach((btn, i) => {
  btn.addEventListener("click", () => handleClick(i));
});