const home = (function () {
    const content = document.querySelector('#content');

    const changeContent = () => {
      content.style.gridTemplateRows = 'repeat(3, 1fr)';
    };

    const createHeadline = () => {
        const headline = document.createElement('div');
        headline.classList.add('headline')
        const quote = document.createElement('p');
        quote.innerText = "I've never tasted food more delicious than these ramens. You ought to try it out!";
        quote.classList.add('quote');
        const author = document.createElement('p');
        author.innerText = 'Giorno Giovanna';
        author.classList.add('author');
        headline.appendChild(quote);
        headline.appendChild(author);
        content.appendChild(headline);
    };

    const createLogo = () => {
        const logo = document.createElement('div');
        logo.classList.add('logo');
        const title = document.createElement('p');
        title.innerText = 'しんりゅう'
        const subtitle = document.createElement('p');
        subtitle.innerText = 'JAPANESE RAMEN | SHINRYU'

        logo.appendChild(title);
        logo.appendChild(subtitle);
        content.appendChild(logo);
    };

    const createHours = () => {
        const info = document.createElement('div')
        info.classList.add('info');
        const hours = document.createElement('div');
        hours.classList.add('hours');
        const p = document.createElement('p');
        p.innerText = 'OPENING HOURS';
        const ul = document.createElement('ul');
        const week = [
            ['Monday', '12:00 - 20:00'],
            ['Tuesday', '12:00 - 20:00'],
            ['Wednesday', '12:00 - 20:00'],
            ['Thursday', '12:00 - 20:00'],
            ['Friday', '12:00 - 20:00'],
            ['Saturday', '17:00 - 22:00'],
            ['Sunday', '17:00 - 22:00'],
            ]
        for (const day of week) {
            const li = document.createElement('li');
            li.innerText = `${day[0]}: ${day[1]}`
            ul.appendChild(li)
        }
        hours.appendChild(p);
        hours.appendChild(ul);
        info.appendChild(hours)
        content.appendChild(info);
    };

    const createLocation = () => {
        const location = document.createElement('div');
        location.classList.add('location');
        const title = document.createElement('p');
        title.innerText = 'Address';
        title.classList.add('title');
        const subtitle = document.createElement('p');
        subtitle.innerText = '0001 1st Ave, New York';
        location.appendChild(title);
        location.appendChild(subtitle);
        const info = document.querySelector('.info');
        info.appendChild(location);
        content.appendChild(info)
    };


    const createLayout = () => {
        changeContent()
        createLogo();
        createHeadline();
        createHours();
        createLocation();
    };

    return {createLayout}
})()

export {home};