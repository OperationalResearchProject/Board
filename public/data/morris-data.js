$(function() {

    $('.rowTransac .loadable').click(function () {
        $('#morris-area-chart').html("");
        $('#graph-title-transac').html($(this).parent().attr("transac"));
        var data = [];
        var i = 0;
        $('.loading').removeClass("loading-disable");
        $.ajax({
            url: '/fitnesses/'+$(this).parent().attr("transac"),
            type: 'GET',
            dataType: 'json',
            success: function (result, status) {
                result.forEach(function (f) {
                    data[i] = {"number": i, "fitness": f.fitness}
                    i = i + 1;
                });
                Morris.Line({
                    element: 'morris-area-chart',
                    data: data,
                    xkey: 'number',
                    ykeys: ['fitness'],
                    labels: ['fitness'],
                    parseTime: false,
                    pointSize: 0,
                    lineWidth: 5,
                    ymax: data[0].fitness
                });
                $('.loading').addClass("loading-disable");
            }
        });


    });

});
