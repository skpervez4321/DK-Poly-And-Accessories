// প্রোডাক্ট ডিটেইল টগল ফাংশন
function toggleDetails(id) {
  const detailDiv = document.getElementById('details-' + id);
  if (detailDiv.style.display === "block") {
    detailDiv.style.display = "none";
  } else {
    detailDiv.style.display = "block";
  }
}

// পলি সাইজ থেকে কস্ট ক্যালকুলেটর উদাহরণ
function calculateCost(size, ratePerUnit) {
  // উদাহরণ: ratePerUnit টাকা প্রতি সাইজ ইউনিটে
  return size * ratePerUnit;
}

// ক্যালকুলেটর: একটি উদাহরণ
document.getElementById('calcBtn')?.addEventListener('click', function() {
  const size = parseFloat(document.getElementById('sizeInput').value);
  const rate = parseFloat(document.getElementById('rateInput').value);
  if (isNaN(size) || isNaN(rate)) {
    alert("অনুগ্রহ করে সঠিক সংখ্যা প্রবেশ করান");
  } else {
    const cost = calculateCost(size, rate);
    document.getElementById('costResult').textContent = 'Estimated Cost: ' + cost.toFixed(2);
  }
});
