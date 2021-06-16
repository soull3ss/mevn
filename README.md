# mevn

###routes

/ = index, semplice get per l'homepage nessun dato esposto  
/list = ritorna tutti i prodotti inseriti  
/insertProduct = inserisce un prodotto da un oggetto json passato in post
```javascript
 { 
   title : "Titolo esempio", 
   description : "Descrizione esempio", 
   price : 12.99, 
   author : "Autore esempio", 
   copySell : 12,
 }
 ```
/findProduct = ricerca un prodotto mediante un oggetto
```javascript
    {
        title : "titolo da cercare"
    }
```

/deleteProduct = ricerca e cancella un prodotto tramite un oggetto
```javascript
    {
        title : "prodotto da cancellare"
        author : "autore da cancellare"
    }
```
