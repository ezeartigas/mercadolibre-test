const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios').default;

dotenv.config();

app.use(cors({ origin: process.env.HOST_ORIGIN }));

app.get('/api/items', async function (req, res, next) {
   try {
      const query = req.query.q;
      const { data } = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);

      let items = [];
      let categories = [];

      if (data.results.length > 0) {
         const filterCategory = data.filters.find((x) => x.id === 'category');

         if (filterCategory) {
            categories = filterCategory.values[0].path_from_root.map((x) => x.name);
         }

         items = data.results.map((x) => ({
            id: x.id,
            title: x.title,
            price: x.price,
            picture: x.thumbnail,
            condition: x.condition,
            free_shipping: x.shipping.free_shipping,
            address: x.address,
         }));
      }

      res.json({ items, categories });
   } catch (error) {
      next(error);
   }
});

app.get('/api/items/:id', async function (req, res, next) {
   try {
      const id = req.params.id;
      const { data: item } = await axios.get(`https://api.mercadolibre.com/items/${id}`);
      const { data: description } = await axios.get(
         `https://api.mercadolibre.com/items/${id}/description`,
      );
      const { data: category } = await axios.get(
         `https://api.mercadolibre.com/categories/${item.category_id}`,
      );

      res.json({
         id: item.id,
         title: item.title,
         price: item.price,
         picture: item.pictures[0].secure_url,
         condition: item.condition,
         free_shipping: item.shipping.free_shipping,
         sold_quantity: item.sold_quantity,
         description: description.plain_text,
         categories: category.path_from_root.map((c) => c.name),
      });
   } catch (error) {
      next(error);
   }
});

app.use((error, req, res, next) => {
   console.error('Error: ', error);
   console.log('Path: ', req.path);
   res.status(500).json({ error: error.message });
});

app.listen(process.env.PORT, function () {
   console.log(`Server running on http://localhost:${process.env.PORT}/`);
});
