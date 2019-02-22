$(document).on('turbolinks:load',function () {
     $('select.ui.dropdown').dropdown();
    //$('html').css('overflow-x', 'hidden')
    $(function () { $(document).foundation(); });
    new TypeIt('#medium.type-it', {
        strings: ["Hello!","We", "Are", "\"YONKERS\""],
        speed: 89,
        breakLines: false,
        waitUntilVisible: true,
    }).go();
    new TypeIt('#small.type-it', {
        strings: ["Hello!","We", "Are", "\"YONKERS\""],
        speed: 89,
        breakLines: false,
        waitUntilVisible: true,
    }).go();
})
