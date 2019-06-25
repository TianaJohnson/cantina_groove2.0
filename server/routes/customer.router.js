const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    
});

/**
 * POST route template
 */
// create new customer

router.post('/', (req, res, next) => {
    console.log(req.body);
    if (req.isAuthenticated()) {
        const queryText = `INSERT INTO "client_contact_info"
                     ("first_name",
                      "last_name", 
                      "pro_nouns", 
                      "email",
                      "phone_number", 
                      "cust_notes",
                      "is_active",
                      "date_activated") 
                      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING "id";`;
        pool.query(queryText, [req.body.first_name,
        req.body.last_name,
        req.body.pro_nouns,
        req.body.email,
        req.body.phone_number,
        req.body.cust_notes,
        req.body.is_active,
        req.body.date_activated])
            .then((results) => {
                // Insert empty project for new customer
                const anotherQuery = `INSERT INTO "project"
                     ("client_id", 
                      "user_id") 
                      VALUES ($1, $2);`;
                pool.query(anotherQuery, [results.rows[0].id,
                req.user.id]).then(() => {
                    console.log('server side intake Post');
                    res.sendStatus(201);
                }).catch(error => {
                    res.sendStatus(500);
                })
            
            })
        }
    })

//unable to fetch from server..
// I guess I am just taking a mental break , which sucks.
//one day I will code again! mark my words
    //This is where I will have to merge the project and customer info
// or maybe I just do this in the project router....
    router.get('/', (req, res) => {
        console.log('in GET ')
        if (req.isAuthenticated()) {
            console.log('req.user:', req.user);
            pool.query(`SELECT * FROM "client_contact_info" 
                        WHERE "is_active" = TRUE 
                        ORDER BY "id" DESC;`)
                .then(results => {
                    console.log(results.rows)
                    res.send(results.rows)
                })
                .catch(error => {
                    console.log('Error making SELECT for customer info database:', error);
                    res.sendStatus(500);
                });
        } else {
            // They are not authenticated.
            res.sendStatus(403);
        }
    });
        

module.exports = router;