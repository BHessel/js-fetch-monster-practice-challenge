const url = 'http://localhost:3000/monsters/?_limit=50&_page=1'

//when page loads
document.addEventListener('DOMContentLoaded', () => {
    //show first 50 monsters
    fetch(url).then(res => res.json()).then(monsterArray => {
        monsterArray.forEach((monster) => renderMonster(monster))
    })

    let newMonsterContainer = document.querySelector('#create-monster')
    let monsterBtn = document.querySelector('#submitBtn')
    monsterBtn.addEventListener('click', (event) => {
        createMonster(event)
    })

})


function renderMonster(monster){

    const container = document.querySelector('#monster-container')

    //show name
    let h2 = document.createElement('h2')
    h2.id = 'nameId'
    h2.innerText = monster.name
    
    //show age
    let h4 = document.createElement('h4')
    h4.id = 'ageId'
    h4.innerText = "Age: " + +monster.age

    //show description (bio)
    let p = document.createElement('p')
    p.id = 'bio'
    p.innerText = "Bio: " + monster.description

    container.append(h2, h4, p)

}

//what's next?

    //create a form? I just updated the HTML doc with the code from inspecting the js/demo.js... This was the easiest, coders like easy, is it wrong to do it this way?

        //with a fetch POST request?

function createMonster(event){
    //collect new form info
    let monsterInfo = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        description: document.getElementById('description').value
    }

    //build object to send to server
    fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify(monsterInfo)
    }).then(response => response.json())
      .then(monster => renderMonster(monster))

    
}


// next button leads to next 50...

//I'll want to add an event listener to each button

//fwd button should show next 50, IF there are 50 (or fewer) left. Else do nothing

//back button should go back 50, unless on page 1
