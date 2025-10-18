let movies = ["Inception", "Avatar", "Interstellar", "Gladiator"];
let favoriteMovie = "Avatar";

movies.includes(favoriteMovie)
  ? console.log("The Film That You Chose Is In The List")
  : console.log("The Film That You Chose Is Not In The List");


let score2 = 75;

switch (true) {
  case (score2 < 0 || score2 > 100):
    console.log("Invalid Score");
    break;
  case (score2 === 100):
    console.log("A+");
    break;
  case (score2 >= 90):
    console.log("A");
    break;
  case (score2 >= 80):
    console.log("B");
    break;
  case (score2 >= 70):
    console.log("C");
    break;
  case (score2 >= 60):
    console.log("D");
    break;
  case (score2 >= 40):
    console.log("E");
    break;
  default:
    console.log("F");
}


let role = "moderator";

switch (role) {
  case "admin":
    console.log("You Have Full Access");
    break;
  case "moderator":
    console.log("You Can Manage The Content");
    break;
  case "user":
    console.log("You Can View The Content");
    break;
  default:
    console.log("Access Denied or Invalid Role");
}