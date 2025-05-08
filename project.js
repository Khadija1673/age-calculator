document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault(); 
    let dobValue = document.getElementById("dob").value;
    let cdValue = document.getElementById("cd").value;

    if(!dobValue || !cdValue){
        alert("Please enter both Date of Birth and Current Date")
    }
    const DOB = new Date(dobValue);
    const CDate = new Date(cdValue);
    let age = CDate.getFullYear()-DOB.getFullYear();
    let month = CDate.getMonth()-DOB.getMonth();
    if(month < 0 || month == 0 && CDate.getDate() < DOB.getDate()){
        age--;
    }

    

    document.getElementById("para").innerHTML = "Your age is " + age  + " years";
})