            document.addEventListener('DOMContentLoaded', function() {
                
                // PROMO DRAWER
                $('.promo-drawer-action').click(function() {
                    $(this).children().toggle();
                    $('header .header-promo .promo-drawer').slideToggle();
                });

                // HAMBURGER
                $('header .header-main .hamburger').click(function() {
                    $(this).toggleClass('is-active');
                    $('header .mobile-menu').slideToggle('fast');
                    $('body').toggleClass('overflow-hidden');
                    $('header').toggleClass('overflow-scroll');
                });

                // MOBILE DRAWERS
                $('header .mobile-menu .category-action, header .mobile-menu .sub-category-action').click(function(event) {
                    $(this).find('.fas').toggle();
                    var target = $(event.target);
                    if (!target.is("a")) {
                        $(this).siblings('.category-drawer, .sub-category-drawer').slideToggle();
                    }
                });

                $('header .mobile-nav .mobile-search .fa-search').click(function() {
                    $('header .mobile-search-box').slideToggle('fast');
                });

                // MATCH HEIGHT OF ELEMENTS
                function matchHeight(element) {
                    $(window).on("load resize", function() {
                        var divHeight = 0;
                        $(element).css('height','auto');
                        $(element).each(function() {
                            if($(this).height() > divHeight) {
                                divHeight = $(this).height();
                            }
                        });
                        if(window.innerWidth >= 768) {
                            $(element).height(divHeight);
                        } else {
                            $(element).css('height','auto');
                        }
                    });
                }
                
            });