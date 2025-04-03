const wrap = document.getElementById("wrapper");
const apiUrl = 'https://rickandmortyapi.com/api/location';
async function Location(name = "") {
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
// async function Location() {
//     try {
//         const response = await fetch('https://rickandmortyapi.com/api/location');
//         const data = await response.json();
//         console.log(data);
//         wrap.innerHTML = data.results.map((Location) => {
//             return `
//             <div class="card">
//                 <h2>${Location.name}</h2>
//                 <p>Type: ${Location.type}</p>
//                 <p>Dimension: ${Location.dimension}</p>
//                 <p>Residents: ${Location.residents.length}</p>
//             </div>`
//         }
//         )
//         return data.results;
//     } catch (error) {
//         console.log("Не вызвалось API", error);
//     }
// }
// Location();
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
async function updateResults() {
    const searchValue = document.getElementById("search-input").value.trim();
    const resultsContainer = document.getElementById("wrapper");

    const Loca = await Location(searchValue);
    resultsContainer.innerHTML = Loca.length
        ? Loca.map(loc => `<div class="card">
            <h2><strong>${loc.name}</strong></h2>
            <p>Type: ${loc.type}</p>
            <p>Dimension: ${loc.dimension}</p>
            <p>Residents: ${loc.residents.length}</p>
            </div>`).join("")
        : "<p>Ничего не найдено</p>";
}
document.addEventListener("DOMContentLoaded", async () => {
    await updateResults();
    document.getElementById("search-input").addEventListener("input", updateResults);
});
updateResults();