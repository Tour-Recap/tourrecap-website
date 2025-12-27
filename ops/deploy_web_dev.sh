#!/usr/bin/env bash
set -euo pipefail

# Deploy tourrecap-website to Cloud Run (dev environment)
# Usage: ./ops/deploy_web_dev.sh

SERVICE_NAME="tourrecap-website"
REGION="us-east1"

echo "Deploying ${SERVICE_NAME} to ${REGION}..."

gcloud run deploy "${SERVICE_NAME}" \
  --source . \
  --region "${REGION}" \
  --allow-unauthenticated \
  --min-instances=0 \
  --max-instances=3 \
  --cpu=1 \
  --memory=512Mi \
  --concurrency=80 \
  --timeout=60s \
  --cpu-throttling

echo ""
echo "Deployed. Service URL:"
gcloud run services describe "${SERVICE_NAME}" --region "${REGION}" --format='value(status.url)'
