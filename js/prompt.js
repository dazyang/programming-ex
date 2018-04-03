
// from prompt.js
function getUserName() {
  var userName = prompt('Hello, what\'s your name?');

  if (!userName) {
    userName = prompt("Sorry, I didn\'t catch you there. Say again?");
  }
  return userName;
}

function getPhoneNumber(userName) {
  var phoneNumber = prompt('Hello ' + userName + ', what\'s your phone #?');
  
  if (!validatePhoneNumber(phoneNumber)) {
    phoneNumber = prompt('You can\'t fool me. Please enter a valid phone number.');
  } 
}

function validatePhoneNumber(phoneNumber){
  return phoneNumber.match(/(?:1-)?\(?(\d{3})(?:-|\) ?)\d{3}-\d{4}/);
}

function getLocation(phoneNumber){
  // create phone number pattern
  var phoneNumberPattern = /(?:1-)?\(?(\d{3})(?:-|\) ?)\d{3}-\d{4}/;
  // get matches from phone no#
  var phoneMatches = phoneNumberPattern.exec(phoneNumber);
  var areaCode, areaCodes, locationName;
  if (phoneMatches) {
    areaCode = phoneMatches[1];
    areaCodes = getAreaCodes();
    locationName = areaCodes[areaCode];
  }
  return locationName ? locationName : 'somewhere';
}