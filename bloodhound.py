#!/usr/bin/env python3

import os
import subprocess
import sys

NEO4J_VERSION = "4.4.26"
BH_VERSION = "4.2.0"

HOME = os.path.expanduser("~")
INSTALL_DIR = os.path.join(HOME, "bloodhound-setup")
NEO4J_DIR = os.path.join(INSTALL_DIR, f"neo4j-community-{NEO4J_VERSION}")
BH_DIR = os.path.join(INSTALL_DIR, "BloodHound-linux-x64")


def run(cmd, check=True):
    print(f"[+] Executando: {cmd}")
    subprocess.run(cmd, shell=True, check=check)


def main():
    os.makedirs(INSTALL_DIR, exist_ok=True)
    os.chdir(INSTALL_DIR)

    print("\n[1] Instalando dependências básicas...")
    run("sudo apt update")
    run("sudo apt install -y openjdk-11-jdk wget unzip")

    print("\n[2] Configurando Java 11 como padrão...")
    run("sudo update-alternatives --set java /usr/lib/jvm/java-11-openjdk-amd64/bin/java", check=False)

    print("\n[3] Baixando Neo4j 4.4.26...")
    run(f"wget -nc https://dist.neo4j.org/neo4j-community-{NEO4J_VERSION}-unix.tar.gz")
    run(f"tar -xzf neo4j-community-{NEO4J_VERSION}-unix.tar.gz")

    print("\n[4] Baixando BloodHound 4.2.0 compilado...")
    run(f"wget -nc https://github.com/BloodHoundAD/BloodHound/releases/download/{BH_VERSION}/BloodHound-linux-x64.zip")
    run("unzip -o BloodHound-linux-x64.zip")
    run(f"chmod +x {BH_DIR}/BloodHound")

    print("\n[5] Criando atalho global bloodhound-old...")
    run(f"sudo ln -sf {BH_DIR}/BloodHound /usr/local/bin/bloodhound-old")

    print("\n[6] Iniciando Neo4j...")
    run(f"{NEO4J_DIR}/bin/neo4j start")

    print("\nInstalação concluída.\n")
    print("Para iniciar o BloodHound:")
    print("bloodhound-old --disable-gpu\n")
    print("Neo4j Web:")
    print("http://localhost:7474")
    print("Usuário inicial: neo4j")
    print("Senha inicial: neo4j")


if __name__ == "__main__":
    if os.geteuid() == 0:
        print("Não execute este script como root.")
        sys.exit(1)

    main()
