from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Client B Root!"}

@app.get("/health")
async def health():
    return {"status": "ok"}
