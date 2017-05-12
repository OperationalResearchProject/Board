$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            number: '1',
            fitness: 500,
            solution: '1-2-3-4'
        },{
            number: '2',
            fitness: 150,
            solution: '1-2-3-4'
        },{
            number: '3',
            fitness: 100,
            solution: '1-2-3-4'
        },{
            number: '3',
            fitness: 70,
            solution: '1-2-3-4'
        },{
            number: '4',
            fitness: 50,
            solution: '1-2-3-4'
        },{
            number: '5',
            fitness: 40,
            solution: '1-2-3-4'
        },{
            number: '6',
            fitness: 35,
            solution: '1-2-3-4'
        },{
            number: '7',
            fitness: 33,
            solution: '1-2-3-4'
        },{
            number: '8',
            fitness: 29,
            solution: '1-2-3-4'
        }

        ],
        xkey: 'number',
        ykeys: ['fitness', 'solution'],
        labels: ['fitness', 'solution'],
        parseTime: false
    });

});
