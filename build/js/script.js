jQuery(document).ready(function(i){i(".form__item").each(function(t,e){(i(this).has(".far")||i(this).has(".fas"))&&(i(this).children("input").css("paddingRight","48px"),i(this).children("select").css("paddingRight","48px"))}),i("input, select").on("focus",function(t){i(this).closest(".form__item, .card__item").find("p, i").css("color","#353535")}),i("input, select").on("blur",function(t){i(this).closest(".form__item, .card__item").find("p, i").css("color","#A7A7A7")}),i(".form__logo input[type=file]").change(function(t){i(this).parent(".form__logo").text("Change logo")}),i(".card-number-input").on("input",function(t){4==i(this).val().length&&(console.log("4"),i(this).next(".card-number-input").focus())}),i("div[class^=shipping-payment__method]").on("click",function(t){t.preventDefault(),i("div[class^=shipping-payment__method]").each(function(t,e){i(this).removeClass("shipping-payment__method-active")}),i(this).addClass("shipping-payment__method-active")}),i(".shipping__methods-item").on("click",function(t){t.preventDefault();var e="#"+i(this).attr("id")+"-tab";i(".shipping__methods-item").each(function(t,e){i(this).removeClass("shipping__methods-item--active")}),i(this).addClass("shipping__methods-item--active"),i(".shipping__details").each(function(t,e){i(this).removeClass("shipping__details-active")}),i(e).addClass("shipping__details-active")})});