/* =======================
   1. ENQUIRY FORM
   ======================= */

//Get the enquiry form from the enquiry page
const enquiryForm = document.getElementById("enquiry-form");

//Only run this code when the enquiry form is on the page
if (enquiryForm) {

    enquiryForm.addEventListener("submit", function (event) {

        //Stop the form from submitting immediately
        event.preventDefault();

        //Get the information entered by the user
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const category = document.getElementById("category").value;
        const product = document.getElementById("product").value.trim();
        const quantity = document.getElementById("quantity").value;
        const message = document.getElementById("message").value.trim();
        const contactMethod = document.getElementById("contact-method").value;

        //This is where the feedback message will display
        const formMessage = document.getElementById("form-message");

        //Checking if all the required information was entered
        if (name === "" || email === "" || phone === "" || category === "" || product === "" || quantity === "" || message === "" || contactMethod === "") {
            formMessage.textContent = "Please complete all the required fields.";
            formMessage.className = "error-message";
            return;
        }

        //Checking the email is in the correct format
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        //If conditional statement
        if (!emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.className = "error-message";
            return;
        }

        // Check that the phone number contains valid numbers
        const phonePattern =
            /^[0-9+\s-]{10,15}$/;
        if (!phonePattern.test(phone)) {
            formMessage.textContent = "Please enter a valid phone number.";
            formMessage.className = "error-message";
            return;
        }

        // Make sure the quantity is at least one
        if (Number(quantity) < 1) {
            formMessage.textContent = "Please enter a valid quantity.";
            formMessage.className = "error-message";

            return;
        }

        // Displaying a message when the validation is successful
        formMessage.textContent =  "Thank you, " + name +  ". Your product enquiry has been received.";
        formMessage.className = "success-message";
        enquiryForm.reset();
    });
}


/* =======================
   2. CONTACT FORM
   ======================= */
//Get the contact form from the contact page
const contactForm =
    document.getElementById("contact-form");

//Only run this code when the contact form is on the page
if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        //Stop the form from submitting immediately
        event.preventDefault();

        //Get the information entered by the user
        const contactName = document.getElementById("contact-name").value.trim();

        const contactEmail = document.getElementById("contact-email").value.trim();

        const messageType = document.getElementById("message-type").value;

        const contactMessage = document.getElementById("contact-message").value.trim();

        // This is where the contact feedback will display
        const contactFormMessage = document.getElementById("contact-form-message");

        // Check that the required information was entered
        if (contactName === "" || contactEmail === "" || messageType === "" || contactMessage === "") {
            contactFormMessage.textContent = "Please complete all the required fields.";
            contactFormMessage.className = "error-message";
            return;
        }

        // Check that the email address is valid
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(contactEmail)) {
            contactFormMessage.textContent = "Please enter a valid email address.";
            contactFormMessage.className = "error-message";

            return;
        }

        // Display a message when the form passes validation
        contactFormMessage.textContent = "Thank you, " + contactName + ". Your message has been received.";
        contactFormMessage.className = "success-message";

        // Clear the form
        contactForm.reset();
    });
}


/* =======================
   3. PRODUCT SEARCH
   ======================= */

// Get the product search box
const productSearch = document.getElementById("product-search");

// Get all product cards
const productCards = document.querySelectorAll(".product-card");

// Only run the search when the search box is available
if (productSearch) {

    productSearch.addEventListener("input", function () {
        // Convert the search to lowercase
        const searchText = productSearch.value.toLowerCase().trim();

        // Check every product card
        productCards.forEach(function (card) {
            const productText = card.textContent.toLowerCase();

            // Show products that match the search
            if (productText.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}


/* =======================
   4. PRODUCT FILTER
   ======================= */

// Get the category filter
const productFilter = document.getElementById("product-filter");

// Only run this section when the filter is available
if (productFilter) {
    productFilter.addEventListener("change", function () {
        const selectedCategory = productFilter.value;

        productCards.forEach(function (card) {
            const productCategory = card.getAttribute("data-category");

            // Display everything when "All Products" is selected
            if (selectedCategory === "all" || selectedCategory === productCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}