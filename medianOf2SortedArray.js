/**
 * Question
 * --------------------------------------------------------------------------------------------------
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * --------------------------------------------------------------------------------------------------
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArray = [];
    let i = 0, j = 0, k = 0;
    while(i < nums1.length && j < nums2.length) {
    	if(nums1[i] < nums2[j]) {
    		mergedArray[k] = nums1[i];
    		i++;
    	}
    	else {
    		mergedArray[k] = nums2[j];
    		j++;	
    	}
    	k++;
    }
    if(i < nums1.length) {
    	mergedArray = mergedArray.concat(nums1.slice(i));
    }
    else {
    	mergedArray = mergedArray.concat(nums2.slice(j));	
    }
    let mid = Math.floor(mergedArray.length / 2);
    return (mergedArray.length % 2 > 0) ? mergedArray[mid] : (mergedArray[mid] + mergedArray[mid - 1]) / 2;
};