const { exec } = require('child_process')

// visa test-party fixture: one deliberate command-injection finding for the diff-aware scan test
module.exports = function listDirectory (req, res) {
  exec('ls ' + req.query.dir, (err, stdout) => {
    res.send(stdout)
  })
}
