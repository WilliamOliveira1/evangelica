    //Show a modal when the page loads
    $("#fotos").click(function() {
        $('#myModal').modal('show');
    });

    $("#videos").click(function() {
        $('#myModal1').modal('show');
    });

    if (window.innerWidth < 645) {
        $('#fotos').removeClass('invisible');
    }