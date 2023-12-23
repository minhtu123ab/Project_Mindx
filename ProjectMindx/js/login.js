const inputUse = document.getElementById("input-use");
const inputPass = document.getElementById("input-pass");
const inputUseDk = document.getElementById("input-use-1");
const inputPassDk = document.getElementById("input-pass-1");
const inputPassDkAgain = document.getElementById("input-pass-again-1");
const btnRegister = document.getElementById("btn-register");
const btnLogin = document.getElementById("btn-login");
const btnBackDk = document.getElementById("btn-back-1");
const btnRegisterDk = document.getElementById("btn-register-1");
const allDn = document.getElementById("all-dn")
const allDk = document.getElementById("all-dn-1")
const formLogin = document.getElementById("login-form");
const formRegister = document.getElementById("register-form");
const inputNameRe = document.getElementById("input-name");
const loginNoError = document.getElementById("login-noerror-id");
const regNoError = document.getElementById("reg-noerror-id");
const errorUseRed = document.getElementById("erroruse");
const errorUseLoginRed = document.getElementById("erroruselogin");
const errorPassRed = document.getElementById("errorpass");
const errorName = document.getElementById("errorname");
const errorPassAgainRed = document.getElementById("errorpassagain");

inputUse.addEventListener("input",function(){
    if(inputUse.value.length != 10 || inputUse.value[0] != 0){
        errorUseLoginRed.innerHTML = "Số điện thoại bắt đầu bằng số 0 và có 10 ký tự.";
    }
    else{
        errorUseLoginRed.innerHTML = "";
    }
})

inputUseDk.addEventListener("input", function() {
    if (inputUseDk.value.length != 10 || inputUseDk.value[0] != 0) {
        errorUseRed.innerHTML = "Số điện thoại phải bắt đầu bằng số 0 và có 10 ký tự.";
    } else {
        let isRegistered = false;
        for (let i = 0; i < registers.length; i++) {
            if (registers[i].use == inputUseDk.value) {
                isRegistered = true;
                break; // Nếu tìm thấy một số điện thoại đã đăng ký, thoát khỏi vòng lặp
            }
        }

        if (isRegistered) {
            errorUseRed.innerHTML = "Số điện thoại đã có người đăng ký";
        } else {
            errorUseRed.innerHTML = "";
        }
    }
});

inputNameRe.addEventListener("input", function(){
    if(inputNameRe.value.length < 5 || inputNameRe.value.length > 30){
        errorName.innerHTML = "Tên người dùng phải từ 5 đến 30 ký tự";
    }
    else{
        let isRegistered = false;
        for (let i = 0; i < registers.length; i++) {
            if (registers[i].name == inputNameRe.value) {
                isRegistered = true;
                break; // Nếu tìm thấy một tên người dùng đã đăng ký, thoát khỏi vòng lặp
            }
        }

        if (isRegistered) {
            errorName.innerHTML = "Tên người dùng đã có người sử dụng";
        } else {
            errorName.innerHTML = "";
        }
    }
})
inputPassDk.addEventListener("input", function(){
    if(inputPassDk.value.length < 6){
        errorPassRed.innerHTML = "Mật khẩu phải chứa ít nhất 6 kí tự";
    }
    else{
        errorPassRed.innerHTML = "";
    }
})

function openRegNoError() {
    regNoError.style.display = "flex";
    setTimeout(function(){
        regNoError.style.display = "none";
    },3000);
}
function openLoginNoError() {
    loginNoError.style.display = "flex";
    setTimeout(function(){
        loginNoError.style.display = "none";
    },3000);
}


function navigateTo(page) {
    const currentUrl = window.location.href;
    const baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/') + 1);
    const newUrl = baseUrl + page;

    window.location.replace(newUrl);
}


let usePass = [];
let usePassDk = [];
let usePassDn = [];

function back() {
    allDn.style.display = "flex";
    allDk.style.display = "none";
}

function register() {
    allDn.style.display = "none";
    allDk.style.display = "flex";
}

let registers = []; // Mảng chứa thông tin đăng ký

formRegister.addEventListener("submit", function (event) {
    event.preventDefault();
    let useRe = inputUseDk.value;
    let passRe = inputPassDk.value;
    let passAgain = inputPassDkAgain.value;
    let nameRe = inputNameRe.value;
    let countUse = 0;
    let countName = 0;
    for(let i = 0; i < registers.length; i++) {
        if(registers[i].use == useRe){
            countUse ++;
        }
        if(registers[i].name == nameRe){
            countName ++;
    }}

    // Kiểm tra giá trị đầu vào
    if (useRe.length !== 10 || useRe[0] !== '0') {
        errorUseRed.innerHTML = "Số điện thoại phải bắt đầu bằng số 0 và có 10 ký tự.";
    } else if (passRe !== passAgain) {
        errorPassAgainRed.innerHTML = "Mật khẩu nhập lại không đúng";
    } else if (passRe.length < 6){
        errorPassRed.innerHTML = "Mật khẩu phải chứa ít nhất 6 kí tự";
    } else if(inputNameRe.value.length < 5 || inputNameRe.value.length > 30){
        errorName.innerHTML = "Tên người dùng phải từ 5 đến 30 ký tự";
    } else if(countUse == 1){
        errorUseRed.innerHTML = "Số điện thoại đã có người đăng kí";
    } else if(countName == 1){
        errorName.innerHTML = "Tên người dùng đã có người đăng kí";
    } else {
        // Thêm thông tin đăng ký vào mảng
        let registerInfo = {
            use: useRe,
            pass: passRe,
            name: nameRe,
            cart: [], 
        };
        registers.push(registerInfo);
        localStorage.setItem("registers", JSON.stringify(registers));
        openRegNoError();
        back();
    }
    inputPassDk.value = "";
    inputPassDkAgain.value = "";
    inputUseDk.value = "";
    inputNameRe.value = "";
});

