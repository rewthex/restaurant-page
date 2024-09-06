import './about.style.css';

const about = [
	`The name "Ringside" was inspired by the founders' love for boxing, a sport that embodied the grit, determination, and pursuit of excellence that the steakhouse aspired to. This unique connection to the world of boxing is reflected in the restaurant’s décor, which features memorabilia from legendary matches and champions.`,
	`From the beginning, Ringside Steakhouse set itself apart by sourcing only the highest quality beef, dry-aged in-house to enhance its rich flavor and tenderness. Over the years, the restaurant expanded its menu to include an array of carefully curated seafood, locally-sourced produce, and an award-winning wine list, solidifying its reputation as a premier dining destination.
`,
	`Today, Ringside Steakhouse remains a family-run operation, proudly carrying forward the traditions that have made it a beloved staple in Portland’s culinary scene. With its commitment to excellence and its rich history, Ringside continues to offer an unparalleled dining experience, where guests can savor the finest steaks in an atmosphere steeped in heritage and charm.`,
];

export default (() => {
	const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about-container')
	about.forEach((para) => {
        const aboutPara = document.createElement('p')
        aboutPara.classList.add('about-para')
        aboutPara.innerText = para;
        aboutDiv.appendChild(aboutPara)
    })
	return aboutDiv;
});
