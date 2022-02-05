const get = (req, res) => {
  res.renderView("about");
};

module.exports = {
  get,
};
