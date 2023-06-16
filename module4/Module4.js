let nameList = ['Yaakov', 'John', 'Jen', 'jason', 'Paul', 'Frank', 'Larry', 'Paula', 'Laura', 'Jim'];
for (let i = 0; i < nameList.length; i++){
    if (nameList[i].charAt(0) === 'J' || nameList[i].charAt(0) === 'j') {
        console.log('Goodbye ' + nameList[i])
    } else {
        console.log('Hello ' + nameList[i])
    };
};