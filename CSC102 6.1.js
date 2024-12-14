function validateform(){
    // fullname varible
    let Fullname = document.getElementById("Firstname").value + document.getElementById("Lastname").value;
    // zipcode varible 
    let Zipcode = document.getElementById("Zipcode").value;
    // checks to make sure everything is working 
    console.log(Fullname);
    console.log(Fullname.length);
    console.log(Zipcode);
    // checks to see if the name is over 20 characters 
    if(Fullname.length > 20){
        alert("Name is to long");
        return;
    }
    // checks to see if the charcters equal 5
    if(Zipcode.length !== 5){
        alert("Invaild Zipcode");
        return;
    }    
    // secret message
    window.alert("YOOOOOOOOOOOOO you made it, welcome to the halloween bash");
}