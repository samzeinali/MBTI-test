let user_select = document.querySelectorAll(".switch");
let Eval = 0;
let Ival = 0;
let num1 = 5;
let submitt =  document.querySelector(".submit")


function selecttest(event){
    let userSelect = event.target.id;
    let question_number =  userSelect[0];
    let selectAB = userSelect[1]
    if (question_number == "1") {
        if ( num1 == 5) {
            num1 += 1;
            if (selectAB == "A") {
                Eval += 1;
            } else {
                Ival += 2;
            }
        } else {
            console.log("you are before selected");
        }
    } else if (question_number == "2"){
        if (selectAB == "A") {
            Eval += 2;
        } else {
            Ival += 2;
        } 
    } else if (question_number == "3"){
        if (selectAB == "A") {
            Eval += 2;
        } else {
            Ival += 2;
        } 
    } else if (question_number == "4"){
        if (selectAB == "A") {
            Eval += 2;
        } else {
            Ival += 2;
        } 
    } else if (question_number == "5"){
        if (selectAB == "A") {
            Eval += 2;
        } else {
            Ival += 2;
        } 
    }
}
submitt.addEventListener('click', function submitok() {
    console.log("eval : " + Eval);
    console.log("Ival : " + Ival);
    if (Eval > 4) {
        console.log("E");
    }
    else   {
        console.log("I");
    }
})