

     document.querySelector('#boton').addEventListener("click",traerdatos);

     function traerdatos(){
 
         const xhttp = new XMLHttpRequest();
 
         xhttp.open('GET','entrada.json', true);
                           //ruta del archivo  
         xhttp.send();

         xhttp.onreadystatechange = function(){
            
            if(this.readyState == 4 && this.status == 200){
                
                document.querySelector('#res').innerHTML = this.responseText;

                let datos = JSON.parse(this.responseText);

                let res = document.querySelector('#res');

                res.innerHTML='';

                                for (let item of datos){
                                    
                                    res.innerHTML += `                                    
                                                        <tr>
                                                            <td>${item.cliente}</td>
                                                            <td>${item.fecha}</td>
                                                            <td>${item.folio}</td>
                                                            <td>${item.cantidad}</td>
                                                            <td>${item.unidad}</td>
                                                            <td>${item.nombre}</td>
                                                            <td>${item.descuento}</td>
                                                            <td>${item.iva}</td>
                                                            <td>${item.cu}</td>
                                                            <td>${item.total}</td>
                                                            <td>${item.pago}</td>
                                                            
                                                        </tr> 
                                                      `

                                }

            }
        }
     }



