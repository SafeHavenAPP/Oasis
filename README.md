# Oasis

## Team Members

- Tiara Brown
- Chattray Chea
- Andres Mills Gallego

## Description

Summary:
  - One stop shop for people in the LGBTQ+ community to access locations that promote acceptance of all backgrounds.  Those who are signed up for this application cannot not only access safe spaces, but also generate safe spaces of their own to share with others on the platform.  The signed in user can also keep a history of preferred settings, favorite places/locations, etc.

PM Tools:
  - We will be using GitHub Projects for our project management.

## User Stories

- Title
  - Keep Records
- User Story sentence
  - As a user I want to be able to keep a record of my preferences and locations that I like
- Feature Tasks
  - Utilize a database with full CRUD capabilities 
- Acceptance Tests
  - Mock the request / response to ensure our product is working as intended

- Title
  - Trip Planning
- User Story sentence
  - As a user I want to be able to plan ahead for a trip and know the safety scores for a specific location of my choosing
- Feature Tasks
  - Call on the SafeSpace API which will return data based on the data provided
- Acceptance Tests
  - Test the routes with thunder client / postman to make sure they work properly

- Title
  - Visible locatoins
- User Story sentence
  - As a user, I want to be able to use the core aspect of your app without signing up
- Feature Tasks
  - Allow all users to access safe space information without authentication
- Acceptance Tests
  - The web page does not require log in upon page load
Search engine renders api/database content to user live time without validation
User is not able to create safe-space without validation

- Title 
  - Removing spaces
- User Story sentence
  - As an admin I want to be able to delete a safespace or edit a safespace if needed
- Feature Tasks
  - Create access points based on user credentials and abilities.
- Acceptance Tests
  - Admins can create/read/ and update user content to keep safespaces valid and error-free.

- Title
  - Suggested safe-spaces
- User Story sentence
  - As a user I want to allow the web app to access my location and render suggestions via the data and my general location before searching
- Feature Tasks
  - Link GPS to web application and request client-side, update location-based on live-time coordinates from users phone/desktop
- Acceptance Tests
  - GPS feature would send Texas spaces if user is in Texas, ect.
User would receive suggested locations upon app load if they allow location access.

## WIREFRAME

![OASIS WIREFRAME1](https://user-images.githubusercontent.com/90294860/169873896-70f59583-6d49-45f9-aa0b-7cd73c27b32c.png)

![OASIS WIREFRAME2](https://user-images.githubusercontent.com/90294860/169873907-0a67a141-a777-4dab-b926-9df1015c706e.png)
