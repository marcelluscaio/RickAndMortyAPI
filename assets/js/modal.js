const filterButton = document.querySelector("#filter-button");
const filtersList = document.querySelector(".all-filters");

function showDropdown(dropdown) {
	
    if(dropdown.style.display == 'none') {
    dropdown.style.display = 'block';
    console.log(dropdown.style.display);

    } else if(dropdown.style.display == 'block') {
    dropdown.style.display = 'none';
    console.log(dropdown.style.display);

    } else {
        dropdown.style.display = 'block';
    }	
}

filterButton.addEventListener('click', (e) => {
    e.preventDefault();
    showDropdown(filtersList);
});



