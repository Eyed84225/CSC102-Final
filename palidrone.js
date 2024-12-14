

function checkpallindrome(){
    const string = document.getElementById("userinput").value;
    console.log(string);
// Grabs the string from the html
    const nospaces = string.replaceAll(" ", "");
    console.log(nospaces)
// removes spaces 
    const splitvalues = nospaces.split("");
    console.log(splitvalues);
// splits it into each letter
    const reversevalues = splitvalues.reverse();
    console.log(reversevalues);
// reverses the letters
    const joinstring = reversevalues.join("");
    console.log(joinstring);
// joins them back together
    if(nospaces == joinstring){
        console.log("is pall");
        const userConfirmed = confirm("Your phrase is a Palindrome, Would you like to enter another?");
        // checks which anwser you chose
        if (userConfirmed) {
            location.reload();
            console.log("it worked");
        //if you selected ok, will refresh the page and allow you to enter in another 
        }
        else{
            alert("Ok, I understand")
            console.log("OK, I understand");
            document.getElementById('Submit').disabled = true;
        //if selected cancel, will disable the submit button
        }
    }
    else{
        console.log("nuh uh");
        const userConfirmed = confirm("Your phrase isn't a Palindrome, Would you like to enter another?");
        if (userConfirmed) {
            location.reload();
            console.log("it worked");
            //if you selected ok, will refresh the page and allow you to enter in another 

        }
        else{
            alert("Ok, I understand")
            console.log("OK, I understand");
            document.getElementById('Submit').disabled = true;
            //if selected cancel, will disable the submit button
        }
    }
}