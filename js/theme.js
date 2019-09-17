; (function ($) {
    "use strict"

    function mailChimp() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();


})(jQuery)