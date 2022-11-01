function initMap() {
    const loc = { lat:13.082680, lng:80.270721};
    const map = new google.maps.Map(document.querySelector('.map')
    , {
        zoom: 14,
        center: loc
    });
    const marker = new google.maps.Marker({position: loc,map});

    
}
//sticky menu  background
window.addEventListener('scroll', function() {
    if (this.window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

//smooth-scrolling
$('#navbar a, .btn').on('clickk', function(event){
    if(this.hash !== ''){
        event.preventDefault();

        const hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});