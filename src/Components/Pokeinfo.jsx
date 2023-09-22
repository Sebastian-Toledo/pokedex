import React from "react";

const Pokeinfo = () => {
    return (
        <>
            <h1>Charmander</h1>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" />
            <div className="abilities">
                <div className="group">
                    <h2>blaze</h2>
                </div>
                <div className="group">
                    <h2>
                        solar-pwer
                    </h2>
                </div>
            </div>
            <div className="base-start">
                <h3>Hp: 78</h3>
                <h3>attack: 84</h3>
                <h3>defense: 78</h3>
                <h3>special-attack: 109</h3>
                <h3>Speed: 100</h3>
            </div>
        </>
    )
}

export default Pokeinfo