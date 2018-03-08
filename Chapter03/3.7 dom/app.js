const paragraphs = Array.from(document.getElementsByTagName('p'));
const listItems = Array.from(document.getElementsByTagName('li'));

paragraphs.map(p => console.log(p.innerHTML));

listItems.map(li => console.log(li.innerHTML));
