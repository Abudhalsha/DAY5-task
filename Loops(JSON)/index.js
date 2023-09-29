var json = [{
    "name" : "abudhal sha", "task" : "zen poertal task", "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
}]


//For Loop:-
   for(let i=0 ; i<json.length ; i++){
    var obj= json[i];
console.log(obj.name);
console.log(obj.task);
console.log(obj.msg);
}

//In Loop:-

for(let key in json){
    if (json.hasOwnProperty(key)){
    console.log(json[key].name);
    console.log(json[key].task);
    console.log(json[key].msg);
}
}

// Of Loop:-

let text = "";
    for(let key in json){
        if (json.hasOwnProperty(key))
    
    for (let x of json[key].name)
   
     {
     text += x; 
    }
     console.log(text);
}

// For Each Loop:-

json.forEach(function(obj) { console.log(obj.msg); });


  





