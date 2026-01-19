import Portfolio from './pages/Portfolio';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Portfolio": Portfolio,
}

export const pagesConfig = {
    mainPage: "Portfolio",
    Pages: PAGES,
    Layout: __Layout,
};