const headingIphonePrm = document.getElementById("heading-iphone-prm");
const headingIphonePr = document.getElementById("heading-iphone-pr");
const headingIphoneThuong = document.getElementById("heading-iphone-thuong");
const headingMacPro = document.getElementById("heading-mac-pro");
const headingMacAir = document.getElementById("heading-mac-air");
const headingWatchSE = document.getElementById("watch-SE-heading");
const headingWatchSeries = document.getElementById("watch-series-heading");
const headingWatchUltra = document.getElementById("watch-ultra-heading");
const iphonePromax = document.getElementById("iphone-promax");
const iphonePro = document.getElementById("iphone-pro");
const iphoneThuong = document.getElementById("iphone-thuong");
const macPro = document.getElementById("mac-pro-all");
const macAir = document.getElementById("mac-air-all");
const watchSE = document.getElementById("watch-SE");
const watchSeries = document.getElementById("watch-series");
const watchUltra = document.getElementById("watch-ultra");
const ipadPro = document.getElementById("ipad-pro-all");
const ipadAir = document.getElementById("ipad-air-all");
const ipadMini = document.getElementById("ipad-mini-all");
const ipadWifi = document.getElementById("ipad-wifi-all");
const airPods = document.getElementById("airpods");
const sacApple = document.getElementById("sac-apple");
const opApple = document.getElementById("op-apple");
const headingIpadPro = document.getElementById("heading-ipad-pro")
const headingIpadAir = document.getElementById("heading-ipad-air")
const headingIpadMini = document.getElementById("heading-ipad-mini")
const headingIpadWifi = document.getElementById("heading-ipad-wifi")
const headingAirPods = document.getElementById("heading-airpods")
const headingSacApple = document.getElementById("heading-sac")
const headingOpApple = document.getElementById("heading-op")
const loginShop = document.getElementById("login-shop");
const barsAll = document.getElementById("bars-all");
const navBar = document.getElementById("navbar-2");
const inputCmt = document.getElementById("input-cmt");
const btnCmt = document.getElementById("btn-cmt");
const formCmt = document.getElementById("input-btn-cmt");
const cmtAll = document.getElementById("comment");
const loginAll = document.getElementById("login-all");
const nameId = document.getElementById("name-id");
const textId = document.getElementById("text-name");
const themGioHang = document.querySelectorAll("#themgiohang");
const muaHang = document.querySelectorAll("#muahang");
const btnGioHang = document.getElementById("btn-giohang");
const pushCart = document.getElementById("push-cart-id");
const thongbaoMua = document.getElementById("muahang-id");
const sorryCart = document.getElementById("sorry-cart");
const cartAllId = document.getElementById("cart-all-id");
const btnCloseCheckCart = document.getElementById("close-cart");
const productCard = document.getElementById("product-card");

function openPushCart() {
    pushCart.style.display = "flex";
    setTimeout(function(){
        pushCart.style.display = "none";
    },2000);
}
function openMuaHang() {
    thongbaoMua.style.display = "flex";
    setTimeout(function(){
        thongbaoMua.style.display = "none";
    },2000);
}
function openCheckCart() {
    cartAllId.style.display = "flex";
}
function closeCheckCart(){
    cartAllId.style.display = "none";
}

btnGioHang.addEventListener("click", function(){
    openCheckCart();
})
btnCloseCheckCart.addEventListener("click", function(){
    closeCheckCart();
});

themGioHang.forEach(function(cell){
    cell.addEventListener("click", function(){
        openPushCart();
    })
})
muaHang.forEach(function(cell){
    cell.addEventListener("click", function(){
        openMuaHang();
    })
})









let countIphone1 = 0;
let countIphone2 = 0;
let countIphone3 = 0;
let countMac1 = 0;
let countMac2 = 0;
let countWatch1 = 0;
let countWatch2 = 0;
let countWatch3 = 0;
let countIpad1 = 0;
let countIpad2 = 0;
let countIpad3 = 0;
let countIpad4 = 0;
let countNavBar = 0;
let countAcc1 = 0;
let countAcc2 = 0;
let countAcc3 = 0;
barsAll.addEventListener("click",function(){
    if(countNavBar % 2 == 0){
        navBar.style.display = "block";
        countNavBar++;
    }
    else{
        navBar.style.display = "none";
        countNavBar--;
    }
})
headingIphonePrm.addEventListener("click", function(){
    if(countIphone1 % 2 ==0){
        iphonePromax.style.display = "flex";
        iphoneThuong.style.display = "none";
        iphonePro.style.display = "none";
        countIphone1++;
        if(countIphone2 == 1){
            countIphone2--;
        }
        if(countIphone3 == 1){
            countIphone3--;
        }
    }
    else{
        iphonePromax.style.display = "none";
        countIphone1--;
    }
})

