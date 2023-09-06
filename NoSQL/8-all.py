#!/usr/bin/env python3
"""List all documents in a collection."""


def list_all(mongo_collection):
    """Return a list of all documents or an empty list."""
    return list(mongo_collection.find())
