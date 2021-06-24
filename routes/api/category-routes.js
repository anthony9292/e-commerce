const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
   Category.findAll({ 
     include: [
       {
       model: Product, 
       attributes: ['id', 'product_name', 'price','stock', 'category_id']
     }
     ]
   })
   .then(categoryData => res.json(categoryData))
   .catch (err => { 
    console.log(err); 
    res.status(500).json(err);
 });
 });

router.get('/:id', (req, res) => {
     Category.findOne( 
       { 
         where: {
           id: req.params.id
         },
         include: [
           {
         
           model: Product,
           attributes: ['id','product_name','price', 'stock', 'category_id']
         }
        ]
       })
     .then(categoryData => res.json(categoryData))
     .catch(err => {
       console.log(err); 
       res.status(500).json(err); 
     });
    });
 //category creation 
router.post('/', (req, res) => {
   Category.create({ 
       category_name: req.body.category_name
    })
   .then(categoryData => res.json(categoryData))
   .catch(err => { 
     console.log(err); 
     res.status(500).json(err)
   });
  }); 


// Update category section 
router.put('/:id', (req, res) => {
   Category.update(req.body,{
    where: {
      id: req.params.id
   }
   })
   .then(categoryData => { 
     if (!categoryData) { 
       res.status(404).json({ message: 'Category and ID do not match!!!'}); 
       return;
     }
     res.json(categoryData);
   })
   .catch(err => { 
     console.log(err); 
     res.status(500).json(err);
   })
  }); 
//delete category section 
router.delete('/:id', (req, res) => {
   Category.destroy({ 
     where: { 
       id: req.params.id
     }
   })
   .then(categoryData =>{ 
     if (!categoryData) { 
       res.status.apply(404).json({ message: 'Category and ID do not match!!!'}); 
       return;
     }
     res.json(categoryData); 
   }) 
   .catch(err => { 
    console.log(err); 
    res.status(500).json(err)
   });
});

module.exports = router;
