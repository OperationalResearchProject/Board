$(function() {

    $('.rowTransac').click(function () {
        $('#morris-area-chart').html("");
        $('#graph-title-transac').html($(this).attr("transac"));
        var data = [];
        var i = 0;
        $.ajax({
            url: '/fitnesses/'+$(this).attr("transac"),
            type: 'GET',
            dataType: 'json',
            success: function (result, status) {
                result.forEach(function (f) {
                    data[i] = {"number": i, "fitness": f.fitness}
                    i = i + 1;
                });
                Morris.Area({
                    element: 'morris-area-chart',
                    data: data,
                    xkey: 'number',
                    ykeys: ['fitness'],
                    labels: ['fitness'],
                    parseTime: false
                });
            }
        });


    });

});
