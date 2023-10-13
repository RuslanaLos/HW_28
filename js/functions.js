function getAndShowData(category, page) {
    axios.get(`https://swapi.dev/api/${category}/?page=${page}`)
        .then(response => {
            const data = response.data.results;
            if (response.data.next === null) {
                nextBtn[category].style.display = 'none';
            } else {
                nextBtn[category].style.display = 'block';
            }
            if (response.data.previous === null) {
                prevBtn[category].style.display = 'none';
            } else {
                prevBtn[category].style.display = 'block';
            }
            const infoDiv = document.getElementById(`${category}Wrap`);
            infoDiv.style.display = 'block';
            clearList(category);
            showData(category, data);
        })
        .catch(error => {
            console.error(`Відбулася помилка під час отримання даних для категорії ${category}:`, error);
        });
}

function clearList(category) {
    const list = document.getElementById(`${category}InfoList`);
    list.innerHTML = '';
}

function showData(category, data) {
    const list = document.getElementById(`${category}InfoList`);
    list.style.display = 'block';
    const btnWrap = document.getElementById(`${category}Buttons`);
    btnWrap.style.display = 'block';
    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name;
        listItem.addEventListener('click', () => {
            showDetails(category, item);
        });
        list.appendChild(listItem);
    });
}

function showDetails(category, item) {
    const modal = document.querySelector('.modal');
    const modalList = document.getElementById('modalList');
    modalList.innerHTML = '';
    const fieldsToShow = itemsFeatures[category];
    fieldsToShow.forEach(fieldName => {
        const detailItem = document.createElement('li');
        detailItem.textContent = `${fieldName}: ${item[fieldName]}`;
        modalList.appendChild(detailItem);
    });
    modal.style.display = 'block';
    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

function handleNextClick(category) {
    pageOfLink[category]++;
    getAndShowData(category, pageOfLink[category]);
}
function handlePreviousClick(category) {
    pageOfLink[category]--;
    getAndShowData(category, pageOfLink[category]);
}







