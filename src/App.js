import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect } from 'react';
import User from "./components/users/User";
import AddUser from './components/users/AddUser';

function App() {
   let [users, setUsers] = useState([]);
   let [showForm, setShowForm] = useState(false);

   useEffect(() => {
      fetch("https://randomuser.me/api/?results=10")
         .then(res => res.json())
         .then(users => {
            let rawUsers = users.results;
            let filteredUsers = rawUsers.map(usr => {
               return {
                  uuid: usr.login.uuid,
                  name: `${usr.name.title} ${usr.name.first} ${usr.name.last}`,
                  phone: usr.phone,
                  cell: usr.cell,
                  image: usr.picture.thumbnail
               }
            });
            setUsers(filteredUsers);
         })
         .catch(err => console.log(err));
   }, []);

   const removeUserHandler = (uuid) => {
      let remainUsers = users.filter(usr => usr.uuid != uuid);
      setUsers(remainUsers);
   }
   const addUserHandler = (user) => {
      let newUsers = [user, ...users];
      setUsers(newUsers);
      setShowForm(!showForm);
   }
   const showFormHandler = () => {
      setShowForm(!showForm);
   }

   return (
      <div className="container my-5">
         <div>
            <h1 className="text-center my-5 text-info">Our Employee</h1>
            <button className="btn btn-primary btn-sm my-2" onClick={showFormHandler}>Add User</button>
            {showForm && <AddUser addUser={addUserHandler} />}
            {
               users.map(usr => <User key={usr.uuid} user={usr} remove={removeUserHandler} />)
            }
         </div>
      </div>
   );
}


export default App;


/* <User image={users[0].image} phone={users[0].phone} cell={users[0].cell} name={users[0].name} />
        <User image={users[1].image} phone={users[1].phone} cell={users[1].cell} name={users[1].name} />
        <User image={users[2].image} phone={users[2].phone} cell={users[2].cell} name={users[2].name} />  */
/* <User data={users[0]}/>
            <User data={users[1]}/>
            <User data={users[2]}/> */