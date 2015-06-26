$("document").ready(function($) {
	var nav = $('.nav-container');
	
	$(window).scroll(function() {
		var navHeight = 300;
		if($(this).scrollTop() > navHeight) {
			nav.addClass("f-nav-container");
			//nav.removeClass('nav-container');
		} else {
			nav.removeClass("f-nav-container");
			//nav.addClass('nav-container');
		}
	});
	
	// Select default tabs and content
	main_nav('home');
	side_nav('the-objectives');
});

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
		relatedTabs[i].style.display = "block";
	}
}

function setContent(tabName)
{
	// Hide all content
	$(".primary-content").children().css('display', 'none');
	 
	// Display only related content
	$(".content-" + tabName).css('display', 'block');
}