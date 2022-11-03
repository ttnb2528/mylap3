
function opencard() {
    location.href = "./donhang.html";
  }
  const $ = document.querySelector.bind(document);
  
  const tbody = $(".sp-body");
  const sumA = $(".sumA");
  const sumB = $(".sumB");
  const sumC = $(".sumC");
  const discount = $(".sp-discount");
  const lastTotal = $(".total");
  
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
  
  const convertPrice = (data) => {
    const currency = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(data);
    return (
      currency.slice(0, currency.length - 2) + '<span class="currency">đ</span>'
    );
  };
  
  const initData = (data) => {
    let result = [];
    // {'sp001': 100, 'sp002': 100}
    //qua entries
    // [['sp001', 100], ['sp002', 100]]
    Object.entries(data).forEach((data) => {
      result.push(data);
    });
    return result;
  };
  
  const handleRemove = (code) => {
    if (window.localStorage[code]) {
      window.localStorage.removeItem(code);
      renderView(window.localStorage);
    }
  };
  
  const getDiscountRate = () => {
    const d = new Date();
    const weekday = d.getDay();
    const totalMins = d.getHours() * 60 + d.getMinutes();
    if (
      weekday >= 1 &&
      weekday <= 3 &&
      ((totalMins >= 420 && totalMins <= 660) ||
        (totalMins >= 780 && totalMins <= 1020))
    )
      return 0.1;
    return 0;
  };
  
  const renderTotal = (sum) => {
    const percent = getDiscountRate();
    const discountNumber = sum * getDiscountRate();
    const tax = 0.1 * (sum - discountNumber);
  
    sumA.innerHTML = convertPrice(sum);
    sumB.innerHTML = convertPrice(discountNumber);
    sumC.innerHTML = convertPrice(tax);
    discount.innerText = percent;
    lastTotal.innerHTML = convertPrice(sum + discountNumber + tax);
  };
  
  const createTagTr = (data) => {
    const tr = document.createElement("tr");
  
    const tdOfImg = document.createElement("td");
    tdOfImg.classList.add("sp-center");
    const img = document.createElement("img");
    img.src = data.img;
    img.alt = data.name;
    tdOfImg.appendChild(img);
    tr.appendChild(tdOfImg);
  
    const tdOfName = document.createElement("td");
    tdOfName.innerText = data.name;
    tr.appendChild(tdOfName);
  
    const tdOfCount = document.createElement("td");
    tdOfCount.classList.add("sp-right");
    tdOfCount.innerText = data.count;
    tr.appendChild(tdOfCount);
  
    const tdOfPrice = document.createElement("td");
    tdOfPrice.classList.add("sp-right");
    tdOfPrice.innerHTML = convertPrice(data.price);
    tr.appendChild(tdOfPrice);
  
    const tdOfTotal = document.createElement("td");
    tdOfTotal.classList.add("sp-right");
    tdOfTotal.innerHTML = convertPrice(data.total);
    tr.appendChild(tdOfTotal);
  
    const tdOfRemove = document.createElement("td");
    tdOfRemove.classList.add("sp-center");
    const button = document.createElement("button");
    button.classList.add("trash");
    button.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    button.onclick = () => handleRemove(data.code);
    tdOfRemove.appendChild(button);
    tr.appendChild(tdOfRemove);
  
    return tr;
  };
  
  const displayProduct = (data) => {
    if (data.length > 0) {
      const localData = initData(data);
      let sum = 0;
      const listDataView = localData.map((item) => {
        const count = +item[1];
        const code = item[0];
        const total = count * itemList[code].price;
        sum += total;
  
        return {
          img: itemList[code].photo,
          name: itemList[code].name,
          count,
          price: itemList[code].price,
          total,
          code,
        };
      });
  
      listDataView.forEach((item) => {
        const tr = createTagTr(item);
        tbody.appendChild(tr);
      });
      renderTotal(sum);
    } else {
      renderTotal(0);
    }
  };
  
  const renderView = (data) => {
    tbody.innerHTML = "";
    displayProduct(data);
  };
  
  displayProduct(window.localStorage);
  
  window.addEventListener("storage", () => renderView(window.localStorage));
  