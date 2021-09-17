/**
 * @name updateItemInArray
 * @description Update an item in array of objects
 * @param {string} items
 * @param {*} itemPropName
 * @param {*} itemPropValue
 * @param {*} newProps
 *
 * @returns {*} New array of objects with updated item
 */
export const updateItemInArray = (items: any,  itemPropName: any, itemPropValue: any, newProps: any) =>
{
	return items.map(item =>
	{
		if (item[itemPropName] === itemPropValue)
		{
			return {...item, ...newProps}
		}
		return item;
	})
}