// 23. Merge k Sorted Lists



// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

    let arr = []
    let dummy = new ListNode()

    for(let list of lists){
        let cur = list
        while(cur){
            arr.push(cur.val)
            cur = cur.next
        }
    }
    
    arr.sort((a,b) => a-b)
    let current = dummy
    for(let num of arr){
        let node = new ListNode(num)
        current.next = node
        current = current.next
    }

    return dummy.next
};