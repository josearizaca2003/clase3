function par_impar(){
    num1=document.getElementById("n1").value;
    console.log(num1);
    if(num1%2==0){
       document.getElementById("rs").innerHTML="ES PAR"
    }else{
        document.getElementById("rs").innerHTML="ES IMPAR"
    }
    
}