/* 
    ==== Module to list all people in an unordered list ====
*/

import '../../Styles/People.css';

// Create a functional component named PersonList that receives an array of Person objects as props.
// Within the component, map through the array of Person objects and render each person's details in an unordered list (<ul>).
// Display the name and age properties of each person within the list items (<li>).
const PersonList = function (props: any){
    let inpPeople: Array<Person> = props["inpPeople"];
    return(
      <ul className='PersonList'>
        {inpPeople.map(person => <li> {person.name}, {person.age} </li>)}
      </ul>
    )
}

export default PersonList;