/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 /**
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

Input: (3 -> 4 -> 5) + (1)
Output: (4 -> 4 -> 5)
 **/
var addTwoNumbers = function(l1, l2) {
    


};


function ListNode(val) {
	this.val = val;
	this.next = null;
}

/**
* param {number[]} nums
* return {ListNode}
*/
function createLinkList(nums) {

	var head = new ListNode(nums[0]);
	var current = head;

	nums.forEach(function(n, i) {
		if (i > 0) {
			current.next = new ListNode(n);
			current = current.next;
		}
	})

	current.next = null;

	printLinkList(head);

	return head;

}

function printLinkList(head) {
	var output = []
	while(head.next != null) {
		output.push(head.val);
		head = head.next
	}
	output.push(head.val);
	console.log('Print LinkedList: ' + output);
}


// demo 
var l1 = createLinkList([10, 20, 30]);