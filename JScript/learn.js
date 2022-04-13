document.addEventListener('DOMContentLoaded', () => {
    // intialize an empty list to store user input
    const memKey_list = [];

    //initialize variables
    

    // Collecting user input
    const birdForm = document.getElementById("memory_form");
    birdForm.addEventListener("submit", addToObject);

    //function to replace an item
    function replace(input_id, new_p) {

        const old = document.getElementById(input_id);
        const new = document.createElement('p');
        new.innerHTML = new_p;
        old.parentNode.replaceChild(new, old);
    }
    
    //function to get user input on submitting
    function addToObject(userInput) {
        userInput.preventDefault();
        
        const bird = document.getElementById("current").innerHTML;
        
        const key1 = document.getElementById("soundsLike").value;
        const key2 = document.getElementById("saying").value;
        const mainKey = document.getElementById("memkey").value;


        const object = {
            name: bird,
            like: key1,
            saying: key2,
            memKey: mainKey
        };
        console.log(object)

        



        


        //insert the user input onto the page



        

        
       // localStorage.setItem('userListItem', JSON.stringify(myArray));
      }

    








})