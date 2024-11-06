// Toggle the visibility of the profile dropdown menu
// This function checks the current display state of the dropdown.
// If it's set to "none", it changes it to "block" to show the dropdown.
// Otherwise, it sets the display to "none" to hide the dropdown.
function toggleDropdown() {
    const dropdown = document.getElementById("profile-dropdown");
    const isDropdownVisible = dropdown.style.display === "block";
    
    // Toggle the visibility of the dropdown
    dropdown.style.display = isDropdownVisible ? "none" : "block";
    
    // If the dropdown is open, add an event listener to close it when clicking outside
    if (!isDropdownVisible) {
        document.addEventListener("click", closeDropdownOnClickOutside);
    } else {
        // If dropdown is already closed, remove the event listener
        document.removeEventListener("click", closeDropdownOnClickOutside);
    }
}

// Function to close the dropdown when clicking outside of it
function closeDropdownOnClickOutside(event) {
    const dropdown = document.getElementById("profile-dropdown");
    
    // Check if the click was outside the dropdown or its button
    if (!dropdown.contains(event.target) && !event.target.closest(".user-profile")) {
        dropdown.style.display = "none";
        document.removeEventListener("click", closeDropdownOnClickOutside);  // Remove the event listener
    }
}









