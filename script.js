const number = document.querySelector(".number"); 
const display = document.querySelector(".display"); 
const clear = document.querySelector(".clear"); 

number.addEventListener("click", function (e) { 
    // Clear initial 0 or Error before adding new input
    if (display.innerText === "0" || display.innerText === "Error") { 
        display.innerText = ""; 
    } 

    // Add numbers and operators (Exclude DEL and = from typing)
    if (e.target.classList.contains("boxes") && e.target.innerText !== "DEL" && e.target.innerText !== "=") { 
        display.innerText += e.target.innerText; 
    } 

    // Delete last character
    if (e.target.innerText === "DEL") { 
        display.innerText = display.innerText.slice(0, -1); 
        if (display.innerText === "") { 
            display.innerText = "0"; 
        } 
    } 

    // Calculate result
    if (e.target.innerText === "=") { 
        try { 
            // Avoid evaluating an empty screen
            if (display.innerText.trim() !== "") {
                display.innerText = eval(display.innerText); 
            }
        } catch { 
            display.innerText = "Error"; 
        } 
    } 
}); 

// Clear button logic
clear.addEventListener("click", function () { 
    display.innerText = "0"; 
});
