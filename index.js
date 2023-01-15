
//this function returns objects with keys//
function createEmployeeRecord(record) {
    const arrayOfEmployees = {
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return arrayOfEmployees
}

//this function goes through an array of arrays of employee records
//and then uses the createEmployeeRecord function to turn them in to objects

function createEmployeeRecords(array) {
   return array.map(createEmployeeRecord)
}

//this function creates an object within the array timeInEvents

function createTimeInEvent(record, time) {
    // console.log("HOW'S IT GOING", record)
    // console.log("HOW'S IT GOING MR.", time)
    // console.log("SLICE -4", time.slice(-4))
    // console.log("SLICE 0 10", time.slice(0, 10))
    let hour = parseInt(time.slice(-4), 10)
    // console.log("WILL THIS WORK FOR HOUR", hour)
    record.timeInEvents.push({type: "TimeIn",
    hour: hour,
    date: time.slice(0, 10)})
    return record
}

function createTimeOutEvent(record, time) {
    let hour = parseInt(time.slice(-4), 10)
    record.timeOutEvents.push({type: "TimeOut",
    hour: hour,
    date: time.slice(0, 10)})
    return record
}

//this function will isolate records based on date
//then it will calculate the hours worked for that day in that record

//timeInEvents: [ { type: 'TimeIn', hour: 900, date: '0044-03-15' } ],
//timeOutEvents: [ { type: 'TimeOut', hour: 1100, date: '0044-03-15' } ]

function hoursWorkedOnDate(record, day) {
    // console.log("this is the record", record);
    // console.log("this is the day", day)
    let hourOut;
    for(let obj of record.timeOutEvents){
        if (obj.date === day) {
            hourOut = obj.hour
            // let totalHours = timeOutEvents.hour - timeInEvents.hour
            // return totalHours
        }
    }
    let hourIn;
    for(let obj of record.timeInEvents){
        if (obj.date === day) {
            hourIn = obj.hour
        }
    }
    let totalHours = (hourOut - hourIn)/100
    return totalHours 
}

function wagesEarnedOnDate(record, day) {
    let wages = hoursWorkedOnDate(record, day) * record.payPerHour
    return wages
}

function allWagesFor(record) {
    let totalWages;
    for(let obj of record) {
        if (hoursWorkedOnDate(obj) > 0) {
            totalWages = totalHours * obj.payPerHour
        }
        return totalWages
    }
}

function calculatePayroll(arr) {
    let sumOfWages = arr.reduce(wagesEarnedOnDate)
    return sumOfWages
}