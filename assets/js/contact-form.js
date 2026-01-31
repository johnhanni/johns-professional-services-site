/* assets/js/contact-form.js
 *
 * Progressive enhancement for the contact form:
 * - With JS disabled: the form submits normally (full page load).
 * - With JS enabled: we intercept submit, POST via fetch(), and show inline status messages.
 */

;(() => {
    const form = document.querySelector("#contact-form");
    if (!form) return;

    const statusEl = document.querySelector("#form-status");
    const submitBtn = form.querySelector("[data-submit]");

    function setStatus(message, type) {
        if(!statusEl) return;
        statusEl.hidden = false;
        statusEl.textContent = message;
        statusEl.dataset.type = type;
    }

    function clearStatus() {
        if (!statusEl) return;
        statusEl.hidden = true;
        statusEl.textContent = "";
        delete statusEl.dataset.type;
    }

    function setSubmitting(isSubmitting) {
        if (!submitBtn) return;
        submitBtn.disabled = isSubmitting;
        submitBtn.textContent = isSubmitting ? "Sending..." : "Send Message";
    }

    form.addEventListener("submit", async (event) => {
        console.log("submit intercepted"); //Debugging form JS handling
        
        event.preventDefault();
        
        clearStatus();
        setSubmitting(true);

        try {
            const formData = new FormData(form);
            console.log("turnstile token:", formData.get("cf-turnstile-response"))

            const res = await fetch(form.action, {
                method: form.method || "POST",
                body: formData,
                headers: { Accept: "application/json"},
            });

            const payload = await res.json();

            if (!res.ok || !payload.ok) {
                setStatus(payload.message || "Something went wrong. Please try again.", "error");
                setSubmitting(false);
                return;
            }

            setStatus(payload.message || "Message sent. Thank you.", "success");
            form.reset();
            setSubmitting(false);
        } catch (err) {
            setStatus("Network error. Please try again, or email me directly above.", "error");
            setSubmitting(false);
        }
    });
})();