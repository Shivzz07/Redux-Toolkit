import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid is a function that generates unique IDs, useful for creating unique identifiers for each todo item.

//continue notes from store
//createSlice se todo ki functionality banegi
// pehle ek initialState banate hain jismein hamarei todos dekhenge kaise woh honge , kya cheeze ho sakti hain
// createSlice ko teen cheeze chahiye hoti hain - name, initialState, reducers
//reducers ke function , ko kahi aur bhi likh sakte hain and direct import kara sakte hain 


const initialState = {
    todo1: [{id:1 , text : "Hello"}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const todo5 = {
                id :nanoid(),
                text : action.payload 
                //action.payload - this is nothing but the data we pass from the component
            }
            state.todo1.push(todo5);
        },
        // state - mei milta hai current state jo bhi hai AUR action - is jo bhi data pass ho raha 
        removeTodo: (state,action) => {
            state.todo1 = state.todo1.filter((e)=> e.id !==action.payload)
        },
        updateTodo : (state,action) => {
            const {id, text} = action.payload;
            const todoToUpdate = state.todo1.find((todo) => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.text = text;
            }
        }
    }
})

// humko individually reducers ko export karna hoga kyuki reducers mei aise hi pass hoti hai cheeze 
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
// export default todoSlice.reducer - isse hum store mei use kar payenge
// store mei use karne ke liye humein isko export karna padega