
// An object to hold the item we will be
// storing in our list
var ListItem = function(data, tail) {
  this.tail = tail
  this.data = data
}

// List implementation
var List = function() {
  this.item = null

  // Add a data item to the front of the list
  this.add = function(elem) {
    this.item = new ListItem(elem, this.item)
  }

  // Returns true if the list is empty
  this.empty = function() {
    return this.item === null
  }

  // Returns the data at the head of the list. If
  // the list is empty, return null. This leaves
  // the list unmodified
  this.head = function(){
    var currentItem = this.item;
    if(this.item == null){return null}
    return currentItem.data}

  // Remove item off the head of the list and return
  // its value. The new head of the list must be the
  // next element in the list if it exists. If the
  // list is empty, we return null
  this.pop = function() {
    if(this.item == null){return null}
    var theHeadData = this.item.data;
    alert("popping"+theHeadData);
    this.item = this.item.tail;
    return theHeadData;

  }

  // Return the number of elements in the list.
  this.length = function() {
  
    var item =this.item;
    var count =0;
    if(item == null){return 0;}
    
    for(item ;item!=null;item=item.tail){
      count++
    }

    return count;
  }

  // Return the last data item in the list if it exists. If
  // not, return null
  this.last = function() {

    var item =this.item;
    if(item == null){return null};
    for( item ; item.tail != null ; item = item.tail)
    {
      continue;
    }
    return item.data;
  }
}

