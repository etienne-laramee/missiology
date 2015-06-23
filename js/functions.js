$("document").ready(function($) {
	var nav = $('.nav-container');
	
	$(window).scroll(function() {
		if($(this).scrollTop() > 300) {
			nav.addClass("f-nav-container");
			//nav.removeClass('nav-container');
		} else {
			nav.removeClass("f-nav-container");
			//nav.addClass('nav-container');
		}
	});
});

// Main menu tabs
function nav_home()
{
	// Set the nav tab active
	highlightMainTab('home');
	
	// Set the sidebar
	setSidebar('home');
	
	// Display content
	
	return false;
}
function nav_theChair()
{
	// Set the nav tab active
	highlightMainTab('the-chair');
	
	// Set the sidebar
	setSidebar('the-chair');
	
	// Display content
	
	return false;
}
function nav_fundRaising()
{
	// Set the nav tab active
	highlightMainTab('fund-raising');
	
	// Set the sidebar
	setSidebar('fund-raising');
	
	// Display content
	
	return false;
}
function nav_endorsements()
{
	// Set the nav tab active
	highlightMainTab('endorsements');
	
	// Set the sidebar
	setSidebar('endorsements');
	
	// Display content
	
	return false;
}
function nav_brochures()
{
	// Set the nav tab active
	highlightMainTab('brochures');
	
	// Set the sidebar
	setSidebar('brochures');
	
	// Display content
	
	return false;
}
function nav_contactUs()
{
	// Set the nav tab active
	highlightMainTab('contact-us');
	
	// Set the sidebar
	setSidebar('contact-us');
	
	// Display content
	
	return false;
}
// /Main menu tabs

// Side Bar tabs
function side_theObjectives(tab)
{
	
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
	return false;
}

function highlightSideTab(tab)
{
	
	// UnHighlight all tabs
	
	// Highlight only selected tab
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