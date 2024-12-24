
$("#inputPrice").mask('000.000.000.000.000,00', {reverse: true});
var products = [
    {
        id: 1,
        name: "Computador M1-TX",
        description: "Intel I7, 16GB, SSD 256, HD 1T",
        price: 4900,
        category: 1,
        promotion: true,
        new: true
    },
    {
        id: 2,
        name: "Computador M2-TX",
        description: "Intel I7, 32GB, SSD 512, HD 1T",
        price: 5900,
        category: 2,
        promotion: false,
        new: true
    },
    {
        id: 3,
        name: "Computador M1-T",
        description: "Intel I5, 16GB, HD 1T",
        price: 2900,
        category: 3,
        promotion: false,
        new: false
    },
];

var categories = [
    { id: 1, name: "Produção Própria" },
    { id: 2, name: "Nacional" },
    { id: 3, name: "Importado" }
];

//chamada no carregamento do documento 
loadProducts();

function loadProducts(){  
    for(let prod of products){ 
        addNewRow(prod)
    }

} 

function addNewRow(prod){ 
    var table = document.getElementById("productsTable"); 
    
    var newRow=table.insertRow(); 

    var formatter= new Intl.NumberFormat('pt-br',{
        style:'currency', 
        currency:'BRL',
    });

    var idNode=document.createTextNode(prod.id);  
    var nameNode=document.createTextNode(prod.name);
    var descriptionNode=document.createTextNode(prod.description); 
    var priceNode=document.createTextNode(formatter.format(prod.price));  
    
    var categoria=categories[(prod.category)-1].name;
    var categoryNode=document.createTextNode(categoria); 

  

    var options='';
    if(prod.new){ 
       options='<span class="badge text-bg-primary me-3">L</span>';
    }         
    if(prod.promotion) { 
        options+='<span class="badge text-bg-success">P</span';    
    }
        


    newRow.insertCell().appendChild(idNode);  
    newRow.insertCell().appendChild(nameNode);  
    newRow.insertCell().appendChild(descriptionNode); 
    newRow.insertCell().appendChild(priceNode);
    newRow.insertCell().appendChild(categoryNode);

    newRow.insertCell().innerHTML=options; 

   
}