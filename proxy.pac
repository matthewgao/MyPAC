var withProxy = 'PROXY 10.103.240.200:3128; SOCKS 10.203.15.52:3128';

var noProxy = 'DIRECT';

var targetWithProxy = [ 'google.com',
                        'facebook.com',
                        'twitter.com',
                        'youtube.com',
                        'inoreader.com',
                        'twimg.com',
                        'fbcdn.net',
                        'ytimg.com',
                        'ggpht.com',
                        'gstatic.com',
                        'googleapis.com',
                        'googleusercontent.com',
                        'googlevideo.com'
                    ];

function generate_regx_proxy_list(target_list){
    var formatted_target_list = [];
    target_list.forEach(function(item){
        wildcard = '*' + item + '*';
        formatted_target_list.push(wildcard);
    });
    return formatted_target_list;
}

var target = generate_regx_proxy_list(targetWithProxy);

function FindProxyForURL(url, host){

    for(var i=0; i<target.length; i++){
        // Noway to print debug log here.
        // console.log(target[i]);
        if(shExpMatch(url, target[i])){
            return withProxy;
        }
    } 

    return noProxy;
}
