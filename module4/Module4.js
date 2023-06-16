let nameList = ['Jerry', 'jiny', 'Tom', 'Scooby', 'SpiderMan'];
for (let i = 0; i < nameList.length; i++){
    if (nameList[i].charAt(0) === 'J' || nameList[i].charAt(0) === 'j') {
        console.log('Goodbye ' + nameList[i])
    } else {
        console.log('Hello ' + nameList[i])
    };
};