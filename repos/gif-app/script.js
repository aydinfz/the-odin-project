const img = document.querySelector("img")

const getRandomGifs = () => {
    fetch('https://api.giphy.com/v1/gifs/random?api_key=FnZNV0LtCzfhrRKs2IqwsejlbacYXowM', {mode: "cors"})
    .then(res => res.json())
    .then(res => img.src = res.data.images.original.url)   
}

const btnRandom = document.querySelector(".random")
btnRandom.onclick = () => {
    getRandomGifs()
}


const btnSearch = document.querySelector(".search")

btnSearch.onchange = () => {
    let inputVal = document.querySelector("input").value
    getSearchedGif(`${inputVal}`)
    inputVal = ""

    let input = document.querySelector("input")
    getSearchedGif(`${input.value}`)
    input.value= ""

}

const getSearchedGif = (inputVal) => {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=FnZNV0LtCzfhrRKs2IqwsejlbacYXowM&s=${inputVal}`)
    .then(res => res.json())
    .then(res => img.src = (res.data.images.original.url))
}
