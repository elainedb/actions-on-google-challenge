#!/usr/bin/env bash
firebase deploy --only functions
curl -X POST -H 'Content-type: application/json' --data '{"text":"jade just deployed!"}' https://hooks.slack.com/services/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