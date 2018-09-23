import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Water Bill", amount: 50, createdAt: 2 })
);
store.dispatch(
  addExpense({ description: "Gas Bill", amount: 80, createdAt: 1 })
);

store.dispatch(addExpense({ description: "Rent", amount: 10, createdAt: 3 }));

const state = store.getState();

const { expenses, filters } = state;

console.log(getVisibleExpenses(expenses, filters));

// console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
