/* eslint-disable max-len */
/* eslint-disable no-new-object */
/* eslint-disable no-console */
// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
// You can assume their scores on their respective subjects.

// npm install node-fetch@2
// npm install -g json-server
// json-server .\FruitsData.json
// const fetch = require("node-fetch");

// Write your code here
class Reports {
    constructor(name, grammerPercentage, physicsPercentage, accountsPercentage, finalPercentage) {
        this.name = name;
        this.grammerPercentage = grammerPercentage;
        this.physicsPercentage = physicsPercentage;
        this.accountsPercentage = accountsPercentage;
        this.finalPercentage = finalPercentage;
    }
}

function getPercentage(sub1, sub2) {
    return parseFloat(((sub1 + sub2) / 200 * 100).toPrecision(3));
}

const ReportCards = () => {
    //   var reportCardData = [];
    //   fetch("../resources/StudentsReports.json")
    // // fetch('http://localhost:3000/Students',{"method":"GET"})
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((Students) => {
    //       // console.log(data);

    //       for (var key in Students) {
    //         var student = Students[key];
    //         const studentCard = new Object();
    //         if (
    //           student.Subjects.hasOwnProperty("Accounts") &&
    //           student.Subjects.hasOwnProperty("Accounts")
    //         ) {
    //           studentCard.name = student.Name;
    //           studentCard.percentage = getPercentage(
    //             student.Subjects.Accounts,
    //             student.Subjects.Grammer
    //           );
    //           reportCardData.push(studentCard);
    //         } else {
    //           studentCard.name = student.Name;
    //           studentCard.percentage = getPercentage(
    //             student.Subjects.Physics,
    //             student.Subjects.Grammer
    //           );
    //           reportCardData.push(studentCard);
    //         }
    //       }
    //     })
    //     .catch((err) => {
    //       console.log("Caught error - Students data not found !!");
    //     });

    const StudentsJSON = JSON.parse(`{
      "Students":[
          {
              "Name":"Eignstine",
              "Subjects":
              {
                  "Grammer":70,
                  "Physics":99
              }
          },
          {
              "Name":"Newton",
              "Subjects":
              {
                  "Grammer":65,
                  "Physics":89
              }
          },
          {
              "Name":"Openhimer",
              "Subjects":
              {
                  "Grammer":85,
                  "Physics":75
              }
          },
          {
              "Name":"Tesla",
              "Subjects":
              {
                  "Grammer":66,
                  "Physics":70
              }
          },
          {
              "Name":"Faraday",
              "Subjects":
              {
                  "Grammer":90,
                  "Physics":75
              }
          },
          {
              "Name":"Ramanuja",
              "Subjects":
              {
                  "Grammer":65,
                  "Accounts":99
              }
          },
          {
              "Name":"Aryabhatta",
              "Subjects":
              {
                  "Grammer":50,
                  "Accounts":65
              }
          },
          {
              "Name":"Boilinger",
              "Subjects":
              {
                  "Grammer":70,
                  "Accounts":95
              }
          },
          {
              "Name":"Shakuntala Devi",
              "Subjects":
              {
                  "Grammer":75,
                  "Accounts":99
              }
          },
          {
              "Name":"Rajan",
              "Subjects":
              {
                  "Grammer":55,
                  "Accounts":80
              }
          }

      ]
  }`);

    let reportCardData = [];
    for (let key in StudentsJSON.Students) {
        if (StudentsJSON.Students[key].Subjects.hasOwnProperty('Accounts') &&
            StudentsJSON.Students[key].Subjects.hasOwnProperty('Grammer')) {
            reportCardData.push(new Reports(StudentsJSON.Students[key].Name, getPercentage(StudentsJSON.Students[key].Subjects.Grammer, 0), '-', getPercentage(StudentsJSON.Students[key].Subjects.Accounts, 0), getPercentage(StudentsJSON.Students[key].Subjects.Accounts,
                StudentsJSON.Students[key].Subjects.Grammer)));
        } else {
            reportCardData.push(new Reports(StudentsJSON.Students[key].Name, getPercentage(StudentsJSON.Students[key].Subjects.Grammer, 0), getPercentage(StudentsJSON.Students[key].Subjects.Physics, 0), '-', getPercentage(StudentsJSON.Students[key].Subjects.Physics,
                StudentsJSON.Students[key].Subjects.Grammer)));
        }
    }

    return reportCardData;
};

console.table(ReportCards());