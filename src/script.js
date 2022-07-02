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

const createJobsList = () => {
  const listEl = $('job_listings');

  JobListings.forEach((listing) => {
    console.log(listing);
    const card = newElement('div', 'job-card');

    card.append(createCardHeader(listing));
    listEl.appendChild(card);
  });
};

window.onload = () => {
  createJobsList();
};

