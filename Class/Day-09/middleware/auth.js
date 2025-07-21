const Auth = (req, res, next) => {
  // add item into FoodMenu
  // Authentication krna padega ki kya ye admin hi hai

  const token = "ABCDF";
  const Access = token === "ABCDF" ? 1 : 0;
  if (!Access) {
    res.status(403).send("No Permission");
  } else {
    next();
  }
};

module.exports = { Auth };
