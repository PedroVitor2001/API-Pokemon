async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const types = data.types;

    const typeElement = document.getElementById("pokemonType");
    typeElement.textContent = "";

    const colors = {
      bug: "#26de81",
      dragon: "#8da4c9",
      electric: "#fed330",
      fairy: "#FF0069",
      fighting: "#30336b",
      fire: "#f0932b",
      flying: "#81ecec",
      grass: "#00b894",
      ground: "#EFB549",
      ghost: "#a55eea",
      ice: "#74b9ff",
      normal: "#95afc0",
      poison: "#6c5ce7",
      psychic: "#a29bfe",
      rock: "#2d3436",
      water: "#0190FF",
    };

    types.forEach((type) => {
      const spanElement = document.createElement("span");
      spanElement.textContent = type.type.name;
      spanElement.classList.add("type-item");

      const typeName = type.type.name.toLowerCase();
      const backgroundColor = colors[typeName] || "gray";
      spanElement.style.backgroundColor = backgroundColor;

      typeElement.appendChild(spanElement);
    });

    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "flex";
  } catch (error) {
    console.error(error);
  }
}
