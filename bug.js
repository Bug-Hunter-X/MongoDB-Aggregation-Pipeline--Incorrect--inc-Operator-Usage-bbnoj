```javascript
//Incorrect usage of $inc operator in MongoDB aggregation pipeline
db.collection.aggregate([
  {
    $group: {
      _id: "$fieldName",
      count: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 1,
      count: {$inc: 1} //This is wrong
    }
  }
])
```