function home(){
var user = "abc";
var pwd = 321

var val1 = document.form1.user.value;
var val2 = document.form1.password.value;

if(user == val1 && pwd == val2)
{
   alert("login successful")
}
else{
    alert("please enter correct values")
}

}