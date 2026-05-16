
//if user is admin give full access to application
// if he is test user give the access to delete and add content
// if he is user give access to view content
// 
let user="prajakta";

switch (user) {
    case "admin":
        console.log("Full access to application")
        break;
    case "test":
        console.log ("Access to delete and add content")
        break;
    case "user":
        console.log("Access to view content")
        break;
    default:
        console.log("This is a trial user");
        break;
}