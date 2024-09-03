import './menu.style.css';

const menuItems = [
	[
		'Seared Filet Mignon',
		'Filet Mignon seared to perfection with wild mushrooms and truffle butter',
		'$56.99',
	],
	[
		'Charbroiled Ribeye',
		'Rich, marbled ribeye charbroiled with garlic herb crust and caramelized shallots',
		'$65.99',
	],
	[
		'Prime New York Strip',
		'Hand-cut New York Strip with red wine reduction and roasted bone marrow',
		'$74.99',
	],
	[
		'Wagyu Beef Tenderloin',
		'Exquisite Wagyu tenderloin with black garlic puree and crispy potato galette',
		'$109.99',
	],
	[
		'Grilled Porterhouse',
		'Classic Porterhouse grilled with rosemary and thyme, served with Béarnaise sauce',
		'$89.99',
	],
	[
		'Dry-Aged Tomahawk',
		'Impressive tomahawk steak dry-aged for 28 days, served with smoked sea salt',
		'$104.99',
	],
];

export default (() => {
	const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-container')

	menuItems.forEach((dinner, index) => {
		const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item')
		menuItem.classList.add(`menu-item-${index}`);

		const titleSpan = document.createElement('span');
		titleSpan.classList.add('meal-title');
		titleSpan.textContent = dinner[0];
		menuItem.appendChild(titleSpan);

		const descriptionSpan = document.createElement('span');
		descriptionSpan.classList.add('meal-description');
		descriptionSpan.textContent = dinner[1];
		menuItem.appendChild(descriptionSpan);

		const priceSpan = document.createElement('span');
		priceSpan.classList.add('meal-price');
		priceSpan.textContent = dinner[2];
		menuItem.appendChild(priceSpan);

		menuDiv.appendChild(menuItem);
	});
    return menuDiv;
})();
