function item(url, image, imageWidth, imageHeight, alt, special) {
    this.url = url;
    this.image = image;
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;
    this.alt = alt;
    this.special = special;
}

var items = [
    new item('https://www.facebook.com/jordan.zimmerman', 'FB-f-Logo__blue_144.png', 144, 144, 'Facebook'),
    new item('https://www.linkedin.com/in/jordanzimmerman', 'Logo-2C-41px-TM.png', 170, 41, 'LinkedIn'),
    new item('https://github.com/randgalt', 'GitHub_Logo.png', 160, 66, 'GitHub'),
    new item('https://www.twitter.com/randgalt', 'TwitterLogo_55acee.png', 166, 166, 'Twitter'),
    new item('http://www.slideshare.net/randgalt', 'SS_Logo_Desktop_Black.png', 128, 34, 'Slideshare'),
    new item('https://www.facebook.com/ritahkan', 'rita.png', 101, 136, 'Rita Kan'),
    new item('https://www.facebook.com/bobby.zimmerman.716', 'doodles.jpg', 170, 128, 'Bobby Doodle'),
    new item('https://soundcloud.com/jordanzimmerman', 'sc_st_gradient_152x96.png', 152, 96, 'SoundCloud'),
    new item('http://aisallc.com', 'aisascaled.png', 165, 147, 'Aisa Software'),
    new item(null, null, 0, 0, 'Email', 'email'),
    new item('http://curator.apache.org', 'curator.png', 150, 56, 'Apache Curator'),
    new item('http://nirmataoss.github.io/workflow', 'nirmata.jpg', 100, 100, 'Nirmata Workflow'),
    new item('http://soabase.io', 'soabase.png', 125, 125, 'Soabase'),
    new item('http://stackoverflow.com/users/2048051/randgalt', 'stackoverflow.png', 158, 158, 'Stack Overflow'),
    new item('http://www.ubica.global', 'ubica.png', 168, 100, 'Ubica'),
    new item('http://nirmata.com/company/team/', 'nirmata-title.jpg', 164, 88, 'Nirmata'),
    new item('https://rule1.quora.com', 'Quora-rule1.png', 170, 113, 'Quora - Rule 1'),
    new item('https://aisa.quora.com', 'Quora-aisa.png', 170, 113, 'Quora - A is A'),
    new item('http://www.google.com/patents/US7197475', 'patent.png', 125, 156, 'US Patent 7197475'),
    new item('http://hadoopmag.com/curator-and-exhibitor-a-better-way-to-use-and-manage-apache-zookeeper/', 'sdj.png', 160, 39, 'Curator and Exhibitor: A better way to use and manage Apache ZooKeeper'),
    new item('https://www.facebook.com/jordan.zimmerman.drummer?ref=bookmarks', 'drums.jpg', 140, 165, "I'm a drummer too!"),
    new item('olivegarden.html', 'olivegarden.jpg', 151, 115, 'Olive Garden Dish Name Generator'),
];

var ITEMS_PER_ROW = 4;
var ROW_CLASS = 'col-md-' + (12 / ITEMS_PER_ROW);

function buildItems() {
    var content = '';
    for ( var i in items ) {
        var index = parseInt(i);
        var item = items[i];
        if ( (index % ITEMS_PER_ROW) == 0 ) {
            content = content + '<div class="row">\n';
        }

        content = content + '<div class="' + ROW_CLASS + '">\n';
        var tooltipAlign = (i < (2 * ITEMS_PER_ROW)) ? 'bottom' : 'top';
        var tooltip = 'data-toggle="tooltip" data-placement="' + tooltipAlign + '" title="' + item.alt + '"';
        var link = '';
        if ( item.special === 'email' ) {
            link = '<a ' + tooltip + ' id="jzenvelope-a" href="#" class="jzthumb thumbnail"><span id="jzenvelope" class="glyphicon glyphicon-envelope"></span></a>\n';
        } else {
            link = '<a ' + tooltip + ' href="' + item.url + '" class="jzthumb thumbnail"><img src="assets/' + item.image + '" width="' + item.imageWidth + '" height="' + item.imageHeight + '" alt="' + item.alt + '"></a>\n';
        }
        content = content + link + '</div>\n';

        if ( (((index + 1) % ITEMS_PER_ROW) == 0) || ((index + 1) == items.length))  {
            content = content + '</div>\n';
        }
    }
    $('#items').html(content);
}

$(function(){
    buildItems();

    var m2 = 'mail';
    $('#copyright').text(new Date().getFullYear());
    m2 = m2 + 'to:';
    m2 = m2 + 'jordan';
    m2 = m2 + '@jordanzimmerman.com';
    $('#jzenvelope-a').attr('href', m2);   
    
     $("[data-toggle='tooltip']").tooltip();  
});
