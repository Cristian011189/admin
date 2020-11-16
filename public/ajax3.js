
    document.querySelector('#guardar').addEventListener('click', guardarnew);

    function guardarnew(){

        var scliente = document.querySelector('#cli').value,
            sfecha = document.querySelector('#fecha').value,
            sfolio = document.querySelector('#fol').value,
            scantidad = document.querySelector('#can').value,
            suniad = document.querySelector('#uni').value,
            snombre = document.querySelector('#nom').value,
            sdescuento = document.querySelector('#des').value,
            siva = document.querySelector('#iva').value,
            scu = document.querySelector('#cu').value,
            stotal = document.querySelector('#total').value,
            spago = document.querySelector('#pago').value;


            addEntrada(scliente,sfecha,sfolio,scantidad,suniad,snombre,sdescuento,siva,scu,stotal,spago);

    }