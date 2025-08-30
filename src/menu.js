const menu = (function() {
    const content = document.querySelector('#content');

    const changeContent = () => {
      content.style.gridTemplateRows = '1fr 3fr';
    };

    const createLogo = () => {
        const logo = document.createElement('div');
        logo.classList.add('logo');
        const title = document.createElement('p');
        title.innerText = 'MENU'
        logo.appendChild(title);
        content.appendChild(logo);
    };

    const createMain = () => {
        const main = document.createElement('div');
        main.classList.add('main');
        content.appendChild(main);
    }

    const createDishes = () => {
        const main = document.querySelector('.main');
        const dishes = [
            ['SHOUYU TONKOTSU', 'Umami-infused shouyu tare with creamy pork bone soup'],
            ['SPICY TONKOTSU', 'Shouyu Tonkotsu ramen with chilli and miso fried pork mince'],
            ['THE BIG BOY SPICY SPECIAL', 'Shouyu Tonkotsu large size, zenbu-nose, extra egg and spicy miso pork mince'],
            ['MENTAIKO CREAM RAMEN', 'Pork bone soup, usukuchi, sea-salt, mirin and sake tare with mentaiko (spicy marinated cod roe) topping'],
            ['TAIWAN MAZE SOBA', 'Spicy, garlicky Nagoya style soup-less ramen with gyo-fun and negi aroma oil.'],
            ['MENTAIKO CREAM MAZEMEN', 'A soupless ramen with Mentaiko (spicy marinated cod roe), nametake, menma and onsen egg.']
        ]
        for (let dish of dishes) {
            const wrapper = document.createElement('div');
            wrapper.classList.add('wrapper');
            const img = document.createElement('div');
            img.classList.add('img');
            img.innerText = 'Pretend that you can see an image';
            const title = document.createElement('p');
            title.innerText = dish[0];
            const subtitle = document.createElement('p');
            subtitle.innerText = dish[1];

            wrapper.appendChild(img);
            wrapper.appendChild(title);
            wrapper.appendChild(subtitle);
            main.appendChild(wrapper);
        }
    }

    const createLayout = () => {
        changeContent()
        createLogo()
        createMain()
        createDishes()
    }

    return {createLayout}
})()

export {menu};