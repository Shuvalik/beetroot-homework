import getToken from "./telegram_token.js";
$(function () {
    /*variables */
    const headerOffsetTop = $('.header').offset().top;
    /* funstions defenition */
    function setClassHeader() {
        let header = $('.header');
        ($(this).scrollTop() > headerOffsetTop) ? header.addClass('sticky') : header.removeClass('sticky');
        
    };
    function getNews() {
        $.ajax({
            url: 'data/news.json',
            type: 'get',
            dataType: 'json',
            success: function(data) {
                data.forEach(item => {
                    let pubdate = new Date(item.pubdate);
                    const htmlStr = {
                        mainDiv: $("<div>", {"class": "item"}),
                        imgHolder: $("<div>", {"class": "imgHolder"}),
                        linkNews: $("<a>", {"href": item.link, "class": "maskLink"}),
                        imgNews: $("<img>", {"src": item.image, "alt": "image news"}),
                        divTextHolder: $("<div>", {"class": "item-text"}),
                        divTitleHolder: $("<div>", {"class": "title-box"}),
                        titleNews: $("<h4>").text(item.title),
                        textNews: $("<p>").text(item.text),
                        divAuthorHolder: $("<div>", {"class": "author-info"}),
                        imgAuthor: $("<img>", {"src": item["author-image"], "alt": "image author news"}),
                        textAuthorHolder: $("<p>"),
                        linkAuthor: $("<a>", {"href": item["author-link"], "rel": "author"}).text(item["author-name"]),
                        time: $("<time>", {"pubdate" : "", "datetime": item.pubdate}).text(`${pubdate.getDate()} ${pubdate.toLocaleString("en-US", {month: 'short'})} ${pubdate.getFullYear()}`),
                        outputHTML: function(){
                            this.mainDiv.append(this.imgHolder);
                                this.imgHolder.append(this.linkNews.clone());
                                this.imgHolder.append(this.imgNews);
                            this.mainDiv.append(this.divTextHolder);
                                this.divTextHolder.append(this.divTitleHolder);
                                    this.divTitleHolder.append(this.linkNews);
                                    this.divTitleHolder.append(this.titleNews);
                                this.divTextHolder.append(this.textNews);
                            this.mainDiv.append(this.divAuthorHolder);
                                this.divAuthorHolder.append(this.imgAuthor);
                                this.divAuthorHolder.append(this.textAuthorHolder);
                                    this.textAuthorHolder.append(this.linkAuthor);
                                    this.textAuthorHolder.append(this.time);
                        }
                    }
                    htmlStr.outputHTML();
                    $('#latest-news .sliderHolder').append(htmlStr.mainDiv);
                });
            },
            error: function(err) {
                console.error('Error loading news!');
            },
            complete: function() {
                    const prevArrow = `<button type="button" class="prev-btn"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle opacity="0.5" cx="20" cy="20" r="19.5" stroke="white"/>
                                <path d="M21.8984 17.25C21.8984 17.1797 21.8672 17.1172 21.8203 17.0703L21.4297 16.6797C21.3828 16.6328 21.3125 16.6016 21.25 16.6016C21.1875 16.6016 21.1172 16.6328 21.0703 16.6797L17.4297 20.3203C17.3828 20.3672 17.3516 20.4375 17.3516 20.5C17.3516 20.5625 17.3828 20.6328 17.4297 20.6797L21.0703 24.3203C21.1172 24.3672 21.1875 24.3984 21.25 24.3984C21.3125 24.3984 21.3828 24.3672 21.4297 24.3203L21.8203 23.9297C21.8672 23.8828 21.8984 23.8125 21.8984 23.75C21.8984 23.6875 21.8672 23.6172 21.8203 23.5703L18.75 20.5L21.8203 17.4297C21.8672 17.3828 21.8984 17.3125 21.8984 17.25Z" fill="white"/>
                                </svg>
                                </button>`;
                    const nextArrow = `<button type="button" class="next-btn"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle opacity="0.5" cx="20" cy="20" r="19.5" stroke="white"/>
                                <path d="M22.6484 20.5C22.6484 20.4375 22.6172 20.3672 22.5703 20.3203L18.9297 16.6797C18.8828 16.6328 18.8125 16.6016 18.75 16.6016C18.6875 16.6016 18.6172 16.6328 18.5703 16.6797L18.1797 17.0703C18.1328 17.1172 18.1016 17.1875 18.1016 17.25C18.1016 17.3125 18.1328 17.3828 18.1797 17.4297L21.25 20.5L18.1797 23.5703C18.1328 23.6172 18.1016 23.6875 18.1016 23.75C18.1016 23.8203 18.1328 23.8828 18.1797 23.9297L18.5703 24.3203C18.6172 24.3672 18.6875 24.3984 18.75 24.3984C18.8125 24.3984 18.8828 24.3672 18.9297 24.3203L22.5703 20.6797C22.6172 20.6328 22.6484 20.5625 22.6484 20.5Z" fill="white"/>
                                </svg></button>`;
                $('.sliderHolder').slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    prevArrow: prevArrow,
                    nextArrow: nextArrow,
                    responsive: [
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 2
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    arrows: false,
                                    centerMode: true,
                                    slidesToShow: 1
                                }
                            }
                        ]
                });
            }
        })
    }

    async function sendMessage(msg) {
        let apiToken = getToken();
        let chatId = "-1001738000762";
        let urlString = `https://api.telegram.org/bot${apiToken}/sendMessage`;
        $.ajax({
            url: urlString,
            type: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            data: JSON.stringify({
                chat_id: chatId,
                text: msg,
                parse_mode: "HTML"
            }),
            success: function(){toast.success('Your data was successfully sent!')},
            error:  function(){toast.warning('Form submition faild!')}
        })
    }

    

    /* map init */
    function initMap() {
        const map = L.map('map').setView([49.409091, 26.9476096], 19);
        L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        const greenIcon = L.icon({
            iconUrl: '../assets/images/pin.svg',
            iconSize:     [106, 106], 
            iconAnchor:   [100, 100], 
        });
        L.marker([49.40939, 26.94822], {icon: greenIcon, title: 'сама смачна кава на районі)'}).addTo(map)
    }

    /*call functions */
    setClassHeader();

    $('.mainSlider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    getNews();

    lightGallery(document.getElementById('lightgallery'), {
        plugins: [lgZoom, lgThumbnail],
        licenseKey: 'your_license_key',
        speed: 500
    });

    new WOW().init();

    let lazyLoadInstance = new LazyLoad();

    /* events defenition */
    $(window).on('scroll', function() {
        setClassHeader();
    });
    $('a[data-scroll]').on('click', function(e) {
        e.preventDefault();
        const href = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(href).offset().top }, 1000);
    });
    $('#map_link').on('click', function () {
        $('#map').html('');
        initMap();
    })
    $('input').on('focus', function() {
        $(this).prev('label').hide();
    })
    $('input').on('focusout', function() {
        if (!($(this).val())) {
            $(this).prev('label').show();
        }
    });
    $('form').on('submit', function(e){
        e.preventDefault();
        let email = $(this).find('#email').val(),
            name = $(this).find('#name').val(),
            msg = `
            <b> name: </b> ${email}
<b> email: </b> ${name}`;
        sendMessage(msg, (() => {
            $(this)[0].reset();
            $(this).find('label').show();
        })());
    });
    $('#hamburger').on('click', function(){
        $(this).toggleClass('is-active');
        $('#mobMainMenu').slideToggle();
        $('#mobMainMenu').toggleClass('open');
    });
    $('#mobMainMenu a, #mainMenu a').on('click', function(e){
        e.preventDefault();
        let id = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(id).offset().top }, 1000);
        if ($(this).parents('#mobMainMenu').length) {
            $('#hamburger').trigger('click');
        };
    });
});