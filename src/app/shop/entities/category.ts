export interface Category {
  id : number;
  name : string;
  searchResultName : string;
  parentId : number;
  state : number;
  isVertical : number;
  isLeaf : number;
}
