//Code done by Jacques LM

function sleep_in(weekday, vacation) {

        if(weekday==true &&vacation==false){
            return false;
        }
        if(weekday==true && vacation==true){
            return true;
        }
        if(weekday==false && vacation==true){
            return true;
        }
        if(weekday==false && vacation== false){
            return true;
        }
        return weekday;
    }

function monkey_trouble(a_smile, b_smile){
    if(a_smile==true && b_smile==true){
        return true;
    }
    if(a_smile==false && b_smile==false){
        return true;
    }
    if(a_smile==true&& b_smile==false){
        return false;
    }
    if(a_smile==false && b_smile==true){
        return false;
    }
    return a_smile;
}

function string_times(word, num){
    var tord="";
    for(var i=0; i<num; i++){
        tord += word;
    }
    return tord;
}

function front_times(palabra, numero){
    var scord="";
    for(var i=0; i<numero; i++){
        scord += palabra.substring(0,3);
    }
    return scord;
}

function string_bits(qwerty) {
    var sword="";
    for(var i=0; i< qwerty.length; i++ ) {
        if(i % 2 === 0) {
            sword += qwerty[i];
        }
    }
    return sword;
}

function caughtSpeeding(speed, birthday){
    if(birthday===true) {
        speed -= 5;
        if(speed<65){
            return 0;
        }
        if(speed<=81 && speed>=65){
            return 1;
        }
        if(speed>81){
            return 2;
        }
    }
    if(birthday===false){
        if(speed<65){
            return 0;
        }
        if(speed<=81 && speed>=65){
            return 1;
        }
        if(speed>81){
            return 2;
        }
    }
}

function fizz_buzz(x){
    if(x%3===0 && x%5===0){
        return "FizzBuzz";
    }else if(x%3===0){
        return "Fizz";
    }else if(x%5===0){
        return "Buzz";
    }
    if(x%3!==0 && x%5!==0){
        return x+"!";
    }
}

function teaParty(tea, crumpets){
    if(tea<5 || crumpets<5){
        return 0;
    }
    if(tea>=2*crumpets || crumpets>=2*tea){
        return 2;
    }else if(tea>=5 && crumpets>=5){
        return 1;
    }
}

function blackjack(gambling, isbad){
    if(gambling>21 && isbad>21){
        return 0;
    }
    if(21-gambling>21-isbad){
        if(21-isbad>=0){
            return isbad;
        }else{
            return gambling;
        }
    }

    if(21-isbad>21-gambling){
        if(21-gambling>=0){
            return gambling;
        }else{
            return isbad;
        }
    }
}

function loneSum(a,b,c){
    if(a===3 && b===3 && c===3){
        a=0;
        b=0;
        c=0;
    }
    if(a===b){
        a=0;
        b=0;
    }
    if(a===c){
        a=0;
        c=0;
    }
    if(b===c){
        b=0;
        c=0;
    }
    return a+b+c;
}

function tester() {
    document.getElementById("output1").innerHTML = loneSum(3,3,3);
}








