const url = 'http://localhost:3000/monsters'
const container = document.querySelector('#monster-container')

//when page loads
document.addEventListener('DOMContentLoaded', () => {
    //show first 50 monsters
    fetch(url).then(res => res.json()).then(monsterArray => {
        monsterArray.forEach((monster) => renderMonster(monster))
    })
})


function renderMonster(monster){
    //show name
    let nameId = document.getElementById('nameId')
    nameId.innerText = monster.name
        
    //show age
    let ageId = document.getElementById('ageId')
    ageId.innerText = "Age: " + monster.age

    //show description (bio)
    let bio = document.getElementById('bio')
    bio.innerText = "Bio: " + monster.description

    container.append(nameId, ageId, bio)

}