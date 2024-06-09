let itemsMap = new Map();

itemsMap.set(1, 'Apple');
itemsMap.set(2, 'Mango');
itemsMap.set(3, 'JackFruit');
itemsMap.set(4, 'Banana');
itemsMap.set(5, 'Guava');

function displayitem(map) {
    let itemlist = document.getElementById("itemlist");
    itemlist.innerHTML='';
    map.forEach((a, b) => {
        let listitem = document.createElement('li');
        listitem.textContent = `${b}: ${a}`;
        listitem.classList.add('py-2', 'px-4', 'bg-gray-100', 'border-b', 'border-gray-300');
        itemlist.appendChild(listitem);
    });
}

function addItem(key ,value){
    itemsMap.set(parseInt(key), value);
    displayitem(itemsMap);
}

// Handle form submit
document.getElementById('addform').addEventListener('submit', (e) => {
    e.preventDefault();
    let key = document.getElementById('itemkey').value;
    let value = document.getElementById('itemvalue').value;
    addItem(key, value);
    document.getElementById('addform').reset();
});

window.onload = () => {
    displayitem(itemsMap);
}
