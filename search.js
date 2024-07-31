document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const blogContent = document.querySelector(".disblog");
    const originalContent = blogContent.innerHTML; // Store the original content

    function search() {
        const query = searchInput.value.toLowerCase().trim();

        // Reset to original content before applying new highlights
        blogContent.innerHTML = originalContent;

        // Only proceed if query is not empty
        if (query) {
            const regex = new RegExp(query, "gi");
            const highlightedContent = blogContent.innerHTML.replace(regex, match => `<span class="highlight">${match}</span>`);
            blogContent.innerHTML = highlightedContent;

            // Scroll to the first highlighted result
            const firstHighlight = document.querySelector(".highlight");
            if (firstHighlight) {
                firstHighlight.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }
    }

    function toggleSearch() {
        if (searchInput.classList.contains("visible")) {
            search();
        } else {
            searchInput.classList.add("visible");
            searchInput.focus();
        }
    }

    // Event listener for Enter key on search input
    searchInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            search();
        }
    });

    window.search = search;
    window.toggleSearch = toggleSearch;
});