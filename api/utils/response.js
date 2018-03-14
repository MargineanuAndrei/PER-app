
// Costum function for api response
const errorResponse = (res, { code, message }) => res.status(code).json({ code, message });
const okResponse = (res, data, { code, message }) => res.status(code).json({ code, data, message });

module.exports = {
  errorResponse,
  okResponse
}
