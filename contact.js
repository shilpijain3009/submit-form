function fullname() {
  var x = document.getElementById("nm1").value;
  var y = document.getElementById("nm2").value;
  document.getElementById("p1").innerHTML = x ;
  document.getElementById("p2").innerHTML = y ;
  z = x + " " + y;
  alert(z);
  document.write = z ;
    document.getElementById("p3").innerHTML = z ;
  //document.getElementById("lnm").innerHTML = y;
  
  console.log(x);
  console.log(y);

}