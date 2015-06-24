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
function main_nav(tabName)
{
	// Set the nav tab active
	highlightMainTab(tabName);
	
	// Set the sidebar
	setSidebar(tabName);
	
}
// /Main menu tabs

// Side Bar tabs
function side_nab(tabName)
{
	hightlightSideTab(tabName);
	
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