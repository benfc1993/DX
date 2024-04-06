// @ts-nocheck
/* eslint-disable */

// something that can either error or not
// the response can then have other operations
//
const result = makePurchase()

if (result.errors) {
  if (result.error.type === PURCHASE_ERROR.OUT_OF_STOCK) {
    sendOutOfStockEmail(result.outOfStockItems)
  }
  throw result.errors
}

sendPurchaseEmail(result.data)

res.send(result.data)
