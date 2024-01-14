const patient1 = {
  patientId: 1,
  ward: "general",
  doctor: "Dr.Fakher Alam",
  disease: "flu",
  age: 30,
};
const patient2 = {
  patientId: 12,
  ward: "general",
  doctor: "Dr.nasir",
  disease: "suger",
  age: 45,
};
const patient3 = {
  patientId: 3,
  ward: "general",
  doctor: "Dr.dawood",
  disease: "cancer",
  age: 46,
};
const patient4 = {
  patientId: 4,
  ward: "general",
  doctor: "Dr.saleem",
  disease: "bp",
  age: 30,
};
const patient5 = {
  patientId: 5,
  ward: "general",
  doctor: "Dr.salman",
  disease: "cancer",
  age: 30,
};
const patient6 = {
  patientId: 6,
  ward: "general",
  doctor: "Dr.kamran",
  disease: "suger",
  age: 35,
};
const patient7 = {
  patientId: 7,
  ward: "general",
  doctor: "Dr.mansoor",
  disease: "flu",
  age: 23,
};

const patients = [
  patient1,
  patient2,
  patient3,
  patient4,
  patient5,
  patient6,
  patient7,
];
// console.log(patients);

// flu patients ids
for (let a = 0; a < patients.length; a++) {
  for (key in patients[a]) {
    if (key == "disease") {
      if (patients[a][key] == "flu") console.log(patients[a]["patientId"]);
    }
  }
}

//  flu doctors name show
for (let a = 0; a < patients.length; a++) {
  for (key in patients[a]) {
    if (key == "age") {
      if (patients[a][key] == "30") console.log(patients[a]["doctor"]);
    }
  }
}

// who are the doctor of cancer patients
for (let a = 0; a < patients.length; a++) {
  for (key in patients[a]) {
    if (key == "disease") {
      if (patients[a][key] == "cancer") console.log(patients[a]["doctor"]);
    }
  }
}
