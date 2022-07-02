/* eslint-disable require-jsdoc */
import JobListings from '../database/data.js';
import {$, newElement} from './functions.js';

const createCardHeader = ({logo, company, featured, isNew}) => {
  const headerEl = newElement('div', 'card-header');
  const logoEl = newElement('img', 'logo');
  const nameEl = newElement('h2', 'company-name');

  logoEl.src = logo;
  nameEl.innerText = company;
  featured && nameEl.classList.add('featured');
  isNew && nameEl.classList.add('new');

  headerEl.append(logoEl, nameEl);

  return headerEl;
};

const generateJobInfo = ({postedAt, contract, location}) => {
  const ul = newElement('ul', 'job-infos');

  [postedAt, contract, location].forEach((info) => {
    const li = newElement('li');

    li.innerText = info;
    ul.appendChild(li);
  });

  return ul;
};

const createLanguagesList = ({languages}) => {
  const languagesList = newElement('div', 'languages');

  languages.forEach((language) => {
    const span = newElement('span');

    span.innerText = language;
    languagesList.appendChild(span);
  });

  return languagesList;
};

const createJobsList = () => {
  const listEl = $('job_listings');

  JobListings.forEach((listing) => {
    console.log(listing);
    const card = newElement('div', 'job-card');

    card.append(
        createCardHeader(listing),
        generateJobInfo(listing),
        createLanguagesList(listing),
    );

    listEl.appendChild(card);
  });
};

window.onload = () => {
  createJobsList();
};

