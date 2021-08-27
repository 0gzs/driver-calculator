import { IState } from '../interfaces/state';

const calculate = (state: IState) => {
  const {
    totalHours,
    activeHours,
    tips,
    miles,
    weeklyRewards,
    orders,
    guaranteedRate,
    subsidyRate,
    mileageRate,
    commissionRate,
  } = state;

  const guaranteedAmount = parseFloat((activeHours * subsidyRate).toFixed(2));
  const commissionEarnings = parseFloat((commissionRate * orders).toFixed(2));

  const calcGreaterPay = () => {
    if (commissionEarnings > guaranteedAmount) return commissionEarnings;
    return guaranteedAmount;
  };

  const greaterVal = calcGreaterPay();
  const earnings = commissionEarnings + weeklyRewards;
  const mileageEarnings = parseFloat((miles * mileageRate).toFixed(2));
  const weekPay = parseFloat((earnings + tips + mileageEarnings).toFixed(2));

  const payPerHour = parseFloat((earnings / totalHours).toFixed(2));
  const difference = parseFloat((guaranteedRate - payPerHour).toFixed(2));
  const adjustments = parseFloat((difference * totalHours).toFixed(2));
  const finalPay = parseFloat((adjustments + weekPay).toFixed(2));

  console.log(activeHours, guaranteedRate, earnings, mileageEarnings);
  return [
    activeHours,
    guaranteedAmount,
    earnings,
    mileageEarnings,
    commissionEarnings,
    weekPay,
    difference,
    adjustments,
    finalPay,
    payPerHour,
    greaterVal
  ]
};

export default calculate;
