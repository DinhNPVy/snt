
    let n = parseInt(prompt("Nhập vào n: "));

    let tmp = true;
 

    if (n < 2){
        tmp = false;
    }
    else if (n == 2){
        tmp = true;
    }
    else if (n % 2 == 0){
      tmp = false;
    }
    else{
      
        for (let i = 3; i < Math.sqrt(n); i+=2)
        {
            if (n % i == 0){
                tmp = false;
                break;
            }
        }
    }
 

    if (tmp == true){
        document.write(n + " là số nguyên tố <br/>");
    }
    else{
        document.write(n + " không phải là số nguyên tố <br/>");
    }
