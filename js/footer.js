            document.addEventListener('DOMContentLoaded', function() {

                matchHeight('.row-1 .match-height');
                matchHeight('.row-2 .match-height');
                matchHeight('.row-3 .match-height');
                matchHeight('.row-4 .match-height');

                //MATCH HEIGHT OF ELEMENTS
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

                $(window).on("load resize", function() {
                    if(window.innerWidth < 768) {
                        $('footer .row-3 .main-heading').addClass('link-toggle');
                    } else {
                        $('footer .row-3 .main-heading').removeClass('link-toggle');
                    }
                });

                $('footer .row-3').on("click", ".link-toggle", function() {
                    $(this).siblings('.nav-link-container').slideToggle();
                    $(this).find('.fa-chevron-right').toggle();
		            $(this).find('.fa-chevron-down').toggle();
                });

                $('footer .copyright .disclaimer-action .read-more, footer .copyright .disclaimer-action .read-less').click(function() {
                    $('footer .copyright .disclaimer-action .read-more').toggle();
                    $('footer .copyright .disclaimer-action .read-less').toggle();
                    $('footer .copyright .disclaimer-info').slideToggle();
                });
                
            });