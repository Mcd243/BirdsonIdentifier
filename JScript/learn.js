document.addEventListener('DOMContentLoaded', () => {
    // intialize an empty list to store user input
    let memKey_list = [];
    const bird = document.getElementById("current").innerHTML;
    let get_list = localStorage.getItem(bird);
    memKey_list.push(get_list);
    console.log(memKey_list)


    //initialize variables
    

    // Collecting user input
    const birdForm = document.getElementById("memory_form");
    birdForm.addEventListener("submit", addToObject);

    //function to replace an item
    function replace(input_id, new_p) {

        const old = document.getElementById(input_id);
        const new_element = document.createElement('p');
        new_element.innerHTML = new_p;
        old.parentNode.replaceChild(new_element, old);
    }
    
    //function to get user input on submitting
    function addToObject(userInput) {
        userInput.preventDefault();      
        const bird = document.getElementById("current").innerHTML;   
        const key1 = document.getElementById("soundsLike").value;    
        const key2 = document.getElementById("saying").value;    
        const mainKey = document.getElementById("memkey").value;
        
        let item = {
            name: bird,
            like: key1,
            saying: key2,
            memKey: mainKey
        };   
        //insert the user input onto the page
        replace("soundsLike", key1);
        replace("saying", key2);
        replace("memkey", mainKey);
        //Remove the submit button
        var submit_button = document.getElementById("submit");
        submit_button.parentNode.removeChild(submit_button);

        //Add the object to the list
        memKey_list.push(item)
        //send to local storage   
        localStorage.setItem(bird, JSON.stringify(memKey_list));
    }
})