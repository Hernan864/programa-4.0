fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById("image").src=`${data.results[0].picture.medium}`;
    console.log( document.getElementById("image"));
    let datos=data.results[0];
   
    let info1 = document.querySelector("#info1"); 

    
    let span = document.createElement("span");
    let textnode = document.createTextNode(`Nombre y apelllido: ${datos.name.first}, ${datos.name.last}`);
    span.appendChild(textnode);
    info1.appendChild(span);
    
    let span1 = document.createElement("span");
    let textnode1 = document.createTextNode(`Fecha de nacimiento: ${datos.dob.date}`)
    span1.appendChild(textnode1);
    info1.appendChild(span1);
    
    let span2 = document.createElement("span");
    let textnode2 = document.createTextNode(`Dni: ${datos.id.value}`)
    span2.appendChild(textnode2);
    info1.appendChild(span2);
    
    let span3 = document.createElement("span");
    let textnode3 = document.createTextNode(`Telefono fijo: ${datos.cell}`)
    span3.appendChild(textnode3);
    info1.appendChild(span3);

    let span4 = document.createElement("span");
    let textnode4 = document.createTextNode(`Mail: ${datos.email}`)
    span4.appendChild(textnode4);
    info1.appendChild(span4);
    

    let info2 = document.querySelector("#info2"); 

    
    let div = document.createElement("div");
    let textnodeinfo2 = document.createTextNode(`Localidad: ${datos.location.city}`);
    div.appendChild(textnodeinfo2);
    info2.appendChild(div);
    
    let div1 = document.createElement("div");
    let textnodeinfo21 = document.createTextNode(`Codigo Postal: ${datos.location.postcode}`)
    div1.appendChild(textnodeinfo21);
    info2.appendChild(div1);
    
    let div2 = document.createElement("div");
    let textnodeinfo22 = document.createTextNode(`Direccion: ${datos.location.street.name} ${datos.location.street.number}`)
    div2.appendChild(textnodeinfo22);
    info2.appendChild(div2);
    
    let div3 = document.createElement("div");
    let textnodeinfo23 = document.createTextNode(`celular: ${datos.cell}`)
    div3.appendChild(textnodeinfo23);
    info2.appendChild(div3);

 });
