function click(){
    document.getElementById('titel').style.color="#0059FF"
    document.body.style.backgroundColor = "red"
    document.getElementById('titel').innerHTML = "Grattis lol"
    document.getElementById('titel').style.fontSize = "100px"
    document.getElementById('knapp').style.height = "100px"
    document.getElementById('knapp').style.width = "200px"
    document.getElementById('knapp').style.fontSize = "50px"
    document.getElementById('knapp').innerHTML = "EPIC"
}

document.getElementById('knapp').onclick = click
