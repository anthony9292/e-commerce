const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
 try { 
   Category.findAll({ 
     include: { 
       model: Product, 
     }, 
   })
   .then((results => { 
     res.status(200).json(results); 
   }))
 } catch (err) { 
   res.status.(500).json(err); 
 }
});

router.get('/:id', (req, res) => {
   try { 
     Category.findByPk(req.params.id, { 
       include: { 
         model: Product,
       },
     })
     .then((results => { 
       res.status(200).json(results); 
     }))
   } catch (err) { 
     res.status(500).json(err);
   }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
