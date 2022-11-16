const searchInput = document.querySelector('.form__input');
const searchButton = document.querySelector('.form__button');
const repositoriesBox = document.querySelector('.repositories');
const resultsLength = document.querySelector('.repository__length');
const resultsLengthValue = document.querySelector('.repository__length_value');






function searchInfo() {
  fetch(`https://api.nomoreparties.co/github-search?q=*${searchInput.value}*`)
        .then((response) => response.json())
        .then((data) => {
            // let dives = document.querySelectorAll('.repositories__unit');
            // dives.remove()
            console.log(data)
            console.log(data.items)
            resultsLength.classList.add('repository__length_active');
            resultsLengthValue.textContent = data.items.length;
            data.items.forEach((dataItem) => {
                let Name = dataItem.name
                let Sername = dataItem.full_name
                showResult(Name, Sername)
        })
    
    })
}





function showResult(Name, Sername) {
    const repositoryUnitTemplate = document.querySelector('#repositories__unit').content;
    const repositeryUnit = repositoryUnitTemplate.querySelector('.repositories__unit').cloneNode(true);
    let reposityUnitTitle = repositeryUnit.querySelector('.unit_info-title');
    let repositeryUnitSubtitle = repositeryUnit.querySelector('.unit_info-subtitle');
    reposityUnitTitle.textContent = Name;
    repositeryUnitSubtitle.textContent = `${Sername}`;
    repositoriesBox.append(repositeryUnit);
    console.log('Все удалось')
}



// deleteReposities = document.querySelectorAll('.repositories__unit');
// deleteRepositiesArr = Array.from(deleteReposities)
// console.log(deleteRepositiesArr.length) "Это здесь просто нужно, как заметка для меня."



searchButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    let deleteDiv = new Promise((resolve, reject) => {

       deleteReposities = document.querySelectorAll('.repositories__unit');
       deleteRepositiesArr = Array.from(deleteReposities)
       deleteRepositiesArr.forEach((deleteRepositysArr) => {
       if (repositoriesBox.includes(deleteRepositysArr)) {
        deleteRepositysArr.remove()
       } else { console.log('Вроде получилочь')
       } resolve()
      })})
    deleteDiv.then(searchInfo())
    deleteDiv.catch(console.log('провал'))
    })
    








