var projectName = 'programmingEx';
var versionNumber = '0.0.1';
var currentDate = new Date();

var currentTime = currentDate.getFullYear() + '-' +
                    (currentDate.getMonth() + 1) + '-' +
                    currentDate.getDate() + 'at' +
                    currentDate.getHours() + ':' +
                    currentDate.getSeconds();
var userName = prompt ['Hello! What\'s your name?'];
document.body.innerHTML = '<h1>Hello, ' + userName + '!</h1>' +
                          '<p>' + projectName + ' ' + versionNumber +
                          ' accessed on: ' + currentTime + '</p>';