// GET, POST, PUT Y DELETE

function getCliente(){
    $.ajax({
        url:"http://localhost:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            pintarCliente(respuesta);
        }
    });
}

function postCliente(){
    let cajas = {
        email:$("#email").val(),
        password:$("#password").val(),
        name:$("#name").val(),
        age:$("#age").val()
    };
    
    $.ajax({
        url:"http://localhost:8080/api/Client/save",
        type:"POST",
        datatype:"JSON",
        contentType:"application/json; charset=utf-8",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se creo correctamente el cliente");
            window.location.reload();
        }

    });

}


function putCliente(idBotonActualizar){
    if ($("#email").val().length==0 || 
        $("#password").val.length==0 || 
        $("#name").val().length==0 || 
        $("#age").val().length==0 ){
        alert("Todos los campos son obligatorios");
    }else{
    
        let cajas = {
            email:$("#email").val(),
            password:$("#password").val(),
            name:$("#name").val(),
            age:$("#age").val()
        };
    
    $.ajax({
        url:"http://localhost:8080/api/Client/update",
        type:"PUT",
        datatype:"JSON",
        contentType:"application/json",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se actualizo correctamente la herramineta");
            window.location.reload();
        }

    });
    }

}
    

function deleteCliente(){

}

/////////////////////////////////////////////////////
function pintarCliente(respuesta){
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="</tr>";   
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}
