
      if (!window.__globalScriptsInit) {
        window.__globalScriptsInit = true;

        // Search trigger
        document.addEventListener("click", function (e) {
          if (e.target.closest("[data-open-search]")) {
            var hiddenInput = document.querySelector(
              "[data-search-root] input",
            );
            if (hiddenInput) hiddenInput.focus({ preventScroll: true });
            document.dispatchEvent(new CustomEvent("open-search"));
          }
        });

        // Contact-Support: open the Intercom messenger when one of
        // our buttons (or any element with [data-intercom-show]) is
        // clicked. The Intercom snippet in <head> queues calls until
        // the widget script finishes loading, so calling show() here
        // is safe even on the first paint.
        //
        // We register an onHide callback so when the user closes the
        // chat, the floating launcher hides itself again — keeps the
        // messenger trigger-driven (no permanent bubble in the corner).
        document.addEventListener("click", function (e) {
          var trigger = e.target.closest("[data-intercom-show]");
          if (!trigger) return;
          e.preventDefault();
          if (typeof window.Intercom !== "function") return;
          window.Intercom("onHide", function () {
            window.Intercom("update", { hide_default_launcher: true });
          });
          window.Intercom("show");
        });
      } // end __globalScriptsInit guard

      (function () {
        function initFadeIns() {
          // Auto-tag sections and direct children of main.
          // `data-no-fade` opts an element out (e.g. the footer wrap —
          // a fading footer reads as a glitch at the end of the page).
          document
            .querySelectorAll('main > section, main > div, [slot="hero"] > *')
            .forEach(function (el) {
              if (
                !el.hasAttribute("data-fade") &&
                !el.hasAttribute("data-no-fade") &&
                !el.classList.contains("fade-in")
              ) {
                el.setAttribute("data-fade", "");
              }
            });

          var elements = document.querySelectorAll(
            "[data-fade]:not(.is-visible), .fade-in:not(.is-visible)",
          );
          if (!elements.length) return;

          var observer = new IntersectionObserver(
            function (entries) {
              entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                  entry.target.classList.add("is-visible");
                  observer.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.08 },
          );

          elements.forEach(function (el) {
            observer.observe(el);
          });
        }

        initFadeIns();
        document.addEventListener("astro:after-swap", initFadeIns);
      })();
    