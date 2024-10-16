// get the button element
const javaclass = document.getElementById('colorButton');

// add_event_listener for the button click

javaclass.addEventListener("click", ()=>{
    javaclass.style.backgroundColor=javaclass.style.backgroundColor==='red' ? '#4CAF50':'red';
});