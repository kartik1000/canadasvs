

function myFunction() {
    var total = 0;
    var coffee = document.forms[0];
    var txt = "";
    var i;

    for (i = 1; i <=6; i++) {
        if (coffee[i].checked) {
        total = parseInt(coffee[i].value);
        break;
        }
    }
    if(coffee[8].checked)
        total += parseInt(coffee[8].value);

    if(coffee[11].checked)
        total += parseInt(coffee[11].value);

    total += checkWagePoints(parseFloat(coffee[13].value),parseFloat(coffee[14].value));

    for (i = 16; i <=22; i++) {
        if (coffee[i].checked) {
        total += parseInt(coffee[i].value);
        break;
        }
    }

    for (i = 24; i <=30; i++) {
        if (coffee[i].checked) {
        total += parseInt(coffee[i].value);
        break;
        }
    }

    if(coffee[32].checked)
        total += parseInt(coffee[32].value);

    for (i = 35; i <=41; i++) {
        if (coffee[i].checked) {
        total += parseInt(coffee[i].value);
        break;
        }
    }

    for (i = 43; i <=45; i++) {
        if (coffee[i].checked) {
        total += parseInt(coffee[i].value);
        break;
        }
    }

    if(coffee[47].checked)
        total += parseInt(coffee[47].value);

    if(coffee[50].checked)
    total += parseInt(coffee[50].value);

    for (i = 53; i <=60; i++) {
        if (coffee[i].checked) {
        total += parseInt(coffee[i].value);
        break;
        }
    }

    document.getElementById("demo").value =  total;
}

function  checkWagePoints(wage,hours){
    if(isNaN(wage))
        wage = 0;
    if(isNaN(hours))
        hours = 0;
    var yearly = wage * hours * 52;
    var temp = 26250;
    var points = 3;
    if(yearly < 25000){
        return 0;
    }
    if(yearly >= 100000){
        return 50;399999
    }

    while(25000<= temp < 100000){
        if(yearly<temp)
            return points;

        if(temp <=39999){
            temp += 1250;
        }
        else{
            temp+= 2500;
        }
        points++;
    }
}