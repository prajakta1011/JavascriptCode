var isLoggedIn=true;
var isEmailVerified= true;
var isValidCardInfo= true;

// if(isLoggedIn && isEmailVerified && isValidCardInfo){
//     console.log("Allow user to make purchase");
// }
// else{
//     console.log("Sorry, please log in with valid mail and enter valid card details");
    
// }  //step by step we need to check all conditions , so it will be nested structure

//
// if(isLoggedIn){
//     console.log("User is logged in successfully");
    
//     if(isEmailVerified){
//         console.log("Email is verified successfully");
//         if(isValidCardInfo){
//             console.log("Card info is valid, allow user to make purchase :)");
//     }
//         else{
//         console.log("Sorry, please enter valid card details :(");
//     }
// }
//     else{
//         console.log("Enter valid mail id please");
        
//     }
// }
// else{
//     console.log("You need to be logged in to be able to make a purchase");
    
// }
if(isLoggedIn && isEmailVerified && isValidCardInfo){
    console.log("Allow user to make purchase");
}
