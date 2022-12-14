////////////////GET,POST,PUT Y DELETE

function getSkate(){
    $.ajax({
        url:"http://localhost:8080/api/Skate/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            pintarSkate(respuesta);
        }
    });

}

function postSkate(){
    if ($("#brand").val().length==0 || 
        $("#year").val().length==0 || 
        $("#name").val().length==0 || 
        $("#description").val().length==0 ){
        alert("Todos los campos son obligatorios");
}else{
    
    let cajas = {
        brand:$("#brand").val(),
        year:$("#year").val(),
        name:$("#name").val(),
        description:$("#description").val(),
        category:{id: +$("#select-category").val()}
    };
    console.log(cajas);
    
    $.ajax({
        url:"http://localhost:8080/api/Skate/save",
        type:"POST",
        datatype:"JSON",
        contentType:"application/json; charset=utf-8",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se creo correctamente el Skate");
            window.location.reload();
            }
        });
    }
}

function putSkate(idBotonActualizar){
    if ($("#brand").val().length==0 || 
        $("#year").val().length==0 || 
        $("#name").val().length==0 || 
        $("#description").val().length==0 ){
        alert("Todos los campos son obligatorios");
    }else{
    
    let cajas = {
        id:idBotonActualizar,
        brand:$("#brand").val(),
        year:$("#year").val(),
        name:$("#name").val(),
        description:$("#description").val(),
        category:{id: +$("#select-category").val()}
    };
    
    $.ajax({
        url:"http://localhost:8080/api/Skate/update",
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

function deleteSkate( idBotonBorrar){
    Swal.fire({
        title: 'Esta seguro de borrar la herramienta?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
           
            let myData={
                id:idBotonBorrar
            };
            $.ajax({
                url:"http://localhost:8080/api/Skate/"+ idBotonBorrar,
                type:"DELETE",
                datatype:"JSON",
                data: JSON.stringify(myData),
                contentType:"application/json",
                success:function(respuesta){
                   // alert("se borro correctamente la categoria");
                    window.location.reload();
                }
            });
          
          
            Swal.fire(
            
            
            
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}


/////////////////
function getSkate_Category(){
    //console.log("hola desde skate")
    $.ajax({
        url:"http://localhost:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
           // console.log(respuesta);
            let $select = $("#select-category");
            $.each(respuesta, function (id, name){
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
            })
        }
    });

}

/////////////////////////////////////////////////////
function pintarSkate(respuesta){
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td>"+respuesta[i].category.description+"</td>";
        myTable+="<td> <button onclick='putSkate("+respuesta[i].id+")'>Actualizar</button> "
        myTable+="<td> <button onclick='deleteSkate("+respuesta[i].id+")'>Borrar</button> "
       
        myTable+="</tr>";   
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
}