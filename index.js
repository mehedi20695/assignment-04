function calculateTax(income, expenses) {
    if(income < 0 || expenses < 0 || income < expenses){
        return "Invalid Input";
    }
    const profit = income - expenses;
    const tax = profit * 0.20;
    return tax;
}


function sendNotification(email) {

    const emailSections = email.split('@');

    if(emailSections.length !== 2 || emailSections[0] === '' || emailSections[1] === ''){
        return "Invalid Email";
    }
    const username = emailSections[0];
    const domain = emailSections[1];

    return username + " sent you an email from " + domain;
}


function checkDigitsInName(name) {

    if(typeof name !== 'string'){
        return "Invalid Input";
    }

    for(let i = 0; i < name.length; i++){
        if (!isNaN(name[i]) && name[i] !== ' ') {
            return true;
        }
    }
    return false;
}


function calculateFinalScore(obj) {

    if(typeof obj !== 'object'){
        return "Invalid Input";
    }
    
    const { name, testScore, schoolGrade, isFFamily } = obj;
    
    if(typeof name !== 'string' || typeof testScore !== 'number' || 
        typeof schoolGrade !== 'number' || typeof isFFamily !== 'boolean' || 
        testScore > 50 || schoolGrade > 30){
        return "Invalid Input";
    }
    
    let finalScore = testScore + schoolGrade;
    
    if(isFFamily === true){
        finalScore = finalScore + 20;
    }
    
    if(finalScore >= 80){
        return true;
    } 
    else{
        return false;
    }
}


function waitingTime(waitingTimes, serialNumber) {

    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return "Invalid Input";
    }

    for(let i = 0; i < waitingTimes.length; i++){
        if(typeof waitingTimes[i] !== 'number'){
            return "Invalid Input";
        }
    }

    if(serialNumber <= waitingTimes.length){
        return 0;
    }

    let total = 0;
    for(let i = 0; i < waitingTimes.length; i++){
        total = total + waitingTimes[i];
    }

    const average = Math.round(total / waitingTimes.length);

    const waitingPeople = serialNumber - waitingTimes.length - 1;

    const waitingTimeForIsrat = waitingPeople * average;
    return waitingTimeForIsrat;
}