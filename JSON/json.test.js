const sqlite3 = require('sqlite3').verbose();
const load = require('./index')

describe('SQLite3', () => {
    beforeAll(done => {
        db.exec('CREATE TABLE IF NOT EXISTS restaurant(...);', done)
    })
    test('restaurants are loaded into the database', (done) => {
        load((db) => {
            db.all('SELECT * FROM restaurant LIMIT 3;', (err, row) => {
                expect(row.length).toBe(3)
                expect(row[0].name).toBe('Bayroot')
                db.get('SELECT COUNT(id) AS total FROM restaurant;', (err, count) => {
                    expect(count.total).toBe(8)
                    done()
                })
            })
        })
    })
})