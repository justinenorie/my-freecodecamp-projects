const form = document.getElementById("form");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaintsGroup = document.getElementById("complaints-group");
const damagedProduct = document.getElementById("damaged-product");
const nonConfirmingProduct = document.getElementById("nonconforming-product");
const delayedDispatch = document.getElementById("delayed-dispatch");
const otherComplaint = document.getElementById("other-complaint");
const complaintDescription = document.getElementById("complaint-description");
const solutionGroup = document.getElementById("solutions-group");
const refund = document.getElementById("refund");
const exchange = document.getElementById("exchange");
const solution = document.getElementById("other-solution");
const solutionDescription = document.getElementById("solution-description");
const submitBtn = document.getElementById("submit-btn");
const messageBox = document.getElementById("message-box");

const validateForm = () => {
  const complaintsArr = [damagedProduct, nonConfirmingProduct, delayedDispatch, otherComplaint].map(item => item.checked);
  const solutionsArr = [refund, exchange, solution].map(item => item.checked);

  const validation = {
    "full-name": Boolean(fullName.value.trim()),
    "email": /^\S+@\S+\.\S+$/.test(email.value.trim()),
    "order-no": /^2024\d{6}$/.test(orderNo.value.trim()),
    "product-code": /[A-Z]{2}\d{2}-[A-Z]\d{3}-[A-Z]{2}\d/i.test(productCode.value.trim()),
    "quantity": Number(quantity.value.trim()) > 0,
    "complaints-group": complaintsArr.some(item => item),
    "complaint-description": otherComplaint.checked ? complaintDescription.value.trim().length >= 20 : true,
    "solutions-group": solutionsArr.some(item => item),
    "solution-description": solution.checked ? solutionDescription.value.trim().length >= 20 : true
  };

  return validation;
}

const isValid = () => {
  const validationObject = validateForm();
  return Object.values(validationObject).every(item => item);
};

fullName.addEventListener("change", () => {
  fullName.style.borderColor = validateForm()["full-name"] ? "green" : "red";
});

email.addEventListener("change", () => {
  email.style.borderColor = validateForm()["email"] ? "green" : "red";
});

orderNo.addEventListener("change", () => {
  orderNo.style.borderColor = validateForm()["order-no"] ? "green" : "red";
});

productCode.addEventListener("change", () => {
  productCode.style.borderColor = validateForm()["product-code"] ? "green" : "red";
});

quantity.addEventListener("change", () => {
  quantity.style.borderColor = validateForm()["quantity"] ? "green" : "red";
});

complaintsGroup.addEventListener("change", () => {
  complaintsGroup.style.borderColor = validateForm()["complaints-group"] ? "green" : "red";
});

complaintDescription.addEventListener("change", () => {
  complaintDescription.style.borderColor = validateForm()["complaint-description"] ? "green" : "red";
});

solutionGroup.addEventListener("change", () => {
  solutionGroup.style.borderColor = validateForm()["solutions-group"] ? "green" : "red";
});

solutionDescription.addEventListener("change", () => {
  solutionDescription.style.borderColor = validateForm()["solution-description"] ? "green" : "red";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isValid();
});