

        var entrada=[];


        function addEntrada(cliente, fehca, folio, cantidad, unidad, nombre, descuento, iva, cu, total, pago){

            var newentrada = {

                cli:cliente, 
                fecha:fehca, 
                fol:folio, 
                can:cantidad, 
                uni:unidad, 
                nom:nombre, 
                des:descuento, 
                iva:iva,
                cu:cu,
                total:total,
                pago:pago,

            };

          
            entrada.push(newentrada);
            localStorageEntrada(entrada);

            function localStorageEntrada(plist){

                localStorage.setItem('entrada.jon', JSON.stringify(plist));

            }
                
            
        
        }
        

