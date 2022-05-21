# Software Requirements

- What is the vision of this product?
  - Through data handling, this product will allow users to access a list of LGBTQ+ safe spaces based on user location and or input.  It will also allow users to research potential desitnations by city, country, etc to see that particular location's safety score. 
  
- What pain point does this project solve?
  - This product will give users the ability to visit locations without the fear of being rejected or mistreaded based on their sexual orientation. Groups of individuals that go against 'societal norms' tend to be treated differently depending on a geographical locations mindset. With this app an underrepresented group can feel accepted, seen and safe.

- Why should we care about your product?
  - This product will be useful not only for spur of the moment planning, but for long-term preperation as well. Since users will be able to update the database with their own safe space information the amount of information that can be shared across users will be limitless. And with offline configuration, users that are signed up will be able to safe their desired locations and apply them to a trip management template or create their own.

## Scope (In/Out)

  - IN - What will your product do
    - Our app will provide a list of safe spaces within a radius of a specific location.  This will be done using an external 3rd part API.
    - It will allow users to save pertinent information to their profile after being authenticated.  The authentication will be handled by Auth0, the data storage will be handled by a external DB
    - It will allow users to update the list of safe spaces with one of their own.  This request will be handled by our server and the data will be stored in our DB.
    - It will allow the user to plan potential trips (business or pleasure) knowing the safety score of their destination.  All of this will be available initially from the 3rd party API request, then from the DB at the user's request.

  - OUT - What will your product not do.
    - Our app will not have chat capabilities.  The only thing available will be the data provided.

## MVP

  - Our MVP is listed above in our scope.  To clarify:
    - Make an API request and retrieve pertinent data
    - Render that data to the user
    - Allow auth and account creation to the user
    - Store user data like preferences, locations, etc
  
## Stretch Goal

  - The GPS feature that suggests a list of locations based on the users information will be a stretch goal.
  
## Functional Requirements

  - Full `CRUD` capabilities that run through our server
  - Authentication using `Auth0`
  - Mobile development using `react-native`
  - 3rd party API `GET` requests
  - `DB` (postgres, MongoDB, AWS)
  - `RBAC` functionality
  
## Data Flow

User begins the app, stored data, if applicable, will be rendered upon app load. Users will be able to reach the database through GET requests and pull locations if needed. Once a user signs in they will be able to place a POST request to database, giving all users access to their added data, regardless of authentication status.The user will be directed to Auth0 server to login to the web application, storing their personal data to allow then a dynamic experience based on their configured page preferences. The user will be able to save data from the home page to their profile page and add it to a template provided for trip planning, this will be available through their stored data only and visible to that user. 

## Non-Functional Requirements

  - Security - User will need to be authenticated
  - Testability - Unit tests will be helpful and beneficial to us as developers, as well as any future devs that want/need to work on this project
  - A enjoyable user experience.  It should do more than just "work"


## DB Modeling....TBD

- We will have a schema but need to see how the data is sent back to us from the 3rd party API before we can create it.
- There will be three schemas, one for the user access control list, the user's saved preferences, and the safe places data model