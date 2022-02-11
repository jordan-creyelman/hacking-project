function validate( email) {
  var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
  if(regx.test(email)){
    alert("bon")
  }
  else{
    alert("error")
  }
   }
 
 validate("jordan@gmail.com")