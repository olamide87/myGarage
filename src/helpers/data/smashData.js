import categoryData from './garageCategoryData';
import garageItemData from './garageItemData';

const totallyRemoveCategory = (categoryId) => new Promise((resolve, reject) => {
  categoryData.deleteCategory(categoryId)
    .then(() => {
      garageItemData.getGarageItemsByCategoryId(categoryId)
        .then((garageItems) => {
          garageItems.forEach((garageItem) => {
            garageItemData.deleteItem(garageItem.id);
          });
          resolve();
        });
    })
    .catch((err) => reject(err));
});

export default { totallyRemoveCategory };
