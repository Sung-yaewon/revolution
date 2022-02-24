use test
db.things.find()

db.things.find({}, {$eleMatch:{m:test}})
