import VueRouter from "vue-router";
import { BasePage, Contacts } from "../blocks";

const routes = [
    { path: "/", component: BasePage },
    { path: "/contacts", component: Contacts }
]

export const router = new VueRouter({ routes }); 