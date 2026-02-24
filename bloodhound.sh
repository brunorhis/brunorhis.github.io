#!/bin/bash

set -e

NEO4J_VERSION="4.4.26"
BH_VERSION="4.2.0"
INSTALL_DIR="$HOME/bloodhound-setup"

echo "[+] Atualizando sistema"
sudo apt update

echo "[+] Instalando dependências"
sudo apt install -y openjdk-11-jdk wget unzip

echo "[+] Configurando Java 11"
sudo update-alternatives --set java /usr/lib/jvm/java-11-openjdk-amd64/bin/java || true

mkdir -p "$INSTALL_DIR"
cd "$INSTALL_DIR"

echo "[+] Baixando Neo4j"
wget -nc https://dist.neo4j.org/neo4j-community-${NEO4J_VERSION}-unix.tar.gz
tar -xzf neo4j-community-${NEO4J_VERSION}-unix.tar.gz

echo "[+] Baixando BloodHound"
wget -nc https://github.com/BloodHoundAD/BloodHound/releases/download/${BH_VERSION}/BloodHound-linux-x64.zip
unzip -o BloodHound-linux-x64.zip
chmod +x BloodHound-linux-x64/BloodHound

echo "[+] Criando atalho global"
sudo ln -sf $INSTALL_DIR/BloodHound-linux-x64/BloodHound /usr/local/bin/bloodhound-old

echo "[+] Iniciando Neo4j"
$INSTALL_DIR/neo4j-community-${NEO4J_VERSION}/bin/neo4j start

echo ""
echo "Instalacao concluida"
echo "Rodar:"
echo "bloodhound-old --disable-gpu"
echo ""
echo "Neo4j Web:"
echo "http://localhost:7474"
echo "Login inicial: neo4j / neo4j"
