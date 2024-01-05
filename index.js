function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarButton = document.querySelector('.hamburger button p');

    // Check if the sidebar is currently hidden
    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
      // If it's hidden, show the sidebar and change the button content
      sidebar.style.display = 'block';
      sidebarButton.innerHTML = '&#9932;'; // Change to the new character
    } else {
      // If it's visible, hide the sidebar and change the button content back
      sidebar.style.display = 'none';
      sidebarButton.innerHTML = '&#9776;'; // Revert to the original character
    }
  }