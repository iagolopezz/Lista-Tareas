$(document).ready(function(){
    $('#añadir-tarea').click(function(){
        const nombreTarea = $('#nueva-tarea').val().trim();
        if (nombreTarea !== ''){
            const tareaItem = $(`<li class="tarea">
                <span>${nombreTarea}</span>
                <div>
                    <input type="checkbox" id="checkbox">
                    <button class="borrar-boton">❌</button>
                </div>  
            </li>`);
            $('#lista-tarea').prepend(tareaItem);
            $('#nueva-tarea').val('');
        }
    });

    $('#lista-tarea').on('click', '#checkbox', function(){
        $(this).closest('.tarea').toggleClass('realizada');
    });

    $('#lista-tarea').on('click', '.borrar-boton', function(){
        $(this).closest('.tarea').remove();
    });
});
