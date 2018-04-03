var currentDate = new Date();

var objValues = {
  projectName: 'programmingEx',
  versionNumber: '0.0.1',
  currentTime: currentDate.getFullYear() + '-' +
                (currentDate.getMonth() + 1) + '-' +
                currentDate.getDate() + 'at' +
                currentDate.getHours() + ':' +
                currentDate.getSeconds()
};    
var userName = prompt ("Hello! What\'s your name?");

if (!userName) {
  userName = prompt ("Sorry, I didn\'t catch you there. Say again?");
}

// document.body.innerHTML = '<h1>Hello, ' + userName + '!</h1>' +
//                           '<p>' + objValues.projectName + ' ' + objValues.versionNumber +
//                           ' accessed on: ' + objValues.currentTime + '</p>';


var images = document.querySelectorAll('div.userContentWrapper img')

for (var i = 0; i < images.length; i++) {
  console.log(images[i].src)
}