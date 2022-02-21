import 'normalize.css';
import styles from './index.module.scss';
import $ from 'jquery';
import '@babel/polyfill';

function index() {
    const element = document.createElement('div');
    element.innerHTML = 'Hello 은총님!';

    element.classList = styles.helloWebpack;

    return element;
}

document.body.appendChild(index());

console.log($(`.${styles.helloWebpack}`).length);
console.log(`IS_PRODUCTION: ${IS_PRODUCTION}`);