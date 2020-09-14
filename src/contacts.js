const renderContactsPage = () => {
    document.title = 'Contact Us';
    const content = document.querySelector('.content');

    // Clear the content container
    if(content.childElementCount >= 2) { 
        content.removeChild(content.lastChild);
    }

    // Create contact div
    let contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-container');

    // Page title
    let contactH2 = document.createElement('h2');
    contactH2.classList.add('contact-title');
    contactH2.innerText = '~ Contact Us ~';
    

    // Paragraph
    let contactP = document.createElement('p');
    contactP.innerText = 'Call 555-555-5555 to place an order, otherwise use the form below to send us any feedback!';

    // Text box
    let contactInput = document.createElement('textarea');
    contactInput.setAttribute('rows', '5');
    contactInput.setAttribute('cols', '50');

    // Submit button
    let submitButton = document.createElement('button');
    submitButton.innerText = 'Submit';

    contactDiv.appendChild(contactH2);
    contactDiv.appendChild(contactP);
    contactDiv.appendChild(contactInput);
    contactDiv.appendChild(submitButton);

    content.appendChild(contactDiv);
};

export { renderContactsPage };