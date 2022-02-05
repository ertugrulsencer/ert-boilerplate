module.exports = (req, res, next) => {
  res.renderView = (page, options, data) => {
    res.render(options?.master ?? "main.master.ejs", {
      page,
      ...data,
    });
  };
  next();
};
