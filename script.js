//window.alert("js is working")
var subno=1

$(".add").click(function() {
    //window.alert(subno)
    $(".addsubjectshere").append(
        '<span class="' +
        subno+
        '"><div class="form-group"><label for="sub'+
        subno+
        '">Subject '+
        subno+
        '</label><input type="text" class="form-control" id="sub'+
        subno+
        '" name="sub'+
        subno+
        '"></div><div class="form-group"><label for="marks'+
        subno+
        '">Marks </label><input type="number" class="form-control" id="marks'+
        subno+
        '" name="marks'+
        subno+
        '"></div><span class="remove btn btn-danger">Remove Subject</span></span>'
    );
    subno=subno+1
});

$(".remove").click(function() {
    $(this).parent().remove();
});

// const SubmitFunction = ()=>{

// }