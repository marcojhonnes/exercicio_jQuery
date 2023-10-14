$(document).ready(function () {
    $("#formLista").submit(function (e) {
        e.preventDefault();
        const taskText = $("#novaTarefa").val();
        if (taskText) {
            const listItem = $("<li>").text(taskText);
            $("#listaTarefa").append(listItem);
            $("#novaTarefa").val("");
        }
    });

    $("#listaTarefa").on("click", "li", function () {
        $(this).toggleClass("completa");
    });
});
