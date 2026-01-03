
# 🚀 CaliPRO Ultra - Guia de Deploy Definitivo

Siga estes passos para colocar seu app no ar agora:

### 1. Preparação Local
Crie uma pasta chamada `calipro-app` e coloque **todos** os arquivos nela. 

### 2. No terminal (dentro da pasta):
Se você já tem o Git instalado, execute estes comandos em ordem:
```bash
# Inicializa o repositório
git init

# Adiciona todos os arquivos
git add .

# Cria a primeira versão
git commit -m "feat: setup profissional para deploy"
```

### 3. No GitHub:
1. Vá em [github.com/new](https://github.com/new).
2. Nome do repositório: `calipro-ultra`.
3. Clique em **"Create repository"**.
4. O GitHub vai te mostrar uma página com vários códigos. Procure a seção que diz **"or push an existing repository from the command line"** e copie as 3 linhas que começam com `git remote...`. Elas serão parecidas com isso:
```bash
git remote add origin https://github.com/SEU_USER/calipro-ultra.git
git branch -M main
git push -u origin main
```

### 4. Na Vercel:
1. Acesse o dashboard da Vercel.
2. Clique em **"Add New"** > **"Project"**.
3. Importe o repositório `calipro-ultra`.
4. Em "Framework Preset", a Vercel deve detectar **Vite** automaticamente.
5. Clique em **"Deploy"**.

---
### 🎉 Seu app estará online em: 
`https://calipro-ultra.vercel.app` (ou similar)
