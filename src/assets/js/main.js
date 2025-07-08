export function Theme() {
  return {
    isDarkMode: false,
    toggleTheme() {
      if (this.isDarkMode) {
        document.documentElement.classList.remove("dark");
        document.documentElement.style.colorScheme = "light";

        // find all iframes and remove dark class from html
        const iframes = document.querySelectorAll("iframe");
        iframes.forEach((iframe) => {
          const iframeDoc =
            iframe.contentDocument || iframe.contentWindow.document;
          if (iframeDoc) {
            iframeDoc.documentElement.classList.remove("dark");
          }
        });

        // update local storage
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        document.documentElement.style.colorScheme = "dark";

        // find all iframes and remove dark class from html
        const iframes = document.querySelectorAll("iframe");
        iframes.forEach((iframe) => {
          const iframeDoc =
            iframe.contentDocument || iframe.contentWindow.document;
          if (iframeDoc) {
            iframeDoc.documentElement.classList.add("dark");
          }
        });

        // update local storage
        localStorage.setItem("color-theme", "dark");
      }
      this.isDarkMode = !this.isDarkMode;
    },
    init() {
      let theme = localStorage.getItem("color-theme") || "dark";
      this.isDarkMode = theme === "dark";
      this.isDarkMode = !this.isDarkMode; // Invert the value so the toggle works correctly
      this.toggleTheme();
    },
  };
}
