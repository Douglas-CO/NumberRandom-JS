let ran = Math.floor(Math.random() * 11);
const enviar = () =>{
    let i = 1;
    let num = document.getElementById("numero").value;
    while (i < 5) {
        if(num == ran){
            document.getElementById("respuesta").innerHTML = ('ganaste');
            break;
        }else if(num < ran){
            document.getElementById("respuesta").innerHTML = ('es mayor');
            return;
        }else if(num > ran){
            document.getElementById("respuesta").innerHTML = ('es menor');
            return;
        }else if(i === 3){
            if(num === ran){
                document.getElementById("respuesta").innerHTML = ('ganaste');
                break;
            }else{
                document.getElementById("respuesta").innerHTML = ('perdiste');
                break;
            }
        }
        i++;
    }
}