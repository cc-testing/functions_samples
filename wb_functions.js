/*  function fast (speed) {

    var myspeed = speed;

    if ( myspeed < 60 ){
      console.log("you are not speeding");
    } else if ( myspeed > 80) {
       console.log("you get a ticket");
    } else if ( myspeed > 60 && myspeed < 80) {
        console.log("is it your birthday?");
    }
    return myspeed;
}

fast(100);

SPEED WITH BIRTHDAY - MY VERSION

function fast (speed,luckyday) {

    var myspeed = speed;
    var lucky = luckyday;
    var discspeed = 5;

    if ( myspeed < 60 ){
        console.log("you are not speeding. Have a nice day");
    } else if ( myspeed > 80 ) {
        console.log("you too fast you get no discount");
    } else if ( myspeed > 60 && myspeed < 80 && lucky == 1 ) {
        var newspeed = myspeed - discspeed;
        console.log("you speed was " + myspeed + " but it is your birthday so you get a 5 mile discount." + " Your birthday speed is " + newspeed )
    } else if ( myspeed > 60 && myspeed < 80 && lucky == 0 ) {
        console.log("you were speeding but since it is not your birthday, no discount");
    }
    return myspeed
    return lucky;
}

fast(75,0);

  TEACHERS SOLUTION

// using three parameters so limit is not harcoded

function isSpeeding(speed, isBirthday, limit){

    if (!limit) {    //if there is no limit, assing it to 60
        limit = 60;
    }

    if(isBirthday) {   // if is birthday, increase limit to 5
        limit += 5;
    }

    if (speed <= limit) {
        return 0;
    } else if (speed > limit && speed <= (limit + 20)) {
        return 1;
    } else {
        return 2;
    }
}

isSpeeding (65);

    */

