#!/usr/bin/env python3
"""Insert a new document in a collection based on kwargs."""


def insert_school(mongo_collection, **kwargs):
    """Insert a new document into the collection and return its _id."""
    new_document = kwargs
    result = mongo_collection.insert_one(new_document)
    return result.inserted_id
