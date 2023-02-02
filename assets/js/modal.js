const filterButton = document.querySelector("#filter-button");
const sidebarMenu = document.querySelector("#sidebar-menu");
const sidebar = document.querySelector(".sidebar");
const filtersList = document.querySelector(".all-filters");
const categories = document.querySelectorAll(".categories");
const categoryStatus = document.querySelector("#category-status");
const categoryGender = document.querySelector("#category-gender");
const categorySpecies = document.querySelector("#category-species");

function showDropdown(dropdown) {
	
    if(dropdown.style.display == 'none') {
    dropdown.style.display = 'block';

    } else if(dropdown.style.display == 'block') {
    dropdown.style.display = 'none';

    } else {
        dropdown.style.display = 'block';
    }	
}


sidebarMenu.addEventListener('click', (e) => {
    e.preventDefault();
    showDropdown(sidebar);
});


filterButton.addEventListener('click', (e) => {
    e.preventDefault();
    showDropdown(filtersList);
});


categories.forEach(category => {
    category.addEventListener('click', (e) => {
        
        e.preventDefault();
        
        if(category.innerHTML === "Status"){
            showDropdown(categoryStatus);
        } else if(category.innerHTML === "Gender") {
            showDropdown(categoryGender);
        } else if(category.innerHTML === "Species") {
            showDropdown(categorySpecies);
        } else {
            showDropdown(categoryStatus);
            showDropdown(categoryGender);
            showDropdown(categorySpecies);
        }
    });
});
   





