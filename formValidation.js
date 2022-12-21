function init() {
    eml = document.getElementById('email');
    ps = document.getElementById('pass');
    rps = document.getElementById('repass');
    mn = document.getElementById('mno');

    err1 = document.getElementById('er1');
    err2 = document.getElementById('er2');
    err3 = document.getElementById('er3');
    err4 = document.getElementById('er4');

}

// Email Validation
function eval() {
    var email = eml.value;
    if (email.length == 0) {
        err1.innerHTML = "*enter email";
        err1.style.color = "red";
    }
    else if (email.search(/[@]/) == -1) {
        err1.innerHTML = "*enter valid email"
        err1.style.color = "red";
    }
    else if (email.search(/[.]/) == -1) {
        err1.innerHTML = "*enter valid email";
    }
    else {
        err1.innerHTML = "";
    }
}

// Password Validation
function passval() {
    var pass = ps.value;
    if (pass.length == 0) {
        err2.innerHTML = "*enter password "
        err2.style.color = "red";
    }
    else if (pass.search([/@/]) == -1) {
        err2.innerHTML = "*enter valid password "
        err2.style.color = "red";
    }
    else if (pass.search([/#/]) == -1) {
        err2.innerHTML = "*enter valid password "
        err2.style.color = "red";
    }
    else if (pass.search([/a-z/]) == -1) {
        err2.innerHTML = "*enter valid password "
        err2.style.color = "red";
    }
    else if (pass.search([/A-Z/]) == -1) {
        err2.innerHTML = "*enter valid password "
        err2.style.color = "red";
    }
    else if (pass.search([/0-9/]) == -1) {
        err2.innerHTML = "*enter valid password "
        err2.style.color = "red";
    }

    else {
        err2.innerHTML = "";
    }
}
function repassval() {
    var repass = rps.value;
    if (repass.length == 0) {
        err3.innerHTML = "*re-enter password";
        err3.style.color = "red";
    }
    else if (repass != pass) {
        err3.innerHTML = "*enter currect password";
        err3.style.color = "red";
    }
    else {
        err3.innerHTML = "";
    }
}
function mobval() {
    var mno = mn.value;
    if (mno.length == 0) {
        err4.innerHTML = "*enter mobile number"
        err4.style.color = "red";
    }
    else if (mno.search([/a-z/]) || mno.search([/A-Z/]) == -1) {
        err4.innerHTML = "*enter mobile number";
        err4.style.color = "red";
    }
    else if (mno.length < 10) {
        err4.innerHTML = "*enter valid mobile number";
        err4.style.color = "red";
    }
    else if (mno.length > 10) {
        err4.innerHTML = "*enter valid mobile number";
        err4.style.color = "red";
    }
    else {
        err4.innerHTML = "";
    }

}
