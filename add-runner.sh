#!/bin/bash
set -e
cd /data/data/com.termux/files/home/.openclaw/workspace/java-learning-path/lessons
template="../runner-template.html"

for f in *.html; do
    slug="${f%.html}"
    echo "Appending runner to $f (slug: $slug)"
    sed "s/{{SLUG}}/${slug}/g" "$template" >> "$f"
done

echo "All lessons updated."
