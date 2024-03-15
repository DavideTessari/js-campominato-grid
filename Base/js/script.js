// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Consigli del giorno:  :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.


// Questo script viene eseguito quando il documento HTML è completamente caricato
document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.getElementById('playButton');
    const gridContainer = document.getElementById('grid-container');

    // Aggiunge un gestore di eventi al bottone Play
    playButton.addEventListener('click', function () {
        // Genera la griglia
        for (let i = 1; i <= 100; i++) {
            // Crea un nuovo elemento div per rappresentare una cella
            const cell = document.createElement('div');
            // Imposta il testo della cella con il numero corrente
            cell.innerHTML = i;
            // Aggiungi la classe 'cell' alla cella
            cell.classList.add('cell');
            // Aggiungi la cella al contenitore della griglia
            gridContainer.appendChild(cell);
    
            // Aggiunge un gestore di eventi click a ciascuna cella
            cell.addEventListener('click', function () {
                // Aggiungi la classe 'clicked' alla cella cliccata
                this.classList.add('clicked');
                // Visualizza il numero della cella cliccata in un alert
                alert('Cella cliccata: ' + cell.innerHTML);
            });
        }
        // Disabilita il bottone dopo aver generato la griglia
        playButton.disabled = true;
    });
});



