function openModalProjects(pNum) {
    // Modals open
    $('#staticBackdrop').modal('show');
    switch (pNum) {
        case 'p1':
            $('#modalBody').html(
                '<div class="text-center">' +
                '<iframe src="telefon.html" width="1040px" height="840px" allowfullscreen></iframe>' +
                '</div>'
            );
            break;

            case 'p2':
                $('#modalBody').html(
                    '<div class="text-center">' +
                    '<iframe src="havadurumu.html" width="1040px" height="840px" allowfullscreen></iframe>' +
                    '</div>'
                );
                break;

        case 'p3':
            $('#modalBody').html(
                '<div class="text-center">' +
                '<iframe src="yazboz.html" width="1040px" height="840px" allowfullscreen></iframe>' +
                '</div>'
            );
            break;

        case 'p4':
            $('#modalBody').html(
                '<div class="text-center">' +
                '<iframe src="coin2.html" width="1040px" height="840px" allowfullscreen></iframe>' +
                '</div>'
            );
            break;

        default:
            swal("Error!", "Error in Open Modal Function", "error");
            break;
    }
}