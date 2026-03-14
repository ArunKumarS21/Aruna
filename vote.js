function vote(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var resu = document.getElementById("resu")

    //alert (age){
//if(age>=18){
  //  alert("Eligible to Vote")
// }else{
  //  alert("ur child ")
//}
if (age>=18){
    resu.innerHTML = name+""+"is eligible to vote"
}else{
    resu.innerHTML = name+""+"  ur still child"
}
}
