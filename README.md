# Qodic-task

Create a React application from scratch that fetches a list of Star Wars characters from a public API
(https://swapi.dev/) endpoint: "/people". Implement pagination to navigate through the data.
Additionally, include a loading indicator during data fetches and handle errors, such as if the API
server is unreachable.
Character Display and Interaction
• Display each character as a card with a random image (use Picsum Photos for this
https://picsum.photos/ ).
• Apply a specific background color to each card based on the character's species.
• Add hover animations to the cards.
• When a card is clicked, open a modal showing more details about the character.
Character Details Modal
• Display the character's name in the modal header.
• Include additional information: height (in meters), mass (in kg), date added to the API
(formatted as dd-MM-yyyy), number of films the character appears in, and their birth year.
• Fetch and display details about the character's homeworld, including name, terrain,
climate, and population.
Search and Filter Functionality
• Add a search bar to find characters by name (partial or full).
• Implement filters for characters based on homeworld, film, or species.
• Ensure search and filter functions can work together.
Authentication and Authorization
• Implement a simple JWT authentication system with a login and logout UI.
• Include a mechanism for silent token refresh when it expires.
• The API doesn't require authentication, so mock the authentication with a fake username
and password.
Testing
• Write an integration test to ensure the modal opens with the correct information when a
character card is clicked.
Note: - - - -
Code should be properly formatted.
Code should be properly commented.
Coding standards should be followed.
DRY approach should be used.
