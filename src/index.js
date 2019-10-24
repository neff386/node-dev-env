import {getUsers} from './api/userApi';

// populate Table of users via API call.
getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody+= `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.Name}</td>
    </tr>`
    
  });


global.document.getElementById('users').innerHTML = usersBody;

});
