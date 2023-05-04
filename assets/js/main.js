/**
* Template Name: Arsha - v4.10.0
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
	
  }
  
  
  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate  glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });
  
  
})();

  /**
   * new additional
   */
   
function updateIframes() {
	const select = document.getElementById("mySelect");
	const select2 = document.getElementById("mySelect2");
	const iframe1 = document.getElementById("iframe1");
	const iframe2 = document.getElementById("iframe2");
	const iframe3 = document.getElementById("iframe3");
	const iframe4 = document.getElementById("iframe4");
	const iframe5 = document.getElementById("iframe5");
	const iframe6 = document.getElementById("iframe6");
	const iframe7 = document.getElementById("iframe7");
	const iframe8 = document.getElementById("iframe8");
	const iframe9 = document.getElementById("iframe9");
	const iframe10 = document.getElementById("iframe10");
	const iframe11 = document.getElementById("iframe11");
	const iframe12 = document.getElementById("iframe12");
	const iframe13 = document.getElementById("iframe13");
	const iframe14 = document.getElementById("iframe14");
 
	const selectedValue = select.value;
	const selectedValue2 = select2.value;
	
	let text = select.options[select.selectedIndex].text;
	let text2 = "";
  
	if (select2.value === "mom") {
		text2 = "Pertumbuhan Bulanan";
	} else if (select2.value === "yoy") {
		text2 = "Pertumbuhan Tahunan";
	} else if (select2.value === "index") {
		text2 = "Indeks";
	}
	  
	document.getElementById("minmax").innerHTML = `<b>Minimum dan Maximum ${text2} di ${text}</b>`;


	const url1 = 'charts/ihp/' + selectedValue + '/ihp_' + selectedValue + '_' + selectedValue2 + '.html';
	const url2 = 'charts/ihp/' + selectedValue + '/ihp_' + selectedValue + '_' + 'food_beverage' + '_' + selectedValue2 +'.html';
	const url3 = 'charts/ihp/' + selectedValue + '/ihp_' + selectedValue + '_' + 'alcohol_tobacco' + '_' + selectedValue2 + '.html';
	const url4 = 'charts/ihp/' + selectedValue + '/ihp_' + selectedValue + '_' + 'clothing_footwear' + '_' + selectedValue2 + '.html';
	const url5 = 'charts/ihp/' + selectedValue + '/ihp_' + selectedValue + '_' + 'housing_utilities' + '_' + selectedValue2 + '.html';
	const url6 = 'charts/ihp/' + selectedValue + '/ihp_' + selectedValue + '_' + 'furnishings' + '_' + selectedValue2 + '.html';
	const url7 = 'charts/ihp/' + selectedValue + '/ihp_' + selectedValue + '_' + 'health' + '_' + selectedValue2 + '.html';
	const url8 = 'charts/ihp/' + selectedValue + '/ihp_' + selectedValue + '_' + 'transport' + '_' + selectedValue2 + '.html';
	const url9 = 'charts/ihp/' + selectedValue + '/ihp_' + selectedValue + '_' + 'communication' + '_' + selectedValue2 + '.html';
	const url10 = 'charts/ihp/' + selectedValue + '/ihp_' + selectedValue + '_' + 'recreation_culture' + '_' + selectedValue2 + '.html';
	const url11 = 'charts/ihp/' + selectedValue + '/ihp_' + selectedValue + '_' + 'education' + '_' + selectedValue2 + '.html';
	const url12 = 'charts/ihp/' + selectedValue + '/ihp_' + selectedValue + '_' + 'hospitality' + '_' + selectedValue2 + '.html';
	const url13 = 'charts/ihp/' + selectedValue + '/ihp_' + selectedValue + '_' + 'misc' + '_' + selectedValue2 + '.html';
	const url14 = 'charts/ihp/' + selectedValue + '/ihp_' + selectedValue + '_' + 'table.html';

	iframe1.src = url1;
	iframe2.src = url2;
	iframe3.src = url3;
	iframe4.src = url4;
	iframe5.src = url5;
	iframe6.src = url6;
	iframe7.src = url7;
	iframe8.src = url8;
	iframe9.src = url9;
	iframe10.src = url10;
	iframe11.src = url11;
	iframe12.src = url12;
	iframe13.src = url13;
	iframe14.src = url14;

		}
	document.addEventListener("DOMContentLoaded", () => {
	updateIframes();

	const select = document.getElementById("mySelect");
	select.addEventListener("change", updateIframes);

	const select2 = document.getElementById("mySelect2");
	select2.addEventListener("change", updateIframes);	
					
	
});

