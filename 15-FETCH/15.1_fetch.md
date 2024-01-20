# REQUETER AVEC FETCH

```javascript
fetch("url")
.then(function(response){

  if(!response.ok){
    throw new Error("message d'erreur")
  }

  return response.json()
})
.then(function(data){

  if('condition'){
    throw new Error("message d'erreur")
  }

  console.log(data)
})
.catch(function(error){
  console.log(error.message)
})
.finaly(function(){
  console.log("Opération terminée.")
})
```

1. `fetch` va chercher quelque chose en suivant une URL, puis va retourner une `Promise`.

2. `then` récupère la `Promise` renvoyée par `fetch`. Elle prend en paramètre une fonction de rappel qui sera exécutée dès que quelque chose est reçu. Cette fonction de rappel prend en paramètre un argument qui contiendra la valeur de la `Promise`.

3. `response` retourne un objet avec plusieurs propriétés fournissant  des informations sur la réponse: 

   - `status`  retourne le code status (200, 404, 500 ...)
   - `ok` retourne `true` ou `false` selon que l'API a renvoyé des données ou non
   - `body` retourne les données de l'API
   
4. Ne pas oublier de traiter les cas d'erreur en lançant  une `Error` avec `throw` qui sera capturée  par le bloc `catch`

5. `json()` C'est une méthode de l'objet `Response`. Elle permet de convertir les données du `body` en format `JSON` et les retourne dans une `Promise`.

```javascript
 respone.json()
```

6. Comme `json()` retourne une `Promise`, il faut utiliser un autre bloc `then`pour traiter cette `Promise`retournée

7. On effectue le traitement sur les données réélles cette fois-ci, sans oublier de traiter les cas d'erreur

8. `catch` ne traite que les `Promies` rejetée. Cependant, il est possible qu'une `Promise` soit `Fulfilled`, mais que les données ne soient pas trouvées `(response.ok = false)`. Dans ce cas, il n'y a pas d'erreur, mais il faut gérer cela manuellement avec `throw`.

9. `finaly`: ce bloc est excuté dans tous les cas
