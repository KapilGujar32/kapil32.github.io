<html>
 <body>
 <form action="page.html">
 Select Programming Languages<br>
 <input type="checkbox" id="ch1" name="Prog" value="C">C
 <input type="checkbox" id="ch2" name="Prog" value="C++">C++
 <input type="checkbox" id="ch3" name="Prog" value="Java">Java
 <input type="checkbox" id="ch4" name="Prog" value="Python">Pyt
hon
 <input type="button" onclick="check()" value="Click" ><br>
 <input type="submit">
 </form>
 </body>
 <script>
 function check(){
 var str="Selected Languages are ";
 var ch = document.getElementsByName("Prog");
 for(var i=0;i<ch.length;i++)
 if(ch[i].checked)
 str = str+ch[i].value+" ";
 alert(str);
 }
 </script>
</html>