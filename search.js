// Show and Hide the search input 

// Variable To Hold Magnifying Glass Container
const glassContainer = document.getElementById('glassContainer')

// Variable To Hold a tag 
const searchButton = document.getElementById('magGlass')

// Variable To Hold Search Icon (i tag)
const searchIcon = document.getElementsByClassName('fa-search')

// Variable To Hold list item
const searchListItem = document.getElementsByClassName('search')

// Variable To Hold header
const header = document.getElementById('header')

// Variable To Hold searchContainer 
const searchContainer = document.getElementsByClassName('searchContainer')

// Variable to hold search input
const searchInput = document.getElementById('search')

// HTML for original search container
const searchContainerHTML = '<div class="searchContainer"><button id="magGlass" class="magGlass" aria-label="search button"><i class="fas fa-search"></i></button></>'

// Variable To Hold Full Form HTML
const formHTML = '<form id="searchForm" action="_blank" aria-hidden="false"><label class="sr-only searchInputLabel" for="search" id="searchLabel">Enter search text</label><input type="search" id="search" name="search" placeholder="Search"><button id="magGlass" class="magGlass" aria-label="search button"><i class="fas fa-search"></i></button></form>'

// Variable To Start Restart The Event Listener
const listenerReset = function resetEventListener() {
    startEventListener()
}

// Variable To Start Restart 2nd Event Listener
const listener2 = function setEventListener2() {
    startEventListener2()
}

// Start Initial Listener 
startEventListener()

function startEventListener() {
    // Listen for click event on document
    document.addEventListener('click', function eventListener(e) {
        // variable to hold click target
        const target = e.target;
        // if search icon is clicked
        if (target === searchContainer || target === glassContainer || target === searchButton) {

            /* Magnifying Glass Clicked */

            // CSS Changes to descend search input
            glassContainer.style.padding = "10px"
            glassContainer.style.transition = "transform, 1.1s"
            glassContainer.style.transform = "translate(-150px, 60px)"
            glassContainer.style.display = "flex"
            glassContainer.style.flexDirection = "row"

            // Add search input to .glassContainer next to magnifying glass
            glassContainer.innerHTML = `${formHTML}`
            // Remove first Event Listener
            this.removeEventListener("click", e, eventListener)

        }
        // if search container is not present start second event listener
        if (searchContainer.length === 0) {
            listener2()
        }
    })
}

function startEventListener2() {
    // Listen for clicks on document
    document.addEventListener('click', function searchCloseListener(e2) {
        // Variable to hold click target
        const target2 = e2.target;

        // Variable to hold search input
        const searchInput = document.getElementById('search')
        // Variable To Hold Search Input Label
        const searchLabel = document.getElementById('searchLabel')
        // Variable containing the form element
        const searchForm = document.getElementById('searchForm');

        // If click target is not form element
        if (target2 != searchIcon && target2 != searchInput) {

            // CSS Changes to ascend search input
            glassContainer.style.padding = "0"
            glassContainer.style.transform = "none"
            glassContainer.style.display = "block"



            // Variable To Hold Search Input Label
            const searchLabel = document.getElementById('searchLabel')
            // Variable containing the form element
            const searchForm = document.getElementById('searchForm');

            // Remove added/changed elements
            searchInput.remove()
            searchLabel.remove()
            searchForm.remove()
            glassContainer.innerHTML = `${searchContainerHTML}`

            // Remove first Event Listener
            this.removeEventListener("click", e2, searchCloseListener)

            // Run the initial event listener again
            listenerReset()
        }
    })
}