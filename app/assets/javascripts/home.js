$(document).on('turbolinks:load',function () {
    new TypeIt('.type-it', {
        strings: ["Hello!","We", "Are", "\"YONKERS\""],
        speed: 89,
        breakLines: false,
        waitUntilVisible: true,
    }).go();
})