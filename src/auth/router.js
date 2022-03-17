

const routes = {
    'GET/': function(c){
        return 'ok';
    }
}


const router = function(method, path) {

    return routes[`${method}${path}`]
}

exports.router = router;