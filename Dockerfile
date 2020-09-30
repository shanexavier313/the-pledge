# Pull base image
FROM python:3.8-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /app

# Upgrade pip and pip-tools
RUN python -m pip install --no-cache-dir -U pip pip-tools

# Install dependencies
COPY requirements.txt /app/requirements.txt
RUN python -m pip install --no-cache-dir -r requirements.txt

# Copy project
COPY . /app/
