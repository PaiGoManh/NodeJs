let itemsMap = new Map();

itemsMap.set(1, 'Apple');
itemsMap.set(2, 'Mango');
itemsMap.set(3, 'JackFruit');
itemsMap.set(4, 'Banana');
itemsMap.set(5, 'Guava');

function displayitem(map) {
    let itemlist = document.getElementById("itemlist");
    map.forEach((a, b) => {
        let listitem = document.createElement('li');
        listitem.textContent = `${b}: ${a}`;
        listitem.classList.add('py-2', 'px-4', 'bg-gray-100', 'border-b', 'border-gray-300');
        itemlist.appendChild(listitem);
    });
}

window.onload = () => {
    displayitem(itemsMap);
}
