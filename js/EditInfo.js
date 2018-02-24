document.getElementById('cancel').addEventListener('click', cancel)

document.getElementById('save').addEventListener('click', saveInfo)

var router = new VueRouter()

function cancel() {
  this.$router.push('Profile')
}

function saveInfo() {
  var name = document.getElementById('name').value
  var dob = document.getElementById('dob').value
  var number = document.getElementById('number').value
  var address = document.getElementById('address').value
  var links = document.getElementById('name').value
  var skill = document.getElementById('skill').value
  // /////////////////////////////////////////////////////////////
  this.$router.push('Profile')
}