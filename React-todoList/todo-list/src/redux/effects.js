import {addTodo, registerSuccess, registerFail} from "./actions"

function registerAPI(user) {
    return fetch('http://localhost:5000/users/register',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });
}

export const register = (user) => {
    return dispatch => {
      return registerAPI(user)
      .then(
        (res) => {
            if(res.status === 200 && res.ok === true){
                dispatch(registerSuccess)
                return new Promise(resolve=>{
                    resolve("success!")
                })
            }
            else
              return res.json();
        },
        (error) => {
            console.log(error)
        },
      )
      .then(msg=>window.alert(JSON.stringify(msg)))
      .catch(
          err=>console.log(err)
      );
    };
}

