$(document).ready(function() {
    $("#check").click(function() {
        if ($("#check").is(":checked", true))
            $("#cert").show();
    })
})