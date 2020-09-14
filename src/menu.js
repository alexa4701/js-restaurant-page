const renderMenuPage = function() {
    document.title = 'Our Menu';
    const content = document.querySelector('.content');
    const menuItems = [{
        name: 'Spaghetti',
        description: 'Spaghetti with meatballs',
        price: '$10',
    }, { 
        name: 'Calzone',
        description: 'Filled with cheese and pepperoni',
        price: '$8',
    }, {
        name: 'Pizza',
        description: 'Your choice of toppings',
        price: '$12',
    }, {
        name: 'Veggie Lasagna',
        description: 'A healthy option',
        price: '$8'
    }];

    // Clear the content container
    if(content.childElementCount >= 2) { 
        content.removeChild(content.lastChild);
    }

    // Create the menu div
    let menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-container');
    
    // Page title
    let menuH2 = document.createElement('h2');
    menuH2.classList.add('menu-title');
    menuH2.innerText = '~ Our Menu ~';
    menuDiv.appendChild(menuH2);

    // Populate the menu with items
    menuItems.forEach((item, index) => {
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('item', `item${index}`);
        
        let nameDiv = document.createElement('div');
        nameDiv.classList.add('name');
        nameDiv.innerText = item.name;

        let descriptionP = document.createElement('p');
        descriptionP.classList.add('description');
        descriptionP.innerText = item.description;

        let priceDiv = document.createElement('div');
        priceDiv.classList.add('price');
        priceDiv.innerText = item.price;

        itemDiv.appendChild(nameDiv);
        itemDiv.appendChild(descriptionP);
        itemDiv.appendChild(priceDiv);

        menuDiv.appendChild(itemDiv);
    });

    // Append menu div to content
    content.appendChild(menuDiv);
};

export { renderMenuPage };