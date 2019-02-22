$(document).on('turbolinks:load',function () {
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
