var userName = prompt ("Hello! What\'s your name?");

document.body.innerHTML = '<h1>Hello, ' + userName + '!</h1>' +
                          '<p>' + objValues.projectName + ' ' + objValues.versionNumber +
                          ' accessed on: ' + objValues.currentTime + '</p>';