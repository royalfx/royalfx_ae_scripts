// Copyright (c) 2019 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

// version: 1.0.0
// date: 22 Jul 2019

/**
 * 
 * @description GET UNIQUE ITEM NAME
 * @param {*} item 
 * @param {string} itemName 
 * @param {FolderItem} folder 
 * @param {number} startIndex 
 * @param {number} suffixLen 
 * @param {string} itemType as_ItemType
 * @param {boolean} intoSubfolders 
 * @param {string} separator 
 */
function as_getUniqItemName(item, itemName, folder, startIndex, suffixLen, itemType, intoSubfolders, separator) {

	// CHECK ARGS
	startIndex = startIndex || 1;
	suffixLen = suffixLen || 2;
	itemType = itemType || as_ItemType.COMPITEM;
	separator = separator || " ";

	// VARS
	var i = startIndex, exist = true, newName, foundItem;

	// LOOP
	while (exist) {
		if (!newName) {
			// FIRST CHECK ORIGIN NAME
			newName = itemName;
		} else {
			// GET NEW NAME
			suffixLen = Math.max(suffixLen, i.toString().length);
			newName = (itemName + separator + ("00000000" + i).slice(-suffixLen));
			i++;
		}
		// CHECK
		foundItem = as_findItem(newName, itemType, folder, intoSubfolders);
		exist = (foundItem != null) && ((item == undefined) || (foundItem != item));
	}
	return newName;
}
