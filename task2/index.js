
let students = [];
function createstudent (name, age , mark) {
    return { name:name , age : age , mark : mark };
}

students.push(createstudent("mayar" , 18,90));
students.push(createstudent("farah" , 18,80));
students.push(createstudent("maria" , 18,100));
students.push(createstudent("hala" , 18,70));
students.push( createstudent("sadeem" , 18,30));



let successstudents =[];
let failedstudents =[];

for (let i=0; i< students.length ; i++){
    if(students [i].mark>=50 ){
        successstudents.push(students[i]);
    } else {
        failedstudents.push(students[i]);
    }
}
 
console.log("success students",successstudents);
console.log("failed students" , failedstudents);
