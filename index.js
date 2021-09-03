/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}



function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arr) {
        return arr.map(creat)
}

function creat(i) {
    return createEmployeeRecord(i)
}



function createTimeInEvent(stamp) {
    let returnObj = {
        type: "TimeIn",
        hour: parseInt(stamp.slice(11,)),
        date: stamp.slice(0,10)
    }

    this.timeInEvents.push(returnObj)

    return this
}

function createTimeOutEvent(stamp) {

    let returnObj = {
        type: "TimeOut",
        hour: parseInt(stamp.slice(11,)),
        date: stamp.slice(0,10)
    }

    this.timeOutEvents.push(returnObj)

    //console.log(this)
    return this
}

function hoursWorkedOnDate(stamp) {
    let start = this.timeInEvents.find(i => stamp === i.date)
    let finish = this.timeOutEvents.find(i => stamp === i.date)
    return (finish.hour-start.hour)/100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function findEmployeeByFirstName (employees, name) {
    let c =  employees.find(function(i) {
        
        return i.firstName === name
    })
    return c
}

function calculatePayroll(arr) {
    return arr.reduce(addUp, 0)
}

function addUp (acc, i) {
    return acc + allWagesFor.call(i)
}