headingIphonePr.addEventListener("click", function(){
    if(countIphone2 % 2 ==0){
        iphonePro.style.display = "flex";
        iphoneThuong.style.display = "none";
        iphonePromax.style.display = "none";
        countIphone2++;
        if(countIphone1 == 1){
            countIphone1--;
        }
        if(countIphone3 == 1){
            countIphone3--;
        }
    }
    else{
        iphonePro.style.display = "none";
        countIphone2--;
    }
})

headingIphoneThuong.addEventListener("click", function(){
    if(countIphone3 % 2 ==0){
        iphoneThuong.style.display = "flex";
        iphonePro.style.display = "none";
        iphonePromax.style.display = "none";
        countIphone3++;
        if(countIphone1 == 1){
            countIphone1--;
        }
        if(countIphone2 == 1){
            countIphone2--;
        }
    }
    else{
        iphoneThuong.style.display = "none";
        countIphone3--;
    }
})

headingMacPro.addEventListener("click", function(){
    if(countMac1 % 2 == 0){
        macPro.style.display = "flex";
        macAir.style.display = "none";
        countMac1++;
        if(countMac2 == 1){
            countMac2--;
        }
    }
    else{
        macPro.style.display = "none";
        countMac1--;
    }
})

headingMacAir.addEventListener("click", function(){
    if(countMac2 % 2 == 0){
        macAir.style.display = "flex";
        macPro.style.display = "none";
        countMac2++;
        if(countMac1 == 1){
            countMac1--;
        }
    }
    else{
        macAir.style.display = "none";
        countMac2--;
    }
})


headingWatchSE.addEventListener("click", function(){
    if(countWatch1 % 2 ==0){
        watchSE.style.display = "flex";
        watchUltra.style.display = "none";
        watchSeries.style.display = "none";
        countWatch1++;
        if(countWatch2 == 1){
            countWatch2--;
        }
        if(countWatch3 == 1){
            countWatch3--;
        }
    }
    else{
        watchSE.style.display = "none";
        countWatch1--;
    }
})

headingWatchSeries.addEventListener("click", function(){
    if(countWatch2 % 2 ==0){
        watchSeries.style.display = "flex";
        watchUltra.style.display = "none";
        watchSE.style.display = "none";
        countWatch2++;
        if(countWatch1 == 1){
            countWatch1--;
        }
        if(countWatch3 == 1){
            countWatch3--;
        }
    }
    else{
        watchSeries.style.display = "none";
        countWatch2--;
    }
})

headingWatchUltra.addEventListener("click", function(){
    if(countWatch3 % 2 ==0){
        watchUltra.style.display = "flex";
        watchSeries.style.display = "none";
        watchSE.style.display = "none";
        countWatch3++;
        if(countWatch1 == 1){
            countWatch1--;
        }
        if(countWatch2 == 1){
            countWatch2--;
        }
    }
    else{
        watchUltra.style.display = "none";
        countWatch3--;
    }
})


headingIpadPro.addEventListener("click", function(){
    if(countIpad1 % 2 ==0){
        ipadPro.style.display = "flex";
        ipadMini.style.display = "none";
        ipadAir.style.display = "none";
        ipadWifi.style.display = "none";
        countIpad1++;
        if(countIpad2 == 1){
            countIpad2--;
        }
        if(countIpad3 == 1){
            countIpad3--;
        }
        if(countIpad4 == 1){
            countIpad4--;
        }
    }
    else{
        ipadPro.style.display = "none";
        countIpad1--;
    }
})

headingIpadAir.addEventListener("click", function(){
    if(countIpad2 % 2 ==0){
        ipadPro.style.display = "none";
        ipadMini.style.display = "none";
        ipadAir.style.display = "flex";
        ipadWifi.style.display = "none";
        countIpad2++;
        if(countIpad1 == 1){
            countIpad1--;
        }
        if(countIpad3 == 1){
            countIpad3--;
        }
        if(countIpad4 == 1){
            countIpad4--;
        }
    }
    else{
        ipadAir.style.display = "none";
        countIpad2--;
    }
})

