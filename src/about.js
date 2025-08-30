const about = (function ()  {
    const content = document.querySelector('#content');
    const changeContent = () => {
      content.style.gridTemplateRows = 'repeat(2, 1fr)';
    };

    const createLogo = () => {
        const logo = document.createElement('div');
        logo.classList.add('logo');
        const title = document.createElement('p');
        title.innerText = 'ABOUT US'
        logo.appendChild(title);
        content.appendChild(logo);
    };

    const createHeadline = () => {
        const about = document.createElement('div');
        about.classList.add('about')
        const quote = document.createElement('p');
        quote.innerText = "SHINRYU — named after the legendary dragon from Final Fantasy, symbolizing power and rarity.";
        quote.classList.add('quote');
        const email = document.createElement('p');
        email.classList.add('email');
        email.innerHTML = 'Email us at <span>info@shinryuramen.com</span>'
        const address = document.createElement('p');
        address.innerText = '0001 1st Ave, New York';

        about.appendChild(quote);
        about.appendChild(email);
        about.appendChild(address);
        content.appendChild(about);
    };

    const createLayout = () => {
        changeContent()
        createLogo()
        createHeadline()
    }

    return {createLayout}
})()

export { about };