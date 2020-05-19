/* eslint-disable no-alert */
export default (e) => {
  e.preventDefault();
  const form = e.target;
  const url = form.action;
  let params = '';

  Array.from(form.elements).forEach((elem) => {
    const { value, name } = elem;
    params += `${name}=${encodeURIComponent(value)}&`;
  });

  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open('POST', url, false);
  xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xmlhttp.send(params);

  if (xmlhttp.responseText.match(/Thank/g)) {
    form.reset();
    alert('WEBSITE ERROR! - Just joking! Thanks for reaching out. I’ll get back to you as soon as possible.');
  }
};
