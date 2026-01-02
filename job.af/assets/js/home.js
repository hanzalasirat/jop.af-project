//  // Function to handle sidebar scroll behavior
//         function handleSidebarScroll() {
//             const leftSidebar = document.querySelector('.sticky-left-sidebar');
//             const rightSidebar = document.querySelector('.sticky-right-sidebar');
//             const mainContent = document.querySelector('.scrollable-main');
            
//             if (window.innerWidth > 991.98) {
//                 // Enable sticky behavior for desktop
//                 leftSidebar.style.position = 'sticky';
//                 rightSidebar.style.position = 'sticky';
                
//                 // Calculate max height based on viewport
//                 const topOffset = 20; // Same as CSS top value
//                 const maxHeight = `calc(100vh - ${topOffset + 20}px)`;
                
//                 leftSidebar.style.maxHeight = maxHeight;
//                 rightSidebar.style.maxHeight = maxHeight;
//                 leftSidebar.style.overflowY = 'auto';
//                 rightSidebar.style.overflowY = 'auto';
                
//                 // Make main content scrollable
//                 mainContent.style.overflowY = 'visible';
//             } else {
//                 // Disable sticky behavior for mobile
//                 leftSidebar.style.position = 'relative';
//                 rightSidebar.style.position = 'relative';
//                 leftSidebar.style.maxHeight = 'none';
//                 rightSidebar.style.maxHeight = 'none';
//                 leftSidebar.style.overflowY = 'visible';
//                 rightSidebar.style.overflowY = 'visible';
//             }
//         }
        
//         // Initialize on load
//         document.addEventListener('DOMContentLoaded', handleSidebarScroll);
        
//         // Update on resize
//         window.addEventListener('resize', handleSidebarScroll);
        
//         // Update on scroll (for fine-tuning)
//         window.addEventListener('scroll', function() {
//             if (window.innerWidth > 991.98) {
//                 const sidebars = document.querySelectorAll('.sticky-left-sidebar, .sticky-right-sidebar');
//                 const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
//                 sidebars.forEach(sidebar => {
//                     if (scrollTop > 100) {
//                         sidebar.style.top = '10px';
//                     } else {
//                         sidebar.style.top = '20px';
//                     }
//                 });
//             }
//         });