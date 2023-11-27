var allPersons = [];

function guardarUsuario(){
    let nombres = document.getElementById('nombres').value;
    let apellidos = document.getElementById('apellidos').value;
    let correos = document.getElementById('correo').value;


    let persona = {
        nombre : nombres,
        apellido : apellidos,
        correo : correos
    }
    
    if(nombres != "" && apellidos != "" && correos != ""){
        

        let tblDatos = document.getElementById('cajaTabla').insertRow(1);
        let col1 = tblDatos.insertCell(0);
        let col2 = tblDatos.insertCell(0);
        let col3 = tblDatos.insertCell(0);
        
        col1.innerText = nombres
        col2.innerText = apellidos
        col3.innerText = correos

        allPersons.forEach(function(person){
            document.getElementById('resNombre').innerText = person.nombre;
            document.getElementById('resApellido').innerText = person.apellido;
            document.getElementById('resCorreo').innerText = person.correo;
            allPersons.push(persona);
        })
    }else{
        alert("nada")
    }
}
