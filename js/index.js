const url = 'http://localhost:3000/monsters'

//when page loads
document.addEventListener('DOMContentLoaded', () => {
    //show first 50 monsters
    fetch(url).then(res => res.json()).then(monsterArray => {
        monsterArray.forEach((monster) => renderMonster(monster))
    })
})


function renderMonster(monster){
    //show name
    console.log(monster)
    //show age

    //show description

}