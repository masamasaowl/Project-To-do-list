let addBtn = document.querySelector(".addBtn");
let ul = document.querySelector(".list-group");
let input = document.querySelector(".inpTask");


addBtn.addEventListener("click",() => {
    addTask();
});
input.addEventListener("keydown",(event) => {
    if(event.key === "Enter"){
        addTask();
    }
});


let addTask = () => {
    console.log(input.value);

    // give class to ul
    ul.classList.add("list-group");

    // create element li
    let task = document.createElement("li");
    
    // give class to li
    task.classList.add("list-group-item");

    // append li inside ul by appendchild
    ul.appendChild(task); 

    
    // create checkbox
    let checkbox = document.createElement("input");
    
    // set attribute as checkbox
    checkbox.setAttribute("type", "checkbox");
    
    // give class to checkbox
    checkbox.classList.add("form-check-input");
    checkbox.classList.add("delete")

    // append checkbox inside li
    task.appendChild(checkbox);


    // change text of li to input.value
    // task.innerText = input.value;
    // this is giving us a error by not showing the checkbox before it
    // it happened as changing the innerText has a very high priority so it overwrites over everything else including the checkbox 

    // this is a fix of the error by appending it as a text node
    let textNode = document.createTextNode(input.value);
    task.appendChild(textNode);

    // reset value of input to empty
    input.value = "";
}




// ===================== deleting mechanism ===========

// // select checkbox with delete class in them
// let deleteBtns = document.querySelectorAll(".delete");

// // a for of loop for all the checkboxes
// for( let deleteBtn of deleteBtns){

//     // the event is a change and not click for checkboxes
//     deleteBtn.addEventListener("change", () => {

//         if(deleteBtn.checked){
//             console.log("checkbox checked")
//         }

//     });
// };


// THE ABOVE MECHANISM DOESNT WORK
 

// this method works because the checkboxes were created dynamically
document.addEventListener('change', (event) => {
    if (event.target.type === 'checkbox') {
        console.log(`Checkbox is CHECKED`);
        let parent = event.target.parentElement;
        console.log(parent);

        // so a little delay is observed after checking the box
        setTimeout(() => {
            parent.remove();
        },700);
        
    };
});

// took a lot of help from ChatGPT as a lot of concepts were unexpectedly new



// as always
// ================================= THANK YOU SO MUCH SHRADDHA MA'AM FOR ALL THE EFFORTS ==================================

