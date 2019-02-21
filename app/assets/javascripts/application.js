
//= require jquery
//= require rails-ujs
//= require turbolinks
//= require foundation
//= require semantic-ui
//= require spree/frontend
//= require_tree .
$(document).on('turbolinks:load', function () {

    $('select.ui.dropdown').dropdown();
    //$('html').css('overflow-x', 'hidden')
    $(function () { $(document).foundation(); });
});