const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create
};

function create(req, res) {
  const s = req.body.born;
  req.body.born = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;
  Ticket.create(req.body, function (err, ticket) {
    res.redirect('/tickets/new');
  });
}

function newTicket(req, res) {
    let flightId = req.params.id;
    res.render('tickets/new', { flightId });
  };
