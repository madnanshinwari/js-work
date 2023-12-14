let day_of_week = prompt("Enter your day of week ").toLowerCase();
switch (day_of_week) {
  case "monday" || "mon":
    console.log("Coding day");
    break;
  case "Tuesday" || "tue":
    console.log("desiging day");
    break;
  case "wednesday" || "wed":
    console.log("testing day");
    break;
  case "thursday" || "thu":
    console.log(" gym day");
    break;
  case "friday" || "fri":
    console.log("cricket  day");
    break;
  case "saturday" || "sat":
    console.log("Hiking day");
    break;
  case "sunday" || "sun":
    console.log(" weekends ");
    break;
  default:
    console.log("Invalid day you enter");
}
