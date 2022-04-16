import emailSender from '../utils/emails';

function approvePayment(paymentId) {
  await updatePayment(paymentId);

  await updateOrders(paymentId);

  await sendApproveOrderEmail(paymentId);
}

async function updatePayment(id){
  const paymentData = { approvedAt: Date.now() }
  await paymentsRepository.update(id, paymentData);
}

async function updateOrders(id){
  const { orderId } = await paymentsRepository.find(id);
  const orderData = { status: 'approved' };
  await ordersRepository.update(orderId, orderData);
}

async function sendApproveOrderEmail(id){
  const { orderId } = await paymentsRepository.find(id);
  const order = await ordersRepository.find(orderId);
  const user =  await usersRepository.find(order.userId);
  await emailSender.sendApprovedOrderEmail(user, order);
}