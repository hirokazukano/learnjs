'use script';
var learnjs = {};

learnjs.probleView = function () {
    return $('<div class="problem-view">').text('Coming soon!');
}

learnjs.showView = function (hash) {
    var routes = {
        '#problem-1' : learnjs.probleView
    };

    var viewFn = routes[hash];

    if (viewFn) {
        $('.view-container').empty().append(viewFn());
    }
}
