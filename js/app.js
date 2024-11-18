// comments added to each line as per your request :)

document.addEventListener('DOMContentLoaded', function() {
    // Select all sections in the document
    const sections = document.querySelectorAll('section');
    // Get the navbar element by its ID
    const navbar = document.getElementById('navbar');

    // Dynamically create navbar items for each section
    sections.forEach(section => {
        // Create a new list item for the navbar
        const navItem = document.createElement('li');
        // Create a new anchor element for the link
        const navLink = document.createElement('a');
        
        // Set the href attribute to link to the section by its id
        navLink.href = `#${section.id}`;
        // Set the link text from the data attribute of the section
        navLink.textContent = section.dataset.nav;

        // Add a click event listener to the link
        navLink.addEventListener('click', function(event) {
            // Prevent the default anchor click behavior
            event.preventDefault();
            // Scroll smoothly
            section.scrollIntoView({ behavior: 'smooth' });
        });

        // Append the link to the list item
        navItem.appendChild(navLink);
        // Append the list item to the navbar
        navbar.appendChild(navItem);
    });

    // Added an event listener to handle scrolling
    window.addEventListener('scroll', function() {
        // Loop through each section to know which is active
        sections.forEach(section => {
            // geting the position of the section relative to the viewport
            const rect = section.getBoundingClientRect();
            // Select all links in the navbar
            const navLinks = document.querySelectorAll('#navbar a');

            // To check if the section is within the viewport (aka visible)
            if (rect.top >= -100 && rect.top <= 300) {
                // Add active class to the section to apply styles
                section.classList.add('active');
                // Highlight the link in the navbar(color yellow)
                navLinks.forEach(link => {
                    // toggle is a method that i used that adds the class active to the link if the condition is true and removes it if the condition is false
                    //exp: If the link's  matches the current section id (in the viewport) then the active class will be added to that link and it will be highligted yellow in the navbar.
                    link.classList.toggle('active', link.getAttribute('href') === `#${section.id}`);
                });
            } else {
                // If the section is not visible, remove the 'active' class
                section.classList.remove('active');
            }
        });
    });
});