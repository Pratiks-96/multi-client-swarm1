# multi-client-swarm1

# Create Traefik overlay network
docker network create --driver=overlay traefik-public

# Build images
docker build -t client-a ./client-a
docker build -t client-b ./client-b

# Deploy stack
docker stack deploy -c docker-stack.yml multi-client

# Check services
docker service ls

# Check logs
docker service logs multi-client_traefik -f
