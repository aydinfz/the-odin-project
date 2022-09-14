const img = document.querySelector("img")

const getRandomGifs = async() => {
    const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=FnZNV0LtCzfhrRKs2IqwsejlbacYXowM', {mode: "cors"})
    response.json().then(res => img.src = res.data.images.original.url)   
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

const getSearchedGif = async(inputVal) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=FnZNV0LtCzfhrRKs2IqwsejlbacYXowM&s=${inputVal}`)
    response.json().then(res => img.src = (res.data.images.original.url))
}