headingIpadMini.addEventListener("click", function(){
    if(countIpad3 % 2 ==0){
        ipadPro.style.display = "none";
        ipadMini.style.display = "flex";
        ipadAir.style.display = "none";
        ipadWifi.style.display = "none";
        countIpad3++;
        if(countIpad2 == 1){
            countIpad2--;
        }
        if(countIpad1 == 1){
            countIpad1--;
        }
        if(countIpad4 == 1){
            countIpad4--;
        }
    }
    else{
        ipadMini.style.display = "none";
        countIpad3--;
    }
})

headingIpadWifi.addEventListener("click", function(){
    if(countIpad4 % 2 ==0){
        ipadWifi.style.display = "flex";
        ipadPro.style.display = "none";
        ipadMini.style.display = "none";
        ipadAir.style.display = "none";
        countIpad4++;
        if(countIpad2 == 1){
            countIpad2--;
        }
        if(countIpad3 == 1){
            countIpad3--;
        }
        if(countIpad1 == 1){
            countIpad1--;
        }
    }
    else{
        ipadWifi.style.display = "none";
        countIpad4--;
    }
})



headingAirPods.addEventListener("click", function(){
    if(countAcc1 % 2 ==0){
        airPods.style.display = "flex";
        opApple.style.display = "none";
        sacApple.style.display = "none";
        countAcc1++;
        if(countAcc2 == 1){
            countAcc2--;
        }
        if(countAcc3 == 1){
            countAcc3--;
        }
    }
    else{
        airPods.style.display = "none";
        countAcc1--;
    }
})

headingSacApple.addEventListener("click", function(){
    if(countAcc2 % 2 ==0){
        sacApple.style.display = "flex";
        opApple.style.display = "none";
        airPods.style.display = "none";
        countAcc2++;
        if(countAcc1 == 1){
            countAcc1--;
        }
        if(countAcc3 == 1){
            countAcc3--;
        }
    }
    else{
        sacApple.style.display = "none";
        countAcc2--;
    }
})

headingOpApple.addEventListener("click", function(){
    if(countAcc3 % 2 ==0){
        opApple.style.display = "flex";
        sacApple.style.display = "none";
        airPods.style.display = "none";
        countAcc3++;
        if(countAcc1 == 1){
            countAcc1--;
        }
        if(countAcc2 == 1){
            countAcc2--;
        }
    }
    else{
        opApple.style.display = "none";
        countAcc3--;
    }
})


const defaultTodos =[];
const localTodos =localStorage.getItem("todos");
const todos = localTodos ? JSON.parse(localTodos) : defaultTodos;



btnCmt.addEventListener("click", function(event){
    event.preventDefault();
    const NameValue = {
        Name : loginSession.name,
        value : inputCmt.value,
    }
    todos.push(NameValue);
    localStorage.setItem("todos",JSON.stringify(todos));
    cmtAll.innerHTML = "";
    render();
});
let loginSession = [];
let NameSto = [];
let sessionLogin = sessionStorage.getItem("login");
function init(){
    render();
    if(sessionLogin){
        loginSession = JSON.parse(sessionLogin);
    }
}

function render(){
    inputCmt.value = "";
    for (let i = 0; i < todos.length; i++){
        const div = document.createElement("div");
        cmtAll.appendChild(div);
        const span = document.createElement("span");
        span.innerHTML = todos[i].Name;
        cmtAll.appendChild(span);
        const p = document.createElement("p");
        p.innerHTML = todos[i].value;
        cmtAll.appendChild(p);
    }
}
init();
if(sessionLogin){
    loginAll.style.display = "none";
    nameId.style.display = "block"
    textId.innerHTML = loginSession.name;
}






// Hàm để lưu giỏ hàng vào localStorage
function saveCartToLocalStorage(cartData, username) {
    localStorage.setItem(`cart_${username}`, JSON.stringify(cartData));
}

// Hàm để đọc giỏ hàng từ localStorage
function getCartFromLocalStorage(username) {
    const cartData = localStorage.getItem(`cart_${username}`);
    return cartData ? JSON.parse(cartData) : [];
}

