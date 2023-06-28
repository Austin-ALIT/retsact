
// In this assignment, you will demonstrate your ability to create a React app using TypeScript and 
// build a simple component that displays a list of typed objects.
 
 // Instructions:
 

 // =============================  Set up the React App: ============================================

 // Initialize a new React app using the create-react-app command with the --template typescript flag.
 // Ensure that the TypeScript configuration is properly set up.
 /* Setup Terminal Lines: 
     npm i typescript // unneccasary as react installs ts anyway
     npx create-react-app retsact --template typescript
     cd retsact
     npm start // Runs the application in the browser. Refreshes each time app.tsx is saved. 
     npm i @types/node
     npm install @mui/base
 */


// ================================== Create a TypeScript Type: ======================================
// See ./Declarations/Person.d.ts
// Automatically imported, it seems. 


// ================================= Create a Component: =============================================
// See ./Modules/People/People.tsx
import PersonList from './Modules/People/People';


// ================================ Use the Component: ==============================================

import React from 'react';

function App() {

  // In the main App component, create an array of at least 3 Person objects.
  let arrPeople: Person[] = [
    {age: 27, name: "Sarah", id: 100},
    {age: 35, name: "John", id: 101},
    {age: 34, name: "Nicky", id: 110},
    {age: 19, name: "Borat", id: 111} // Adding a fourth person for testing
  ];

  // Render the Result:  
  // In the main App component, render the PersonList component with the array of Person objects as props.
  return(
    <div>
      {/* Pass the array as props to the PersonList component*/}
      <PersonList inpPeople = {arrPeople}></PersonList>

    </div>
  );
}

export default App;

// =========================== Style the Component (optional): ===============================
// See ./Styles/People.css & ./Modules/People/People.tsx
// Apply CSS styles to the PersonList component or - done
// use a UI library like Material-UI to enhance the visual appearance.

// TODO: Improve css, see if learning a UI library is worthwhile (prior research took too much time, would like to come back to this again).


// ================================= Testing: ================================================

// Ensure that the React app runs without any errors or warnings. - done

// Verify that the PersonList component renders the list of Person objects correctly. - done

// Test by adding, modifying, or removing objects in the Person array to confirm that the component updates accordingly. - done


// ============================= Submission Guidelines: ======================================

// Create a new GitHub repository for your assignment and commit your code.
/* GitHub commands entered: 


*/
// Submit the repository link containing the assignment code.


// ============================ Evaluation Criteria: =========================================

// Correct setup and configuration of a React app with TypeScript.

// Successful implementation of the PersonList component with proper typing and rendering of the list.

// Overall code structure, organization, and readability.

// Proper usage of TypeScript features and syntax.

// Optional styling and creativity in the presentation.



