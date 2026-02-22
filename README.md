# multi-client-swarm1
please make sure while doing this check your ec2 public ip and do changes in docker-stack yml 

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


if you dont want to maually building image and all then you can go for github workflow i updated the yaml for build and push image to docker hub repo 




Traefik dashboard look like this when all path are configured well

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/41629b88-244a-4547-9f82-78c7553753d8" />

also check the prometheus target healths 
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/95fed716-e726-4ee6-9504-f4192728f8d1" />

after that grafana dashboard for this all client-a , client-b
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/6ec6c03d-1eb9-493f-90d7-238bf0ba8beb" />

client-a
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/7ac540e8-f28b-4d0c-ad62-a3764b2ac4ab" />

client-b
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/1f65d454-18cc-4052-adca-2c06be6d77c3" />



