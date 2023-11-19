var a = [];
fetch("https://65598cb4e93ca47020aa4632.mockapi.io/todo")
  .then((x) => x.json())
  .then((data) => {
    a = data;
  });

function reducer(state = undefined, action) {
  switch (action.type) {
    case "put":
      action.account.todo.push(action.job);
      fetch(
        `https://65598cb4e93ca47020aa4632.mockapi.io/todo/${action.account.id}`,
        {
          method: "Put",
          cache: "no-cache",
          body: JSON.stringify(action.account),
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        }
      )
        .then((x) => x.json())
        .then((data) => {
          return { ...data };
        });
      return state;

    case "signin":
      var acc = {};
      if (a.filter((item) => item.email == action.value).at(0) != undefined) {
        acc = a.filter((item) => item.email == action.value).at(0);
      }
      return { ...acc };

    case "remove":
      var updatedTodo = action.account.todo.filter((item) => item !== action.jobId);
      action.account.todo = updatedTodo;
      fetch(
        `https://65598cb4e93ca47020aa4632.mockapi.io/todo/${action.account.id}`,
        {
          method: "Put",
          cache: "no-cache",
          body: JSON.stringify(action.account),
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        }
      )
        .then((x) => x.json())
        .then((data) => {
          // Return the updated state
          return { ...data };
        });
    
      // Make sure you return the state here or the change won't be reflected
      return { ...state };

      case "edit":
        var updatedTodo = action.account.todo.map((item) =>
          item === action.jobId ? action.newJob : item
        );
        action.account.todo = updatedTodo;
        fetch(
          `https://65598cb4e93ca47020aa4632.mockapi.io/todo/${action.account.id}`,
          {
            method: "PUT",
            cache: "no-cache",
            body: JSON.stringify(action.account),
            headers: new Headers({
              "Content-Type": "application/json",
            }),
          }
        )
          .then((x) => x.json())
          .then((data) => {
            // Return the updated state
            return { ...data };
          });
  
        return { ...state };

    default:
      return state;
  }
}

export default reducer;
