const characterList = document.getElementById('character-list');
const API_URL = 'https://rickandmortyapi.com/api/character';

async function fetchCharacters() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        data.results.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.classList.add('character-card');
            
            characterCard.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <div class="character-info">
                    <h2>${character.name}</h2>
                    <p><strong>Status:</strong> ${character.status}</p>
                    <p><strong>Species:</strong> ${character.species}</p>
                    <p><strong>Origin:</strong> ${character.origin.name}</p>
                    <p><strong>Location:</strong> ${character.location.name}</p>
                </div>
            `;
            
            characterList.appendChild(characterCard);
        });
    } catch (error) {
        console.error('Error al obtener los datos de Rick and Morty:', error);
    }
}

fetchCharacters();