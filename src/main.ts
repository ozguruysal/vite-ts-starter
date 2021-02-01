import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/main.css";

const x: IFoo = {
    bar: "hello"
}

// eslint-disable-next-line no-console
console.log(x);

createApp(App).mount("#app");
