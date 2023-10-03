//dates

let myDate = new Date()
// console.log(myDate.toString());//Tue Oct 03 2023 12:37:22 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Tue Oct 03 2023
// console.log(myDate.toISOString()); //2023-10-03T12:37:22.989Z
// console.log(myDate.toJSON()); //2023-10-03T12:37:22.989Z
// console.log(myDate.toLocaleString()); //10/3/2023, 12:37:22 PM
// console.log(myDate.toLocaleDateString()); //10/3/2023
// console.log(typeof myDate); //object

//let myNewdate = new Date(2023, 0, 23) //month starts from 0
//console.log(myNewdate.toDateString()); //Mon Jan 23 2023

//let myNewdate = new Date(2023, 0, 23,5,3)
//console.log(myNewdate.toLocaleString()); //1/23/2023, 5:03:00 AM

let myNewdate = new Date("01-14-2023")  //month starts from 01
// console.log(myNewdate.toLocaleString()); //1/14/2023, 12:00:00 AM
// console.log(myNewdate.toDateString()); //Sat Jan 14 2023

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myNewdate.getTime()); //can compare two dates
// console.log(Date.now()/1000); //1696337766.974,converts ms to s
// console.log(Math.floor(Date.now()/1000)); //1696337766,gives amaller value n help in comparision

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //month starts from 0 so to be clear add 1


newDate.toLocaleString('default',{
    weekday:"long"
    //timeZone:
})