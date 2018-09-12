
// EASY GOING

// for(i = 1; i <= 20; i++){
//     console.log(i);
// }

// GET EVEN

// for(i = 0; i <= 200; i += 2){
//     console.log(i);
// }

// EXCITED KITTEN

catSpeak = "Love me, pet me! HSSSSSS!";
catSpeak1 = "...human...why you taking pictures of me?...";
catSpeak2 = "...the catnip made me do it..."
catSpeak3 = "...why does the red dot always get away...";

for(let i = 1; i < 20; i++){
    if(i % 2 != 0){
        console.log(catSpeak);
    }
    Math.random();
    randomMath = Math.random();
    if(i % 2 === 0){
        if(randomMath <= .33){
            console.log(catSpeak1);
        } else if(randomMath > .33 && randomMath <= .66){
            console.log(catSpeak2)
        } else if(randomMath >= .66){
            console.log(catSpeak3);
        }
    }

} 

// GETTING TO KNOW YOU

// for(i = 1; i <= 100; i++){
//     if(i % 3 === 0){
//         console.log("Fizz");
//     } else if (i % 5 === 0){
//         console.log("Buzz");
//     } else if (i % 3 === 0 && i % 5 === 0){
//        console.log("Fizzbuzz");
//     } else {
//         console.log(i);
//     }
        
// }



