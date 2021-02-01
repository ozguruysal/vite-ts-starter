import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/main.css";

// Works well, no errors here!
const x: IFoo = {
    bar: "hello"
}

// eslint-disable-next-line no-console
console.log(x);

createApp(App).mount("#app");
