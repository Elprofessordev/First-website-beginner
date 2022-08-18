function myFunction()
{
var un = document.forms["myForm"]["unname"].value;
var pw = document.forms["myForm"]["pass"].value;
if(un=="daksu" && pw=="1234")
{
window.location.href='lobby.html';
}
else
{
alert("Invalid UserName and Password");
}
}