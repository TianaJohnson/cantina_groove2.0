const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// needs to be updated to current settings
// post -> put && insert -> update
// router.put('/:id', (req, res, next) => {
//     console.log(req.user.id);
//     console.log('params', req.params.id);
//     if (req.isAuthenticated()) {
//     const queryText = `UPDATE "project"
//                        SET "project_name" = $1,
//                            "brand" = $2,
//                            "deep_custom" = $3,
//                            "project_desc" = $4,
//                            "cust_height" = $5,
//                            "cust_inseam" = $6,
//                            "cust_torso" = $7,
//                            "cust_flex" = $8,
//                            "cust_reach" = $9,
//                            "head_tube" = $10,
//                            "steerer_tube" = $11,
//                            "down_tube" = $12,
//                            "seat_tube" = $13,
//                            "bottom_bracket" = $14,
//                            "seat_stays" = $15,
//                            "chain_stays" = $16,
//                            "drop_outs" = $17,
//                            "brake_type" = $18,
//                            "wheel_size" = $19,
//                            "tire_clearance" = $20,
//                            "progress_status" = $21,
//                            "date_created" = $22,
//                            "projected_due_date" = $23
//                            WHERE "client_id" = $24;`;
//     pool.query(queryText, [req.body.project_name,
//                             req.body.brand,
//                             req.body.deep_custom,
//                             req.body.project_desc,
//                             req.body.cust_height,
//                             req.body.cust_inseam,
//                             req.body.cust_torso,
//                             req.body.cust_flex,
//                             req.body.cust_reach,
//                             req.body.head_tube,
//                             req.body.steerer_tube,
//                             req.body.down_tube,
//                             req.body.seat_tube,
//                             req.body.bottom_bracket,
//                             req.body.seat_stays,
//                             req.body.chain_stays,
//                             req.body.drop_outs,
//                             req.body.brake_type,
//                             req.body.wheel_size,
//                             req.body.tire_clearance,
//                             req.body.progress_status,
//                             req.body.date_created, 
//                             req.body.projected_due_date,
//                             req.params.id ])
//         .then(() => {
//             console.log('server side project Post');
//             res.sendStatus(201);
//         })
//         .catch((error) => {
//             console.log('Something went wrong in project post', error);

//             res.sendStatus(500);;
//         });
//     }
// });


router.get('/:id', (req, res) => {
    console.log('in GET project get id ')
    console.log('req.params: project get', req.user.id);
    if (req.isAuthenticated()) {
        console.log('req.user:', req.user.id);
        pool.query(`SELECT * FROM "project"
                    JOIN "client_contact_info" ON "project"."client_id" = "client_contact_info"."id"
                    WHERE "project"."client_id" = $1;`, [req.params.id])
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