function updateIframes2() {

  const select3 = document.getElementById("mySelect3");
  const select4 = document.getElementById("mySelect4");

  const iframe15 = document.getElementById("iframe15");


  const selectedValue3 = select3.value;
  const selectedValue4 = select4.value;

  const url15 = 'charts/ihp/3d/3d_' + selectedValue3 + '_' + selectedValue4 + '.html';


  iframe15.src = url15;
		}

	document.addEventListener("DOMContentLoaded", () => {
	updateIframes2();

  const select3 = document.getElementById("mySelect3");
	select3.addEventListener("change", updateIframes2);

  const select4 = document.getElementById("mySelect4");
	select4.addEventListener("change", updateIframes2);
			
	
});

function updateIframes3() {

  const select5 = document.getElementById("state");
  const select6 = document.getElementById("district");

  const iframe16 = document.getElementById("iframe16");
  const iframe19 = document.getElementById("iframe19");

  const selectedValue5 = select5.value.toLowerCase();
  const selectedValue6 = select6.value.toLowerCase();

  const url16 = 'charts/internal/' + selectedValue5 + '/' + selectedValue5 + '_' + selectedValue6 + '.html';
  const url19 = 'charts/internal/' + selectedValue5 + '/table_' + selectedValue5 + '_' + selectedValue6 + '_premis_item.html';
  
  if (selectedValue5 === 'Pilih Negeri') {
    url16 = 'charts/internal/johor/johor_semua daerah.html';
  }
  
  if (selectedValue5 === 'Pilih Negeri') {
    url19 = 'charts/internal/johor/table_johor_semua daerah_premis_item.html';
  }
  
  if (selectedValue5 === 'malaysia') {
    url19 = 'charts/internal/johor/table_johor_semua daerah_premis_item.html';
  }
 
  iframe16.src = url16;
  iframe19.src = url19;
		}

	document.addEventListener("DOMContentLoaded", () => {
	updateIframes3();

  const select5 = document.getElementById("state");
	select5.addEventListener("change", updateIframes3);

  const select6 = document.getElementById("district");
	select6.addEventListener("change", updateIframes3);
			
	
});

		
////////////




 //////////// datazoom
 
  // Add an event listener to the data zoom filter for the chart in iframe1
var chart1 = document.getElementById("iframe1").contentWindow.echarts.getInstance();
chart1.on("datazoom", function(params) {
    // Retrieve the new zoom range
    var newZoomRange = params.batch[0].start;
    // Use the Pyecharts API to set the same zoom range for the data zoom filter of the charts in the other iframes
    var chart2 = document.getElementById("iframe2").contentWindow.echarts.getInstance();
    chart2.dispatchAction({
        type: 'dataZoom',
        batch: [{
            start: newZoomRange
        }]
    });
    var chart3 = document.getElementById("iframe3").contentWindow.echarts.getInstance();
    chart3.dispatchAction({
        type: 'dataZoom',
        batch: [{
            start: newZoomRange
        }]
    });
    var chart4 = document.getElementById("iframe4").contentWindow.echarts.getInstance();
    chart4.dispatchAction({
        type: 'dataZoom',
        batch: [{
            start: newZoomRange
        }]
    });
});

////////////	

window.onload = function() {
			var iframes = document.getElementsByTagName("iframe");
			for (var i = 0; i < iframes.length; i++) {
				var src = iframes[i].getAttribute("src");
				if (src) {
					var newSrc = src.replace(/ /g, "%20");
					iframes[i].setAttribute("src", newSrc);
				}
			}
		};
		
		
	