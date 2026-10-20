const createNextIntlPlugin = require('next-intl/plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withNextIntl = createNextIntlPlugin();
module.exports = withNextIntl(nextConfig);
