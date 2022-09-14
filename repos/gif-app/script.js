const img = document.querySelector("img")

const getRandomGifs = async() => {
    const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=FnZNV0LtCzfhrRKs2IqwsejlbacYXowM', {mode: "cors"})
    const random = await response.json()
    img.src = random.data.images.original.url
}

const btnRandom = document.querySelector(".random")
btnRandom.onclick = () => {
    getRandomGifs().catch(alert)
}


const btnSearch = document.querySelector(".search")

btnSearch.onchange = () => {
    let inputVal = document.querySelector("input").value
    getSearchedGif(`${inputVal}`).catch(alert)
    inputVal = ""

    let input = document.querySelector("input")
    getSearchedGif(`${input.value}`)
    input.value= ""

}

const getSearchedGif = async(inputVal) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=FnZNV0LtCzfhrRKs2IqwsejlbacYXowM&s=${inputVal}`)
    const searched = await response.json()
    img.src = searched.data.images.original.url
}
