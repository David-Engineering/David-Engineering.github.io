const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
const dialog = document.querySelector('#project-dialog');
const title = document.querySelector('#dialog-title');
const copy = document.querySelector('#dialog-copy');
const projectCopy = {
  robot: ['Competition Robot', 'Document the challenge, your mechanism choices, your specific contribution, testing results, and what you would change in the next version.'],
  cad: ['CAD Design', 'Add the CAD software used, design constraints, screenshots or renders, dimensions, assembly details, and why you made key design decisions.'],
  prototype: ['Prototype or Personal Build', 'Describe the problem, your design process, materials and tools, how you tested the build, and what you learned from the result.']
};
document.querySelectorAll('.project-details').forEach(button => button.addEventListener('click', () => {
  const data = projectCopy[button.dataset.project];
  title.textContent = data[0];
  copy.textContent = data[1];
  dialog.showModal();
}));
