#!/usr/bin/env bash
set -euo pipefail

# Check domain DNS and HTTP status for Cloud Run
# Usage: ./ops/domain_check.sh [domain]

DOMAIN="${1:-www.tourrecap.com}"

echo "=== Cloud Run Domain Check ==="
echo "Domain: ${DOMAIN}"
echo ""

echo "--- gcloud config ---"
gcloud config get-value project 2>/dev/null || echo "(not set)"
gcloud config get-value run/region 2>/dev/null || echo "(not set)"
echo ""

echo "--- DNS Records ---"
echo "CNAME:"
dig "${DOMAIN}" CNAME +short || echo "(none)"
echo "A:"
dig "${DOMAIN}" A +short || echo "(none)"
echo "AAAA:"
dig "${DOMAIN}" AAAA +short || echo "(none)"
echo ""
echo "nslookup:"
nslookup "${DOMAIN}" 2>/dev/null | grep -E "(canonical|Address)" | head -3 || echo "(failed)"
echo ""

echo "--- HTTP Checks ---"
echo "http://${DOMAIN}:"
curl -sI "http://${DOMAIN}" 2>/dev/null | head -2 || echo "Connection failed"
echo ""
echo "https://${DOMAIN}:"
curl -sI "https://${DOMAIN}" 2>/dev/null | head -2 || echo "Connection failed"
echo ""

if [[ "${DOMAIN}" == "www."* ]]; then
  echo "--- Expected ---"
  echo "CNAME: ghs.googlehosted.com."
  echo "HTTP http://: 301 → https://"
  echo "HTTP https://: 200"
else
  echo "--- Expected (apex) ---"
  echo "HTTP http://: 301 → https://www.tourrecap.com"
  echo "HTTP https://: 301 → https://www.tourrecap.com"
fi
