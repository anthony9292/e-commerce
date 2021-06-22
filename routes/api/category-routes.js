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
   res.status(500).json(err); 
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
   try{Category.create({ 
     category_name: req.body.category_name
   }).then(categoryData => res.json(categoryData))
   } catch(err) { 
     console.log(err); 
     res.status(500).json(err); 
   };
});

// Update category section 
router.put('/:id', (req, res) => {
   try{Category.update( 
     {  
       category_name: req.body.category_name
     }, 
     { 
       where: { 
         id: req.params.id
       }
     }).then(categoryData => { 
       if (! categoryData) { 
         res.status(404).json({ message: 'Category and ID do not match!!'}); 
         return;
       }
       res.json(categoryData); 
     }) 
  } catch(err){ 
    console.log(err); 
    res.status(500).json(err); 
  }; 
});
//delete category section 
router.delete('/:id', (req, res) => {
   try{Category.destroy({ 
     where: { 
       id: req.params.id
     }
   }).then(categoryData =>{ 
     if (!categoryData) { 
       res.status.apply(404).json({ message: 'Category and ID do not match!!!'}); 
       return;
     }
     res.json(categoryData); 
   }) 
   } catch(err) { 
     console.log(err); 
     res.status(500).json(err)
   };
});

module.exports = router;
