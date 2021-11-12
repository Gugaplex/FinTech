function add(n1, n2) {
    return n1 + n2;
    }

function subtract(n1, n2) {
    return n1 + n2;
    }

function product(n1, n2) {
    return n1 * n2;
    }

function leap(year) {
    if ((year % 4 == 0) && !(year % 100 == 0) || (year %400 == 0)){
        console.log(year + " is a leap year");
    }

    
    else {
        console.log(year + " is not leap year");
    }
}



function inchcm(inch){
    return console.log(inch + " inches is " + inch * 2.5 + " cm");
}

function determine(input){
    if (input == null){
        return console.log(true);
    }
    else{
        return console.log(false);
     }
    
}
leap(2020);
inchcm(6);
determine();
