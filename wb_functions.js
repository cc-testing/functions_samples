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

*/

function fast (speed,luckyday) {

    var myspeed = speed;
    var lucky = luckyday;

    if ( myspeed < 60 ){
        console.log("you are not speeding. Have a nice day");
    } else if ( myspeed > 80 ) {
        console.log("you too fast you get no discount");
    } else if ( myspeed > 60 && myspeed < 80 && lucky == 1 ) {
        console.log("you were speeding but you get a 5 mile discount");
    } else if ( myspeed > 60 && myspeed < 80 && lucky == 0 ) {
        console.log("you were speeding but since it is not your birthday, no discount");
    }
    return myspeed
    return lucky;
}

fast(75,0);