$(document).on('turbolinks:load',function () {
     $('select.ui.dropdown').dropdown();
    //$('html').css('overflow-x', 'hidden')
    $(function () { $(document).foundation(); });
    new TypeIt('#medium.type-it', {
        strings: ["A thought.","An energy.", "A reality.", "YONKERS"],
        speed: 65,
        breakLines: false,
        waitUntilVisible: true,
    }).go();
    new TypeIt('#small.type-it', {
        strings: ["A thought.","An energy.", "A reality.", "YONKERS"],
        speed: 65,
        breakLines: false,
        waitUntilVisible: true,
    }).go();
})