btnRegisterDk.addEventListener("click", function (event) {
    event.preventDefault();
    let useRe = inputUseDk.value;
    let passRe = inputPassDk.value;
    let passAgain = inputPassDkAgain.value;
    let nameRe = inputNameRe.value;
    let countUse = 0;
    let countName = 0;
    for(let i = 0; i < registers.length; i++) {
        if(registers[i].use == useRe){
            countUse ++;
        }
    }

    // Kiểm tra giá trị đầu vào
    if (useRe.length !== 10 || useRe[0] !== '0') {
        errorUseRed.innerHTML = "Số điện thoại phải bắt đầu bằng số 0 và có 10 ký tự.";
    } else if (passRe.length < 6){
        errorPassRed.innerHTML = "Mật khẩu phải chứa ít nhất 6 kí tự";
    }else if (passRe !== passAgain) {
        errorPassAgainRed.innerHTML = "Mật khẩu nhập lại không đúng";
    }  else if(inputNameRe.value.length < 5 || inputNameRe.value.length > 30){
        errorName.innerHTML = "Tên người dùng phải từ 5 đến 30 ký tự";
    } else if(countUse == 1){
        errorUseRed.innerHTML = "Số điện thoại đã có người đăng kí";
    } else if(countName == 1){
        errorName.innerHTML = "Tên người dùng đã có người đăng kí";
    } else {
        // Thêm thông tin đăng ký vào mảng
        let registerInfo = {
            use: useRe,
            pass: passRe,
            name: nameRe,
            cart: [],
        };
        registers.push(registerInfo);
        localStorage.setItem("registers", JSON.stringify(registers));
        openRegNoError();
        back();
    }
    inputPassDk.value = "";
    inputPassDkAgain.value = "";
    inputUseDk.value = "";
    inputNameRe.value = "";
});

// Lấy dữ liệu từ localStorage khi trang được load
window.onload = function () {
    const storedRegisters = localStorage.getItem("registers");
    if (storedRegisters) {
        registers = JSON.parse(storedRegisters);
    }
};


btnRegister.addEventListener("click", function(event){
        event.preventDefault();
        register();
    })
btnBackDk.addEventListener("click", function(event){
        event.preventDefault();
        back();
    })
    
    formLogin.addEventListener("submit", function (event) {
        event.preventDefault();
        let useLogin = inputUse.value;
        let passLogin = inputPass.value;
    
        // Kiểm tra giá trị đầu vào
        if (useLogin === "" || passLogin === "") {
            errorUseLoginRed.innerHTML = "Thông tin đăng nhập không chính xác.";
            return;
        }
        // So sánh tài khoản đăng nhập với danh sách đã đăng ký
        let isLoginSuccessful = false;
        for (let i = 0; i < registers.length; i++) {
            if (registers[i].use === useLogin && registers[i].pass === passLogin) {
                isLoginSuccessful = true;
                sessionStorage.setItem("login", JSON.stringify(registers[i]));
                break;
            }
        }

        // Xử lý kết quả đăng nhập
        if (isLoginSuccessful) {
            openLoginNoError();
            setTimeout(function() {
                navigateTo('index.html');
            }, 700);
        } else {
            errorUseLoginRed.innerHTML = "Thông tin đăng nhập không chính xác.";
        }
    
        inputPass.value = "";
        inputUse.value = "";
    });

btnLogin.addEventListener("click", function(event) {
    event.preventDefault();
        let useLogin = inputUse.value;
        let passLogin = inputPass.value;
    
        // Kiểm tra giá trị đầu vào
        if (useLogin === "" || passLogin === "") {
            errorUseLoginRed.innerHTML = "Thông tin đăng nhập không chính xác.";
            return;
        }
    
        // So sánh tài khoản đăng nhập với danh sách đã đăng ký
        let isLoginSuccessful = false;
        for (let i = 0; i < registers.length; i++) {
            if (registers[i].use === useLogin && registers[i].pass === passLogin) {
                isLoginSuccessful = true;
                sessionStorage.setItem("login", JSON.stringify(registers[i]));
                break;
                
            }
        }
    
        // Xử lý kết quả đăng nhập
        if (isLoginSuccessful) {
            openLoginNoError();
            setTimeout(function() {
                navigateTo('index.html');
            }, 700);
        } else {
            errorUseLoginRed.innerHTML = "Thông tin đăng nhập không chính xác.";
        }
    
        inputPass.value = "";
        inputUse.value = "";
    });
    








































