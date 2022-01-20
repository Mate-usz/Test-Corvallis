# Test Corvallis

## Riguardo al progetto

Questo progetto è stato creato e sviluppato interamente con Angular.

Non è stato utilizzato `bootstrap`, solo `html` e `scss`.

Per far partire il progetto è necessario digitare `ng serve` o `npm start` nella console.

## Informazioni sull'applicazione

Aperta l'applicazione in `localhost:4200` viene subito caricato la pagina di login. In questa pagina vengono richieste le credenziali di accesso.

Non facendo nessun controllo sui dati inseriti nel form di login, l'applicazione ci permette di "loggare" inserendo dati casuali in entrambi i campi. Se l'utente dovesse cliccare sul pulsante `Login` senza aver compilato il form, verrà mostrato un messaggio di errore.

Quando il login sarà andato a buon fine, verrà mostrata la pagina `/dashboard` nella quale l'utente potrà scorrere una lista di customers. È possibile anche filtrare la lista per nome, aggiungere dei nuovi customer e cliccando su uno di questi verrà mostrata la pagina dei dettagli.

## Informazioni sullo sviluppo

`LOGIN`: 

- ho utilizzato `ReactiveFormsModule` per creare il form di login, non ho creato componenti in questa pagina essendo che non viene riutilizzato nulla. Quindi tutto quello che riguarda il login sta nell'apposito `html` e `scss`.

`DASHBOARD`:

- ho creato un componente `customers-table` nel quale vengono popolate le varie righe della tabella;
- per semplicità il pulsante `Add New Customer` inserisce un nuovo utente nella lista ogni volta con gli stessi dati;
- `customers-table` all'interno del `html` ho utilizzato un `ngFor` che cicla i vari customer presenti nell'array;
- il filtro lavora sul `firstName` del customer.

`ALTRO`:

- il modulo `dashboard` viene caricato in `lazy loading`;
- nel servizio `customer` è implementata tutta la logica riguardo i customer, l'aggiunta di un nuovo customer e il get di tutti quelli presenti.

## Possibili migliorie

`GENERALI`:

- media query più specifiche (coprire più dispositivi);
- si potrebbe creare un modello per i `customer`, con alcuni metodi basilari (es. getFullName());
