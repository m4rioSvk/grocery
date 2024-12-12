document.addEventListener('DOMContentLoaded', function() {
    // First page code
    if (document.querySelector('.item-list')) {  // Check if we're on the first page
        let groceryItems = [];
        const input = document.querySelector('.item-list');
        const addButton = document.querySelector('#add-entry');

        function addItemToList() {
            const value = input.value.trim();
            if (value !== '') {
                //Add item to array
                groceryItems.push(value);
                console.log('Current grocery list:', groceryItems);

                // Store the updated array in localStorage
                localStorage.setItem('groceryItems', JSON.stringify(groceryItems));

                //Clear input for next item
                input.value = '';

                //Optional: Show a brief confirmation
                const fieldset = input.closest('fieldset');
                fieldset.classList.add('flash');
                setTimeout(() => fieldset.classList.remove('flash'), 200);

                //Keep focus on input field
                input.focus();
            }
        }

        input.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                addItemToList();
            }
        });

        addButton.addEventListener('click', () => {
            addItemToList();
        });
    }

    // Second page code
    if (window.location.pathname.includes('index2.html')) {
        const finalList = document.querySelector('#final-shopping-list');
        const groceriesPaidBtn = document.querySelector('#groceries-paid');  // Changed to match your ID
        const savedItems = JSON.parse(localStorage.getItem('groceryItems') || '[]');

        savedItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            finalList.appendChild(li);
        });

        groceriesPaidBtn.addEventListener('click', () => {
            finalList.innerHTML = '';
            const thankYouMessage = document.createElement('h2');
            thankYouMessage.textContent = 'Thank you for using our grocery shopping site!';
            thankYouMessage.style.textAlign = 'center';
            finalList.appendChild(thankYouMessage);
            

            // Hide one button
            
            document.querySelector('#groceries-paid').style.display = 'none';
            document.querySelector('h1').style.display = 'none';
            // Clear the localStorage
            localStorage.removeItem('groceryItems');
        });
    }
});

//Bubbly button animation
const animateButton = function(e) {
    e.preventDefault();
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
        e.target.classList.remove('animate');
    }, 700);
};

const bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}




//Bubbly button grocery animation
const animateButtonGrocery = function(e) {
    e.preventDefault();
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
        e.target.classList.remove('animate');
    }, 700);
};

const bubblyButtonsGrocery = document.getElementsByClassName("bubbly-button-grocery");

for (var i = 0; i < bubblyButtonsGrocery.length; i++) {
    bubblyButtonsGrocery[i].addEventListener('click', animateButtonGrocery, false);
};

// Add Enter key listener for grocery input
document.querySelector('.item-list').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        // Trigger animation on the Add Entry grocery button
        document.querySelector('#add-entry').classList.add('animate');
        setTimeout(function(){
            document.querySelector('#add-entry').classList.remove('animate');
        }, 700);
    }
});
