const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// needs to be updated to current settings
// post -> put && insert -> update
router.put('/:id', (req, res, next) => {
    console.log(req.user.id);
    console.log('params', req.params.id);
    if (req.isAuthenticated()) {
    const queryText = `UPDATE "project"
                       SET "project_title" = $1,
                           "brief_project_desc" = $2,
                           "builder_id" = $3,
                           "status_id" = $4,
                           "brand" = $5,
                           "activation_date" = $6,
                           "date_due" = $7,
                           WHERE "client_id" = $8;`;
    pool.query(queryText, [req.body.project_title,
                            req.body.brief_project_desc,
                            req.body.builder_id,
                            req.body.status_id,
                            req.body.brand,
                            req.body.activation_date,
                            req.body.date_due,
                            req.params.id ])
        .then(() => {
            console.log('server side project Post');
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Something went wrong in project post', error);

            res.sendStatus(500);;
        });
    }
});

router.get('/:id', (req, res) => {
    console.log('in GET project intake get id ')
    console.log('req.params: project get', req.user.id);
    if (req.isAuthenticated()) {
        console.log('req.user:', req.user.id);
        pool.query(`SELECT * FROM "project"
                    JOIN "client_contact_info" ON "project_intake"."client_id" = "client_contact_info"."id"
                    WHERE "project_intake"."client_id" = $1;`, [req.params.id])
            .then(results => {
                console.log(results.rows[0])
                res.send(results.rows[0])
            })
            .catch(error => {
                console.log('Error making SELECT for project database:', error);
                res.sendStatus(500);
            });
    } else {
      // They are not authenticated.
      res.sendStatus(403);
    }
  });


module.exports = router;