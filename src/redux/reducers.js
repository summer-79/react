// //reducer.js

// // state 의 형태 수정
// // [{text:'coding', done:false},{text:'eat lunch', done:false}]
// // {todos: [{text:'coding', done:false},{text:'eat lunch', done:false}], filter: 'ALL' }

// import { ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_COMPLETE } from "./actions";
// import { combineReducers } from "redux";

// const initialState = { todos: [], filter: "ALL" };

// // [{text:'coding', done:false},{text:'eat lunch', done:false}]
// const todosInitialState = initialState.todos;

// const filterInitialState = initialState.filter;

// const reducer = combineReducers({
//   todos: todosReducer,
//   filter: filterReducer,
// });

// export default reducer;

// function todosReducer(previousState = todosInitialState, action) {
//   if (action.type === ADD_TODO) {
//     return [...previousState.todos, { text: action.text, done: false }];
//   }

//   if (action.type === COMPLETE_TODO) {
//     return previousState.map((todo, index) => {
//       if (index === action.index) {
//         return { ...todo, done: true };
//       }
//       return todo;
//     });
//   }
//   return previousState;
// }

// function filterReducer(previousState = filterInitialState, action) {
//   if (action.type === SHOW_COMPLETE) {
//     return "COMPLETE";
//   }

//   if (action.type === SHOW_ALL) {
//     return "ALL";
//   }

//   return previousState;
// }
