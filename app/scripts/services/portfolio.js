'use strict';

/**
 * Created by Nirmal Solanki on 7/31/2016.
 * @ngdoc function
 * @name michaelRojasApp.service:PortfolioService
 * @description
 * # PortfolioService
 * service of the michaelRojasApp
 */
angular.module('michaelRojasApp')
    .factory('PortfolioService', function () {
        var portfolio = [
            {
                heading: "Round Icons",
                sub_heading: "Graphic Design",
                image: "images/portfolio/roundicons.png",
                modal_image: "images/portfolio/roundicons-free.png",
                details: ["Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
                    "<strong>Want these icons in this portfolio item sample?</strong>You can download 60 of them for free, courtesy of <a href='https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc'>RoundIcons.com</a>, or you can purchase the 1500 icon set <a href='https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc'>here</a>."]
            }, {
                heading: "Startup Framework",
                sub_heading: "Website Design",
                image: "images/portfolio/startup-framework.png",
                modal_image: "images/portfolio/startup-framework-preview.png",
                details: ["<a href='http://designmodo.com/startup/?u=787'>Startup Framework</a> is a website builder for professionals. Startup Framework contains components and complex blocks (PSD+HTML Bootstrap themes and templates) which can easily be integrated into almost any design. All of these components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions for your future projects.",
                    "<strong>You can preview Startup Framework <a href='http://designmodo.com/startup/?u=787'>here</a>."]
            }, {
                heading: "Treehouse",
                sub_heading: "Website Design",
                image: "images/portfolio/treehouse.png",
                modal_image: "images/portfolio/treehouse-preview.png",
                details: ["Treehouse is a free PSD web template built by <a href='https://www.behance.net/MathavanJaya'>Mathavan Jaya</a>. This is bright and spacious design perfect for people or startup companies looking to showcase their apps or other projects.",
                    "You can download the PSD template in this portfolio sample item at <a href='http://freebiesxpress.com/gallery/treehouse-free-psd-web-template/'>FreebiesXpress.com</a>."]
            }, {
                heading: "Golden",
                sub_heading: "Website Design",
                image: "images/portfolio/golden.png",
                modal_image: "images/portfolio/golden-preview.png",
                details: ["Treehouse is a free PSD web template built by <a href='https://www.behance.net/MathavanJaya'>Mathavan Jaya</a>. This is bright and spacious design perfect for people or startup companies looking to showcase their apps or other projects.",
                    "You can download the PSD template in this portfolio sample item at <a href='http://freebiesxpress.com/gallery/treehouse-free-psd-web-template/'>FreebiesXpress.com</a>."]
            }, {
                heading: "Escape",
                sub_heading: "Website Design",
                image: "images/portfolio/escape.png",
                modal_image: "images/portfolio/escape-preview.png",
                details: ["Treehouse is a free PSD web template built by <a href='https://www.behance.net/MathavanJaya'>Mathavan Jaya</a>. This is bright and spacious design perfect for people or startup companies looking to showcase their apps or other projects.",
                    "You can download the PSD template in this portfolio sample item at <a href='http://freebiesxpress.com/gallery/treehouse-free-psd-web-template/'>FreebiesXpress.com</a>."]
            }, {
                heading: "Dreams",
                sub_heading: "Website Design",
                image: "images/portfolio/dreams.png",
                modal_image: "images/portfolio/dreams-preview.png",
                details: ["Dreams is a free PSD web template built by <a href='https://www.behance.net/MathavanJaya'>Mathavan Jaya</a>. Dreams is a modern one page web template designed for almost any purpose. It’s a beautiful template that’s designed with the Bootstrap framework in mind.",
                    "You can download the PSD template in this portfolio sample item at <a href='http://freebiesxpress.com/gallery/dreams-free-one-page-web-template/'>FreebiesXpress.com</a>."]
            }
        ];
        return {
            list: function () {
                return portfolio;
            }
        };
    });
