const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const router = express.Router();

// Proxy to Authentication Service
router.use("/auth", createProxyMiddleware({
  target: "http://auth-service:5001",
  changeOrigin: true
}));

// Proxy to Energy Data Service
router.use("/energy-data", createProxyMiddleware({
  target: "http://energy-data-service:5002",
  changeOrigin: true
}));

// Proxy to Analytics Service
router.use("/analytics", createProxyMiddleware({
  target: "http://analytics-service:5003",
  changeOrigin: true
}));

// Proxy to Notification Service
router.use("/notifications", createProxyMiddleware({
  target: "http://notification-service:5004",
  changeOrigin: true
}));

module.exports = router;
