function operaciones(){
   
    let tipoOperacion = document.getElementById('operacion').value;
   
    let num1 = (document.getElementById('num1').value);
    let num2 = (document.getElementById('num2').value);
   
    if(num1 != "" && num2 != "" && tipoOperacion != ""){
        num1 = parseFloat(document.getElementById('num1').value);
        num2 = parseFloat(document.getElementById('num2').value);
       
       


        if(tipoOperacion == 'suma'){
            console.log("Esto es una suma");
            console.log(num1 + num2)
            document.getElementById('resultado').innerText = "Tu resultado es: " + (num1 + num2)    
        }
        else if(tipoOperacion == 'resta'){
            console.log("Esto es una resta")
            console.log(num1 - num2)
            document.getElementById('resultado').innerText = "Tu resultado es: " + (num1 - num2)
        }
        else if(tipoOperacion == 'multi'){
            console.log("Esto es una multiplicacion")
            console.log(num1 * num2)
            document.getElementById('resultado').innerText = "Tu resultado es: " + (num1 * num2)
        }
        else{
            console.log("Esto es una divicion")
            console.log(num1 / num2)
            if(num1 / num2 == Infinity){
                document.getElementById('resultado').innerText = "Tu resultado es: " + 0
            }
            else{
                document.getElementById('resultado').innerText = "Tu resultado es: " + (num1 / num2)
            }
        }

        if(operaciones != "" && num1 != "" && num2 != ""){
            document.getElementById('operacion').classList.add("is-valid")
            document.getElementById('num1').classList.add("is-valid")    
            document.getElementById('num2').classList.add("is-valid")
        }
        else if(operaciones != ""){
            document.getElementById('operacion').classList.add("is-valid")
        }else if(num1 != ""){
            document.getElementById('num1').classList.add("is-valid")
        }else if(num2 != ""){
            document.getElementById('num2').classList.add("is-valid")
        }
   
        document.getElementById('num1').value = ""
        document.getElementById('num2').value = ""
        document.getElementById('operacion').value = ""
    }
    else{
        alert("te faltan campos por llenar")
        if(tipoOperacion == "" && num1 == "" && num2 == ""){
            document.getElementById('operacion').focus();
            document.getElementById('operacion').classList.add("is-invalid")
            document.getElementById('num1').classList.add("is-invalid")
            document.getElementById('num2').classList.add("is-invalid")
           
        }
        else if (num1 == ""){
            document.getElementById('num1').focus()
            document.getElementById('num1').classList.add("is-invalid")
           
        }
        else{
            document.getElementById('num2').focus()
            document.getElementById('num2').classList.add("is-invalid")
           
        }
    }

    
}
