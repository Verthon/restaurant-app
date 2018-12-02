export const formatPrice = (cents) => {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export const formatDate = (date) => {
  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
  return date.toLocaleDateString('en-US', options);
}

