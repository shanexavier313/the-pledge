#!/bin/bash

set -e

yarn install --silent

exec "$@"
