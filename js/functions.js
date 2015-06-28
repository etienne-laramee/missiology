var defContentMargin = 30;

$("document").ready(function($) {
	$(window).scroll(function() {
		fixNav();
		fixFooter();
	});
	
	// Select default tabs and content
	main_nav('home');
	side_nav('the-objectives');
	
});

function fixNav()
{
	var nav = $('.nav-container');
	var scrollTop = $(window).scrollTop();
	
	// Get nav height to fix main-content margin once clipped since position:fixed; is out
	// of the page's flow.
	var navHeight = ($('.nav-container').outerHeight(true));
	var fixedMargin = (navHeight + defContentMargin);
	var content = $('.main-content');
	
	// Get height before clipping nav
	var banner = $('.main-banner');
	var bannerHeight = banner.outerHeight(true);
	
	// If scroll beyond the nav bar, clip it to the top
	if(scrollTop >= bannerHeight) {
		nav.addClass("f-nav-container");
		content.css('margin-top', fixedMargin);
	} else {
		nav.removeClass("f-nav-container");
		content.css('margin-top', defContentMargin);
	}
}

function fixFooter()
{
	var content = $('.main-content');
	var contentBottom = (content.offset().top + content.outerHeight(true));

	var footer = $('.main-footer');
	var footerHeight = footer.outerHeight(false);
	var footerTop = footer.offset().top;
	var footerBottom = (footerTop + footerHeight);
	
	var fixedMargin = (footerHeight + defContentMargin);
	
	// Get bottom of screen
	var bottomScreen = ($(window).scrollTop() + $(window).height());
	
	if((footerBottom <= bottomScreen) && (bottomScreen > contentBottom))
	{
		footer.addClass('f-footer');
		content.css('margin-bottom', fixedMargin);
	}
	else
	{
		footer.removeClass('f-footer');
		content.css('margin-bottom', defContentMargin);
	}
}

// Main menu tabs
function main_nav(tabName)
{
	// Set the nav tab active
	highlightMainTab(tabName);
	
	// Set the sidebar
	setSidebar(tabName);
}
// /Main menu tabs

// Side Bar tabs
function side_nav(tabName)
{
	highlightSideTab(tabName);
	
	setContent(tabName);
	
	fixFooter();
}
// /Side Bar tabs

// Highlight tabs
function highlightMainTab(tab)
{
	// UnHighlight all tabs
	var allTabs = document.getElementsByClassName('main-tab');
	for(i = 0; i < allTabs.length; i++)
	{
		allTabs[i].setAttribute('class', 'main-tab');
	}
	
	// Highlight only selected tab
	var selected = document.getElementById(tab);
	selected.setAttribute('class', 'main-tab main-active');
	
	// Select first side tab by default
	var firstTab = $("." + tab);
	side_nav(firstTab.attr('id'));
}

function highlightSideTab(tab)
{
	// UnHighlight all tabs
	$(".side-tab").removeClass("side-active");
	
	// Highlight only selected tab
	$("#" + tab).addClass('side-active');
}

function setSidebar(tab)
{
	// Hide all tabs
	var sideTabs = document.getElementsByClassName('side-tab');
	for(i = 0; i < sideTabs.length; i++)
	{
		sideTabs[i].style.display = "none";
	}
	// Get related to tab
	var relatedTabs = document.getElementsByClassName(tab);
	for(i = 0; i < relatedTabs.length; i++)
	{
		relatedTabs[i].style.display = "inline-block";
	}
}

function setContent(tabName)
{
	// Hide all content
	$(".primary-content").children().css('display', 'none');
	 
	// Display only related content
	$(".content-" + tabName).css('display', 'block');
}