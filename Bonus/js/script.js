// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// Consigli del giorno:  :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.


document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.getElementById('playButton');
    const gridContainer = document.getElementById('grid-container');
    const selectDifficulty = document.createElement('select');

    // Aggiungi le opzioni di difficoltà alla select
    selectDifficulty.innerHTML = `
        <option value="1">Difficoltà 1</option>
        <option value="2">Difficoltà 2</option>
        <option value="3">Difficoltà 3</option>
    `;
    
    // Aggiungi un gestore di eventi al bottone Play
    playButton.addEventListener('click', function () {
        // Rimuovi le celle esistenti dal contenitore della griglia
        gridContainer.innerHTML = '';

        // Ottieni la difficoltà selezionata dalla select
        const selectedDifficulty = parseInt(selectDifficulty.value);
        let gridSize, gridColumns, gridRows;

        // Imposta le dimensioni della griglia in base alla difficoltà selezionata
        if (selectedDifficulty === 1) {
            gridSize = 100;
            gridColumns = 10;
            gridRows = 10;
        } else if (selectedDifficulty === 2) {
            gridSize = 81;
            gridColumns = 9;
            gridRows = 9;
        } else if (selectedDifficulty === 3) {
            gridSize = 49;
            gridColumns = 7;
            gridRows = 7;
        } else {
            gridSize = 100;
            gridColumns = 10;
            gridRows = 10;
        }

        // Genera la griglia
        for (let i = 1; i <= gridSize; i++) {
            const cell = document.createElement('div');
            cell.innerHTML = i;
            cell.classList.add('cell');
            gridContainer.appendChild(cell);

            cell.addEventListener('click', function () {
                this.classList.add('clicked');
                alert('Cella cliccata: ' + cell.innerHTML);
            });
        }

        // Imposta lo stile della griglia in base alle dimensioni calcolate
        gridContainer.style.gridTemplateColumns = `repeat(${gridColumns}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${gridRows}, 1fr)`;

        playButton.disabled = true;
    });

    // Aggiungi la select prima del bottone di generazione
    playButton.parentNode.insertBefore(selectDifficulty, playButton);
});







