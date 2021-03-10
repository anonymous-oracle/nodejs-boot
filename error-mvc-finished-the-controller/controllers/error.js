exports.get404 = (req, res, next) => {
  // path variable error was fixed and was not mentioned
  res.status(404).render('404', { pageTitle: 'Page Not Found', path:'' });
};
