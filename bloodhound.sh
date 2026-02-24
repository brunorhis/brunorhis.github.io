#!/bin/bash

set -e

BH_VERSION="4.2.0"
INSTALL_DIR="$HOME/bloodhound-setup"

echo "[+] Atualizando sistema"
sudo apt update

echo "[+] Instalando dependências"
sudo apt install -y openjdk-11-jdk neo4j wget unzip

echo "[+] Configurando Java 11"
sudo update-alternatives --set java /usr/lib/jvm/java-11-openjdk-amd64/bin/java || true

echo "[+] Iniciando Neo4j"
sudo neo4j start

sleep 5

mkdir -p "$INSTALL_DIR"
cd "$INSTALL_DIR"

echo "[+] Baixando BloodHound 4.2.0 compilado"
wget -nc https://github.com/BloodHoundAD/BloodHound/releases/download/${BH_VERSION}/BloodHound-linux-x64.zip
unzip -o BloodHound-linux-x64.zip
chmod +x BloodHound-linux-x64/BloodHound

echo "[+] Criando atalho global"
sudo ln -sf $INSTALL_DIR/BloodHound-linux-x64/BloodHound /usr/local/bin/bloodhound-old

echo ""
echo "Instalacao concluida"
echo ""
echo "Neo4j Web:"
echo "http://localhost:7474"
echo "Login inicial: neo4j / neo4j"
echo ""
echo "Para iniciar o BloodHound:"
echo "bloodhound-old --disable-gpu"
