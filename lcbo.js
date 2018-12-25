const lcboApp = {};

lcboApp.searchProduct=function(product){
    $.ajax({
        url: "http://lcboapi.com/products/?q="+ product,
        dataType: 'jsonp'
    })
    .done(function(data) {
        lcboApp.displayProduct(data)
    });
}

lcboApp.displayProduct=function(display){
    $('.results').text('')
    display.result.forEach(element => {
        $('.results').append(
            '<div>'+element.name+'</div>'
            )
    })
}

$(function(){
    $('.submit').on('click', function(){
    let input = $('#search').val()
        console.log(input);
        lcboApp.searchProduct(input)

    })

})