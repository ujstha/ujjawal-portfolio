export const scrollTo = (id) => {
  let sectionToView = document.getElementById(id);
  if (sectionToView) sectionToView.scrollIntoView();
  return;
};
