function handleExplore() {
    const searchType = document.getElementById("search_type").value;
    const inputContainer = document.getElementById("search_input");
    
    if (searchType === "country") {
        inputContainer.innerHTML = '<label for="country_input">Enter Country Name:</label> <input type="text" id="country_input" placeholder="e.g., Malaysia">';
    } else if (searchType === "continent") {
        inputContainer.innerHTML = '<label for="continent_input">Enter Continent:</label> <input type="text" id="continent_input" placeholder="e.g., Asia">';
    } else if (searchType === "region") {
        inputContainer.innerHTML = '<label for="region_input">Enter Region:</label> <input type="text" id="region_input" placeholder="e.g., South-Eastern Asia">';
    } else if (searchType === "subregion") {
        inputContainer.innerHTML = '<label for="subregion_input">Enter Subregion:</label> <input type="text" id="subregion_input" placeholder="e.g., Southeastern Asia">';
    } else {
        inputContainer.innerHTML = '';
    }
}

function buttonClicked() {
    const searchType = document.getElementById("search_type").value;
    let searchValue = "";

    if (searchType === "country") {
        searchValue = document.getElementById("country_input").value;
        fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
        .then(response => response.json())
        .then(data => displayData(data[0]));
    } else if (searchType === "continent") {
        searchValue = document.getElementById("continent_input").value;
        fetch(`https://restcountries.com/v3.1/region/${searchValue}`)
        .then(response => response.json())
        .then(data => displayData(data[0]));
    } else if (searchType === "region") {
        searchValue = document.getElementById("region_input").value;
        fetch(`https://restcountries.com/v3.1/region/${searchValue}`)
        .then(response => response.json())
        .then(data => displayData(data[0]));
    } else if (searchType === "subregion") {
        searchValue = document.getElementById("subregion_input").value;
        fetch(`https://restcountries.com/v3.1/subregion/${searchValue}`)
        .then(response => response.json())
        .then(data => displayData(data[0]));
    }
}

function displayData(data) {
    document.getElementById("countryName").innerHTML = data.name.common || "N/A";
    document.getElementById("capital").innerHTML = data.capital ? data.capital.join(", ") : "N/A";
    document.getElementById("region").innerHTML = data.region || "N/A";
    document.getElementById("subregion").innerHTML = data.subregion || "N/A";
    document.getElementById("area").innerHTML = data.area ? `${data.area.toLocaleString()} km²` : "N/A";
    document.getElementById("population").innerHTML = data.population ? data.population.toLocaleString() : "N/A";
    document.getElementById("languages").innerHTML = data.languages ? Object.values(data.languages).join(", ") : "N/A";
    document.getElementById("timezone").innerHTML = data.timezones ? data.timezones.join(", ") : "N/A";
    document.getElementById("flag").src = data.flags ? data.flags.png : "";
    document.getElementById("flag").alt = `${data.name.common} Flag`;
    document.getElementById("continent").innerHTML = data.continents ? data.continents.join(", ") : "N/A";
    document.getElementById("coatsOfArms").src = data.coatOfArms ? data.coatOfArms.png : "";
    document.getElementById("carSide").innerHTML = data.car ? data.car.side : "N/A";
    document.getElementById("startOfWeek").innerHTML = data.startOfWeek || "N/A";
}

function explorePhrases() {
    var language = document.getElementById("languageInput").value.trim().toLowerCase();
    if (language) {
        var url = "https://www.omniglot.com/language/phrases/" + language + ".php";
        window.open(url, "_blank"); // Open the URL in a new tab
    } else {
        alert("Please enter a language.");
    }
}