// Hàm để thêm sản phẩm vào giỏ hàng
function addToCart(headingValue, imgSrcValue, giaValue) {
    let productCard = document.getElementById("product-cart"); // Replace with your actual ID
    let productCardTr = document.createElement("div");
    let productCardTd1 = document.createElement("span");
    let productCardTd2 = document.createElement("span");
    let productCardTd3 = document.createElement("span");
    let imgProductCard = document.createElement("img");
    let productCardTd4 = document.createElement("div");
    let productCardBtnDelete = document.createElement("button");
    productCardBtnDelete.style.backgroundColor = "rgb(255, 49, 49)";
    let productCardBr1 = document.createElement("br");
    let productCardBr2 = document.createElement("br");
    let productCardBtnMua = document.createElement("button");
    productCardBtnMua.style.backgroundColor = "rgb(0, 167, 0)";
    
    imgProductCard.setAttribute('src', imgSrcValue);
    productCardTd2.appendChild(imgProductCard);
    productCardTd1.textContent = headingValue;
    productCardTd3.textContent = giaValue;
    productCardBtnDelete.textContent = "Delete";
    productCardBtnMua.textContent = "Thanh toán";

    // Xóa sản phẩm khỏi giỏ hàng khi nhấp vào nút "Delete"
    productCardBtnDelete.addEventListener("click", function() {
        productCard.removeChild(productCardTr);
        // Cập nhật giỏ hàng sau khi xóa
        updateCart(loginSession.name);
    });

    // Xóa sản phẩm khi thanh toán
    productCardBtnMua.addEventListener("click", function() {
        // Xử lý logic thanh toán ở đây
        openMuaHang();
        // Sau khi xử lý thanh toán, có thể xóa sản phẩm khỏi giỏ hàng nếu cần
        productCard.removeChild(productCardTr);
        // Cập nhật giỏ hàng sau khi xóa
        updateCart(loginSession.name);
    });

    productCardTd4.appendChild(productCardBtnDelete);
    productCardTd4.appendChild(productCardBr1);
    productCardTd4.appendChild(productCardBr2);
    productCardTd4.appendChild(productCardBtnMua);
    productCardTr.appendChild(productCardTd1);
    productCardTr.appendChild(productCardTd2);
    productCardTr.appendChild(productCardTd3);
    productCardTr.appendChild(productCardTd4);
    productCard.appendChild(productCardTr);

    // Lưu giỏ hàng vào localStorage sau khi thêm sản phẩm mới
    updateCart(loginSession.name);
}

// Hàm cập nhật giỏ hàng và lưu vào localStorage
function updateCart(username) {
    const productCard = document.getElementById("product-cart");
    const cartItems = Array.from(productCard.children);

    const cartData = cartItems.map(item => {
        return {
            heading: item.children[0].textContent,
            imgSrc: item.children[1].querySelector('img').getAttribute('src'),
            gia: item.children[2].textContent,
        };
    });
    saveCartToLocalStorage(cartData, username);
}

// Đọc giỏ hàng từ localStorage khi trang được tải
document.addEventListener('DOMContentLoaded', function() {

    document.getElementById("delete-all-cart").addEventListener("click", function() {
        // Xóa tất cả sản phẩm khỏi giỏ hàng
        productCard.innerHTML = '';
        // Cập nhật giỏ hàng sau khi xóa
        updateCart(loginSession.name);
    });

    document.getElementById("thanhtoan-cart").addEventListener("click", function() {
        // Xử lý logic thanh toán ở đây
        openMuaHang();
        // Xóa hết giỏ hàng khi thanh toán
        productCard.innerHTML = '';
        // Cập nhật giỏ hàng sau khi xóa
        updateCart(loginSession.name);
    });
    const savedCart = getCartFromLocalStorage(loginSession.name);

    // Re-render giỏ hàng từ dữ liệu lưu trữ
    const productCard = document.getElementById("product-cart");
    savedCart.forEach(item => {
        addToCart(item.heading, item.imgSrc, item.gia, loginSession.name);
    });
});

// Gọi hàm addToCart khi nhấp vào nút "Thêm vào giỏ hàng"
themGioHang.forEach(function(cell) {
    cell.addEventListener("click", function() {
        const parentElement = cell.parentNode.parentNode;
        let giaValue = parentElement.querySelector('.gia').textContent;
        let headingValue = parentElement.querySelector('.name').textContent;
        let imgSrcValue = parentElement.querySelector('img').getAttribute('src');

        addToCart(headingValue, imgSrcValue, giaValue, loginSession.name);
    });
});






