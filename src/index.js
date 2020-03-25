import Form from './Form';
import App from './App';


const app = new App();
const form = new Form(app.addCard);

export const render = (html, node) => (node.innerHTML = html);
