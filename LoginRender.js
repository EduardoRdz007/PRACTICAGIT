

//BASE DE DATOS
var available_user_name = Array("USER","ADMIN","EDUARDO"),
    available_user_pass = Array("1001","2002","3003"),
    UAP = $("#userNameAndPassword");

for (var i = 0; i < available_user_name.length; i++) {
  var user_names = available_user_name[i];
  var user_passws = available_user_pass[i];
  var terminos = terminos
  var terminos= document.getElementById('terminos').checked;
  $("#available_accounts").append("<div><div>"+ user_names +"</div><div>"+ user_passws +"</div></div>"+ terminos + "<div>");
}
  
$("#btn-submit").click (function (){
var user_name = $("#user_name").val(),
    user_pass = $("#user_pass").val(),
    btn = $("#btn-submit").val()
    href="./carrito.html"
  
    var terminos = document.getElementById('terminos').checked;
    if(terminos){
      if($.inArray(user_name, available_user_name) >= 0){
        if(available_user_name.indexOf(user_name) == available_user_pass.indexOf(user_pass)){
          alert("Bienvenido: "+ user_name);
          window.location="./carrito.html"
           return false;
        }else{
          alert("Contraseña incorrecta para el nombre de usuario.Inténtelo de nuevo");
        }
      }else{
          alert("Usuario no registrado");
      
      }
    }else{
      alert('Captcha No Seleccionado ');
    }
  
})
