import moment from "moment";
import { RANGE_CONFIG } from "../config/config";

let mock_daily_duration = moment.duration(2, "months").asDays();
let mock_3_months_duration = moment.duration(3, "months").asMonths();
let mock_6_months_duration = moment.duration(6, "months").asMonths();
let mock_12_months_duration = moment.duration(12, "months").asMonths();

export const getDailyMockData = () => {
  let daily = [];
  for (var i = 1; i <= mock_daily_duration; i++) {
    daily.push({
      date: moment().subtract(i + 1, "d"),
      sales:
        Math.floor(
          Math.random() *
            (RANGE_CONFIG.daily.sales.max - RANGE_CONFIG.daily.sales.min + 1)
        ) + RANGE_CONFIG.daily.sales.min,
      new_sales:
        Math.floor(
          Math.random() *
            (RANGE_CONFIG.daily.new_sales.max -
              RANGE_CONFIG.daily.new_sales.min +
              1)
        ) + RANGE_CONFIG.daily.new_sales.min,
      payments:
        Math.floor(
          Math.random() *
            (RANGE_CONFIG.daily.payments.max -
              RANGE_CONFIG.daily.payments.min +
              1)
        ) + RANGE_CONFIG.daily.payments.min,
      refunds:
        Math.floor(
          Math.random() *
            (RANGE_CONFIG.daily.refunds.max -
              RANGE_CONFIG.daily.refunds.min +
              1)
        ) + RANGE_CONFIG.daily.refunds.min
    });
  }

  return daily;
};

export const getQuarterlyMockData = () => {
  let quarterly = [];
  for (var i = mock_3_months_duration; i >= 1; i--) {
    quarterly.push({
      month: moment()
        .subtract(i, "months")
        .format("MMM"),
      sales: {
        amount:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.quarterly.sales.max -
                RANGE_CONFIG.quarterly.sales.min +
                1)
          ) + RANGE_CONFIG.quarterly.sales.min,
        growth:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.quarterly.sales.max -
                RANGE_CONFIG.quarterly.sales.min +
                1)
          ) + RANGE_CONFIG.quarterly.sales.min
      },
      new_sales: {
        amount:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.quarterly.new_sales.max -
                RANGE_CONFIG.quarterly.new_sales.min +
                1)
          ) + RANGE_CONFIG.quarterly.new_sales.min,
        growth:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.quarterly.new_sales.max -
                RANGE_CONFIG.quarterly.new_sales.min +
                1)
          ) + RANGE_CONFIG.quarterly.new_sales.min
      },
      payments: {
        amount:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.quarterly.payments.max -
                RANGE_CONFIG.quarterly.payments.min +
                1)
          ) + RANGE_CONFIG.quarterly.payments.min,
        growth:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.quarterly.payments.max -
                RANGE_CONFIG.quarterly.payments.min +
                1)
          ) + RANGE_CONFIG.quarterly.payments.min
      },
      refunds: {
        amount:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.quarterly.refunds.max -
                RANGE_CONFIG.quarterly.refunds.min +
                1)
          ) + RANGE_CONFIG.quarterly.refunds.min,
        growth:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.quarterly.refunds.max -
                RANGE_CONFIG.quarterly.refunds.min +
                1)
          ) + RANGE_CONFIG.quarterly.refunds.min
      }
    });
  }

  return quarterly;
};

export const getSemiAnnualMockData = () => {
  let semi_annual = [];
  for (var i = mock_6_months_duration; i >= 1; i--) {
    semi_annual.push({
      month: moment()
        .subtract(i, "months")
        .format("MMM"),
      sales: {
        amount:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.semi_annually.sales.max -
                RANGE_CONFIG.semi_annually.sales.min +
                1)
          ) + RANGE_CONFIG.semi_annually.sales.min,
        growth:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.semi_annually.sales.max -
                RANGE_CONFIG.semi_annually.sales.min +
                1)
          ) + RANGE_CONFIG.semi_annually.sales.min
      },
      new_sales: {
        amount:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.semi_annually.new_sales.max -
                RANGE_CONFIG.semi_annually.new_sales.min +
                1)
          ) + RANGE_CONFIG.semi_annually.new_sales.min,
        growth:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.semi_annually.new_sales.max -
                RANGE_CONFIG.semi_annually.new_sales.min +
                1)
          ) + RANGE_CONFIG.semi_annually.new_sales.min
      },
      payments: {
        amount:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.semi_annually.payments.max -
                RANGE_CONFIG.semi_annually.payments.min +
                1)
          ) + RANGE_CONFIG.semi_annually.payments.min,
        growth:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.semi_annually.payments.max -
                RANGE_CONFIG.semi_annually.payments.min +
                1)
          ) + RANGE_CONFIG.semi_annually.payments.min
      },
      refunds: {
        amount:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.semi_annually.refunds.max -
                RANGE_CONFIG.semi_annually.refunds.min +
                1)
          ) + RANGE_CONFIG.semi_annually.refunds.min,
        growth:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.semi_annually.refunds.max -
                RANGE_CONFIG.semi_annually.refunds.min +
                1)
          ) + RANGE_CONFIG.semi_annually.refunds.min
      }
    });
  }

  return semi_annual;
};

export const getAnnualMockData = () => {
  let annual = [];
  for (var i = mock_12_months_duration; i >= 1; i--) {
    annual.push({
      month: moment()
        .subtract(i, "months")
        .format("MMM"),
      sales: {
        amount:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.annually.sales.max -
                RANGE_CONFIG.annually.sales.min +
                1)
          ) + RANGE_CONFIG.annually.sales.min,
        growth:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.annually.sales.max -
                RANGE_CONFIG.annually.sales.min +
                1)
          ) + RANGE_CONFIG.annually.sales.min
      },
      new_sales: {
        amount:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.annually.new_sales.max -
                RANGE_CONFIG.annually.new_sales.min +
                1)
          ) + RANGE_CONFIG.annually.new_sales.min,
        growth:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.annually.new_sales.max -
                RANGE_CONFIG.annually.new_sales.min +
                1)
          ) + RANGE_CONFIG.annually.new_sales.min
      },
      payments: {
        amount:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.annually.payments.max -
                RANGE_CONFIG.annually.payments.min +
                1)
          ) + RANGE_CONFIG.annually.payments.min,
        growth:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.annually.payments.max -
                RANGE_CONFIG.annually.payments.min +
                1)
          ) + RANGE_CONFIG.annually.payments.min
      },
      refunds: {
        amount:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.annually.refunds.max -
                RANGE_CONFIG.annually.refunds.min +
                1)
          ) + RANGE_CONFIG.annually.refunds.min,
        growth:
          Math.floor(
            Math.random() *
              (RANGE_CONFIG.annually.refunds.max -
                RANGE_CONFIG.annually.refunds.min +
                1)
          ) + RANGE_CONFIG.annually.refunds.min
      }
    });
  }

  return annual;
};

export const formatAmount = value => {
  return value >= 1000 ? `$${(value / 1000).toFixed(2)}K` : `$${value}`;
};
