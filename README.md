# MongoDB Aggregation Pipeline Bug: Incorrect $inc Operator Usage
This repository demonstrates a common error when using the `$inc` operator within the MongoDB aggregation pipeline. The `$inc` operator is designed to increment a numeric field, but it's crucial to understand its correct placement within the pipeline stages.

## Bug Description
The original code incorrectly uses the `$inc` operator in the `$project` stage. This leads to unintended results as the incrementation does not affect the grouped values from the previous stage.  The `$inc` operator should only be used within the context of updating documents, and correctly within the `$group` stage if you are summing and wanting an additional count. 

## Solution
The solution demonstrates the correct usage of the `$inc` operator within the `$group` stage to achieve the intended result. This ensures that the incrementation happens as expected while grouping.
