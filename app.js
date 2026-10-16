function calculateLandedCost() {
  const currency = document.getElementById('currency').value;
  const units = parseFloat(document.getElementById('units').value) || 0;
  const unitCost = parseFloat(document.getElementById('unitCost').value) || 0;
  const shippingCost = parseFloat(document.getElementById('shippingCost').value) || 0;
  const insuranceCost = parseFloat(document.getElementById('insuranceCost').value) || 0;
  const dutyRate = (parseFloat(document.getElementById('dutyRate').value) || 0) / 100;
  const vatRate = (parseFloat(document.getElementById('vatRate').value) || 0) / 100;
  const sellingPrice = parseFloat(document.getElementById('sellingPrice').value) || 0;

  const totalProductCost = units * unitCost;
  const taxableValueForDuty = totalProductCost + shippingCost + insuranceCost;
  const totalDuty = taxableValueForDuty * dutyRate;
  const taxableValueForVat = taxableValueForDuty + totalDuty;
  const totalVat = taxableValueForVat * vatRate;
  const totalLandedCost = totalProductCost + shippingCost + insuranceCost + totalDuty + totalVat;
  const unitLandedCost = units > 0 ? totalLandedCost / units : 0;
  const totalRevenue = units * sellingPrice;
  const totalProfit = totalRevenue - totalLandedCost;
  const profitMargin = totalRevenue > 0 ? (totalProfit / totalRevenue) * 100 : 0;

  document.getElementById('res-productCost').innerText = `${currency}${totalProductCost.toFixed(2)}`;
  document.getElementById('res-duty').innerText = `${currency}${totalDuty.toFixed(2)}`;
  document.getElementById('res-vat').innerText = `${currency}${totalVat.toFixed(2)}`;
  document.getElementById('res-landedTotal').innerText = `${currency}${totalLandedCost.toFixed(2)}`;
  document.getElementById('res-unitLanded').innerText = `${currency}${unitLandedCost.toFixed(2)}`;
  document.getElementById('res-profit').innerText = `${currency}${totalProfit.toFixed(2)}`;
  document.getElementById('res-margin').innerText = `${profitMargin.toFixed(2)}%`;

  const affiliateBox = document.getElementById('affiliate-box');
  affiliateBox.innerHTML = `
    <h4>💡 Smart Ways to Reduce Your Landed Cost:</h4>
    <ul>
      <li><strong>Save on Supplier Wire Payments:</strong> Bank FX fees add 2–3% in hidden costs. Use low-fee multi-currency transfers when paying overseas factories.</li>
      <li><strong>Compare Freight Quotes:</strong> Don't settle for standard carrier quotes. Compare ocean and air freight rates before booking container space.</li>
    </ul>
  `;

  document.getElementById('results').style.display = 'block';
}
  
