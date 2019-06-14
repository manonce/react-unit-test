module.exports = jest.fn(url => {
  return Promise.resolve({
    name: "abc"
  });
});
