fetch('http://localhost:3000/dogs')
.then(response => response.json()) // DON"T FORGET THE PARENTHESES HERE!!
.then(data => {
    renderDogs(data)
})

function renderDogs(dogs) {
    dogs.forEach(renderDog)
    console.log(dogs)
}

// builder the dog data list
function renderDog(dog) {
    const dogForm = document.getElementById('table-body')
    
    const dogRow = document.createElement('tr')

    const dogName = document.createElement('td')
    const dogBreed = document.createElement('td')
    const dogSex = document.createElement('td')
    const editButton = document.createElement('button')

    dogName.textContent = dog.name
    dogBreed.textContent = dog.breed
    dogSex.textContent = dog.sex
    editButton.textContent = 'Edit Dog'
    
    dogRow.append(dogName, dogBreed, dogSex, editButton)
    dogForm.append(dogRow)

    editButton.addEventListener('click', (e) => {
        // e.preventDefault()

        const children = FORM.children;
        const nameInput = children[0]
        const breedInput = children[1]
        const sexInput = children[2]

        children[3].id.dogid


       nameInput.value = dog.name;
       breedInput.value = dog.sex;
       sexInput.value = dog.breed;
    
        console.log('Ive been clicked')
    })
    // console.log(renderDog)
}





const init = () => {
   

}

init()
