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
echo "NS (tourrecap.com):"
dig tourrecap.com NS +short || echo "(none)"
echo ""
echo "CNAME (www):"
dig www.tourrecap.com CNAME +short || echo "(none)"
echo ""

echo "--- HTTP Checks ---"
if [[ "${DOMAIN}" == "www."* ]]; then
  # www: HEAD works fine
  echo "http://${DOMAIN} (HEAD):"
  curl -sI "http://${DOMAIN}" 2>/dev/null | grep -iE 'HTTP/|location:' | head -2 || echo "Connection failed"
  echo ""
  echo "https://${DOMAIN} (HEAD):"
  curl -sI "https://${DOMAIN}" 2>/dev/null | grep -iE 'HTTP/|location:' | head -2 || echo "Connection failed"
  echo ""
  echo "--- Expected ---"
  echo "CNAME: ghs.googlehosted.com."
  echo "HTTP http://: 301 → https://"
  echo "HTTP https://: 200"
else
  # Apex: use GET to avoid GoDaddy 405 on HEAD
  echo "http://${DOMAIN} (GET):"
  curl -sS "http://${DOMAIN}" -o /dev/null -D- 2>/dev/null | grep -iE 'HTTP/|location:' | head -2 || echo "Connection failed"
  echo ""
  echo "https://${DOMAIN} (GET):"
  curl -sS "https://${DOMAIN}" -o /dev/null -D- 2>/dev/null | grep -iE 'HTTP/|location:' | head -2 || echo "Connection failed"
  echo ""
  echo "--- Expected (apex) ---"
  echo "HTTP http://: 301 → https://www.tourrecap.com"
  echo "HTTP https://: 301 → https://www.tourrecap.com"
  echo ""
  echo "Note: GoDaddy forwarding returns 405 for HEAD; using GET instead."
fi
