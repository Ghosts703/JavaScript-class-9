// JS Class 9 - Sir Saad - Farhan Ali

//-----------------------------------------------------------------------------------------------
for (var i = 1; i <= 100; i = i + 10) {
  for (var j = i; j < i + 10; j++) {
    document.write(j + " ");
  }
  document.write("<br>");
}

document.write("<br><br>");
//-----------------------------------------------------------------------------------------------
for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
}

document.write("<br><br>");
//-----------------------------------------------------------------------------------------------
for (var i = 1; i <= 5; i++) {
  for (var j = 5; j >= i; j--) {
    document.write("*");
  }
  document.write("<br>");
}

//Due to this code, whole document isn't diplaying on the browser. check this code later.
// document.write("<br><br>");          
// //-----------------------------------------------------------------------------------------------
// for (var i = 1; i <= 10; i++) {
//   for (var j = 10; j <= i; j--) {
//     document.write(j + " ");
//   }
//   document.write("<br>");
// }

