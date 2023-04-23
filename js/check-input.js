const $ = document;
let nameinput = $.querySelector(".name");
let faminput = $.querySelector(".family");
let phonenumber = $.querySelector(".phone");
let email = $.querySelector(".email");
let loginbutuon = $.querySelector(".button");
let formm = $.querySelector(".formbox__form");
let errorbox = $.querySelector(".erorr__inputnone");
let error_text = $.querySelector(".eror__input-text");

// nameinput.addEventListener('change', function(){
//     console.log("change");
//     var nameuser = nameinput.value;
//     console.log(nameuser);
//     return nameuser;
// })
loginbutuon.addEventListener('click', function(){
    let nameuser = nameinput.value;
    let famuser = faminput.value;
    let phoneuser = phonenumber.value;
    let mailuser = email.value;
    // console.log(nameuser);
    // console.log(famuser);
    // console.log(phoneuser);
    // console.log(mailuser);
    if (nameuser == "" || nameuser.includes("0") || nameuser.includes("1") || nameuser.includes("2") || nameuser.includes("3") || nameuser.includes("4") || nameuser.includes("5") || nameuser.includes("6") || nameuser.includes("7") || nameuser.includes("8") || nameuser.includes("9")) {
        console.log("not name");
        error_text.innerHTML = ""
        error_text.innerHTML += "لطفا نام درست را وارد کنید"
    } else if (famuser == ""  || famuser.includes("0") || famuser.includes("1") || famuser.includes("2") || famuser.includes("3") || famuser.includes("4") || famuser.includes("5") || famuser.includes("6") || famuser.includes("7") || famuser.includes("8") || famuser.includes("9")) {
        console.log("not fam");
        error_text.innerHTML = ""
        error_text.innerHTML += "نام خانوادگی صحیح نیست"
    } else if (phoneuser == "" || phoneuser.length < 11 ){
        console.log("not phone");
        error_text.innerHTML = ""
        error_text.innerHTML += "شماره موبایل باید با 09 شروع شود . نمونه : 09381122333"
    } else {
        error_text.innerHTML = ""
        console.log("ok");
    }
})