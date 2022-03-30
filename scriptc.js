function myfunction() {
    let input = document.getElementById("display");


 console.log(typeof input);
    try {
        const new_str = eval(input.value);
        input.value = new_str;
    }
            
    catch {
        alert("Enter valid value");
        input.value = "";
    }   	        
}