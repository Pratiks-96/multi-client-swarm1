from fastapi import FastAPI
from prometheus_client import Counter, generate_latest, CONTENT_TYPE_LATEST
from fastapi.responses import Response

app = FastAPI()

# metric
REQUEST_COUNT = Counter(
    "client_b_requests_total",
    "Total requests for Client B"
)

@app.get("/")
async def root():
    REQUEST_COUNT.inc()
    return {"message": "Client B Root!"}

@app.get("/health")
async def health():
    return {"status": "ok"}

@app.get("/metrics")
async def metrics():
    return Response(
        generate_latest(),
        media_type=CONTENT_TYPE_LATEST
    )
