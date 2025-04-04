const wrap = document.getElementById("wrapper");
const apiUrl = 'https://rickandmortyapi.com/api/character';
async function character(name = "") {
    try {
        const url = name ? `${apiUrl}?name=${name}` : apiUrl;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data.results
    } catch (error) {
        console.error(error);
    }
}
async function updateResults() {
    const searchValue = document.getElementById("search-input").value.trim();
    const resultsContainer = document.getElementById("wrapper");

    const Character = await character(searchValue);
    resultsContainer.innerHTML = Character.length
        ? Character.map(char => 
            `<div class="card">
            <img src="${char.image}""></img>
            <h2><strong>${char.name}</strong></h2>
            <p>Status: ${char.status}</p>
            <p>Species: ${char.species}</p>
            <p>type: ${char.type.length}</p>
            </div>`).join("")
        : "<p>Ничего не найдено</p>";
}
document.addEventListener("DOMContentLoaded", async () => {
    await updateResults();
    document.getElementById("search-input").addEventListener("input", updateResults);
});
updateResults();