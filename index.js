let searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let searchInput = document.querySelector('#search-input').value;
    console.log("submitted form", searchInput)
});

var dropdown = document.body.querySelector('.dropdown-content');
dropdown.addEventListener('click', function(event){
    console.log(event);
    if(event.target.className === 'fruit'){
        console.log(event.target.className);
        for(let i = 0; i < allPlants; i++){
            allPlants[i].show = false;
            if(allPlants[i].subtype === 'fruit'){
                console.log("working");
                allPlants[i].setShow(true);
            }
        }
    }
    if (event.target.className === 'herb'){

    }
    if(event.target.className === 'folliage'){

    }
    if(event.target.className === 'indoorFlower'){

    }
    if(event.target.className === 'succulent'){

    }
    if(event.target.className === 'vegetable'){

    }
})
