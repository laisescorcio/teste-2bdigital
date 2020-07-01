var global = {
  init: function () {
    this.listeners();
  },
  listeners: function () {
    $(".contact-submit-button").click(function () {
      global.validateEmail();
      global.newsletterSend();
    });

    $(".contact-submit-input").focus(function () {
      $(".contact-submit-input-validation.erro").hide();
      $(".contact-submit-input").css("border", "1px solid #BDBDBD");
    });
  },

  validateEmail: function () {
    //atribuindo o valor do campo
    var sEmail = $(".contact-submit-input").val();
    // filtros
    var emailFilter = /^.+@.+\..{2,}$/;
    var illegalChars = /[\(\)\<\>\,\;\:\\\/\"\[\]]/;
    // condição
    if (!emailFilter.test(sEmail) || sEmail.match(illegalChars)) {
      $(".contact-submit-input").css("border", "1px solid #D7182A");
      $(".contact-submit-input-validation")
        .show()
        .addClass("erro")
        .text("Preencha com um e-mail válido");
      return false;
    }
    $("contact-submit-input-validation").hide();
    return true;
  },

  newsletterSend: function () {
    if (global.validateEmail()) {
      $(".contact-submit").css("display", "none");
      $(".contact-title").css("display", "none");
      $(".contact-text").css("display", "none");
      $(".contact-sent").css("display", "flex");
    }
  },
};

$(document).ready(function () {
  global.init();
});
