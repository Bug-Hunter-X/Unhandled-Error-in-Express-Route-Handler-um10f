# Unhandled Error in Express Route Handler

This repository demonstrates a common error in Express.js applications: missing error handling in route handlers.  The `bug.js` file shows a route that fetches user data but lacks error handling.  If the database query fails, the application crashes.

The `bugSolution.js` file provides a corrected version with proper error handling using async/await and try...catch blocks.  This ensures the server remains responsive even during database failures and returns a meaningful error response to the client.