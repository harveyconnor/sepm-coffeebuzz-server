import Item from '../models/Item';

export default {
  Query: {
    getItems: async (_, args) => {
      const items = await Item.find({});
      return items;
    },
  },
  Muation: {
    createItem: async (_, {
      name, description, image, ...args
    }) => {
      const item = await Item.create({
        name,
        description,
        image,
      });

      return item;
    },
  },
};
