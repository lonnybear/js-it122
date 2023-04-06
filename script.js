const firstName = "Lonny";
const lastName = "Le";
const yearsOfStudy = "1 year";
const goal = "become a full-stack developer";

const introduction = `My name is ${firstName} ${lastName}. I have been at SCC for ${yearsOfStudy} and plan to ${goal} after completing my courses.`;

document.getElementById("introduction").innerHTML = introduction;