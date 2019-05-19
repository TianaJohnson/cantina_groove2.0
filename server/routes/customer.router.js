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
        const queryText = `INSERT INTO ""
                     ("customers_full_name", 
                      "pro_nouns", 
                      "email",
                      "phone_number", 
                      "customer_notes") 
                      VALUES ($1, $2, $3, $4, $5) RETURNING "id";`;
        pool.query(queryText, [req.body.customers_full_name,
        req.body.pro_nouns,
        req.body.email,
        req.body.phone_number,
        req.body.customer_notes])
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

module.exports = router;