var tabItems = document.querySelectorAll(".tab-item");
var tabContentItems = document.querySelectorAll(".tab-content-item");

// Select tab content item
function selectItem()
{
    removBorder();
    removShow();

    // Add border to current tab
    this.classList.add('tab-border');

    // Grab content item from DOM
    let tabContentItems = document.querySelector(`#${this.id}-content`);
    tabContentItems.classList.add('show');
}

function removBorder()
{
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removShow()
{
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener( "click", selectItem));

