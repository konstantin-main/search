const searchInput = document.querySelector('.form__input');
const searchButton = document.querySelector('.form__button');
const repositeryUnitArr = [];
const repositoriesBox = document.querySelector('.repositories');
const resultsLength = document.querySelector('.repository__length');
const resultsLengthValue = document.querySelector('.repository__length_value');










function showResult(Name) {
    const repositoryUnitTemplate = document.querySelector('#repositories__unit').content;
    const repositeryUnit = repositoryUnitTemplate.querySelector('.repositories__unit').cloneNode(true);
    let reposityUnitTitle = repositeryUnit.querySelector('.unit_info-title');
    let repositeryUnitSubtitle = repositeryUnit.querySelector('.unit_info-subtitle');
    reposityUnitTitle.textContent = Name;
    repositeryUnitSubtitle.textContent = `${Name + '' + Name}`;
    repositoriesBox.append(repositeryUnit);
    console.log('Все удалось')
}



searchButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    repositeryUnitArr.unshift(searchInput.value);
    console.log(repositeryUnitArr);
    repositeryUnitArr.forEach((repositeryUnitOne) => {
        showResult(repositeryUnitOne);
    })
    resultsLength.classList.add('repository__length_active');
    resultsLengthValue.textContent = repositeryUnitArr.length;
})