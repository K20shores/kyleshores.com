import React, { useState } from "react"
import getStripe from "../../utils/stripe_loader"
import * as styles from "./product-card.module.scss"

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  })
  return numberFormat.format(price)
}

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)

    let price = product.prices[0].id
    // const price = new FormData(event.target).get("priceSelect")

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "subscription",
      lineItems: [{ price, quantity: 1 }],
      successUrl: `${window.location.origin}/store/?purchased=true`,
      cancelUrl: `${window.location.origin}`,
    })

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

  return (
    <div className={styles.card}>
      <form className={styles.centeredColumn} onSubmit={handleSubmit}>
        <fieldset className={styles.centeredColumn} style={{ border: "none" }}>
          <legend>
            <h4>{product.name}</h4>
          </legend>
          <label>
            Price{" "}
            {
                product.prices.length === 1 ?
                    formatPrice(product.prices[0].unit_amount, product.prices[0].currency)
                :
                <select name="priceSelect">
                {product.prices.map(price => (
                    <option key={price.id} value={price.id}>
                    {formatPrice(price.unit_amount, price.currency)}
                    </option>
                ))}
                </select>
            }
          </label>
        </fieldset>
        <button
          disabled={loading}
          className={
              loading ? `${styles.button} ${styles.disabled}}` : `${styles.button}`
          }
        >
          Purchase
        </button>
      </form>
    </div>
  )
}

export default ProductCard