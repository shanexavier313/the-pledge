FROM python:3.8-slim

# Set environment variables
ENV DEBIAN_FRONTEND noninteractive
ENV LANG C.UTF-8
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV DJANGO_SETTINGS_MODULE djangodocker.settings.production

# Get utils
RUN apt-get update -qq && apt-get install -y -qq \
    binutils \
    curl \
  && rm -rf /var/apt/lists/* && rm -rf /var/cache/apt/*

RUN apt-get clean

# Upgrade pip and pip-tools
RUN python -m pip install --no-cache-dir -U pip pip-tools

## Install node/npm
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get install -y -qq nodejs \
    && curl -L https://www.npmjs.com/install.sh | sh

WORKDIR /app

# Install backend deps
COPY requirements.txt /app/requirements.txt
RUN python -m pip install --no-cache-dir -r requirements.txt

# Install frontend deps
COPY frontend/package.json frontend/yarn.lock /app/frontend/
RUN npm install -g yarn
WORKDIR /app/frontend
RUN yarn install --silent

# Copy application code
COPY . /app/

EXPOSE 8000 3000
