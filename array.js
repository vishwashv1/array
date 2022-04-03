let studentRecords = [ 
    {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } ]


    

//Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

for (var i=0; i <4  ;i++){
document.getElementById("Q1").innerHTML += ((studentRecords[i].name).toUpperCase()+ "  ")}


//Question 2: Suppose we have the same dataset as above but this time we want 
//to get the details of students who scored more than 50 marks.


 let More50 = studentRecords.filter((student) => student.marks > 50);
 
 console.log(More50);

//Question 3: Retrieve the details of students who scored more than
// 50 marks and have id greater than 120.


let third = studentRecords.filter((student) => student.marks > 50 && stu.id > 120);
    console.log(third);

//Question 4: Consider the same scenario we have discussed above, 
//but this time we would like to know the sum total of the marks of the students.

       let total = studentRecords.reduce((s, m) => s + m.marks, 0);
  console.log(total);

//Question 5: This time we want to get only the names of the students who scored 
//more than 50 marks from the same dataset used above.

let names4 = studentRecords
.filter((stu) => stu.marks > 50)
.map((stu) => stu.name);
console.log(names4);


//Question 6: This time we are required to print the sum of marks of the students 
//with id > 120.

    let totalMarks2 = studentRecords
      .filter((stu) => stu.id > 120)
      .reduce((acc, curr) => acc + curr.marks, 0);
    console.log(totalMarks2);
    
//Question 7: This time we are required to print the total marks of the students with marks greate
// than 50 after a grace of 15 marks has been added to those students who scored less than 50.
   
    let totalMarks3 = studentRecords
      .map(function (stu) {
        if (stu.marks < 50) {
          stu.marks += 15;
        }
        return stu;
      })
      .filter((stu) => stu.marks > 50)
      
      .reduce((acc, curr) => acc + curr.marks, 0);
    console.log(totalMarks3);

//Question 8:Create 6 objects , each object will have name, class, roll no as properties.
// Store these objects in an array of objects.
    
    let obj1 = { name: "Akshay", class: "X", rollno: "37" };
    let obj2 = { name: "Vishal", class: "XI", rollno: "40" };
    let obj3 = { name: "Varun", class: "XII", rollno: "78" };
    let obj5 = { name: "Priya", class: "X", rollno: "07" };
    
    
    let students = [
      { name: "Akshay", class: "X", rollno: "37" },
      { name: "Vishal", class: "XI", rollno: "40" },
      { name: "Varun", class: "XII", rollno: "78" },
      { name: "Priya", class: "X", rollno: "07" },
     
    ];
    console.log(students);