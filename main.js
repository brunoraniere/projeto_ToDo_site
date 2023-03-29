$(document).ready(function(){
    $('#button-add').click(function(){

        console.log('teste');
        const nomeTarefa = $('#name-task').val();
        const novaTarefa = $('<li></li>');
        $(`<p class="p-list">${nomeTarefa}</p>`).appendTo(novaTarefa);

        $(novaTarefa).appendTo('ul');

        $('#name-task').val('');
    });

    $(document).on('click', '.p-list', function(){
        $(this).toggleClass('risco');
    })

})